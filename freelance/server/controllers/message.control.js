import createErorr from "../utils/createErorr.js";
import Message from "../Models/message.model.js";
import Conversation from "../Models/converstation.model.js";

export const createMessage = async (req, res, next) => {
  try {
    const newMessage = new Message({
      conversationId: req.body.conversationId,
      userId: req.userId,
      desc: req.body.desc,
    });
    const savedMessage = await newMessage.save();
    await Conversation.findByIdAndUpdate(
      {
        id: req.body.conversationId,
      },
      {
        $set: {
          readbyBuyer: !req.isSeller,
          readbySeller: req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json(savedMessage);
  } catch (err) {
    next(err);
  }
};

export const getMessage = async (req, res, next) => {
  try {

    const messages = await Message.find({conversationId: req.param.id});
    res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
};
