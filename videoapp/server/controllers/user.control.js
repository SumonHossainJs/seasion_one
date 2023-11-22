import { createError } from "../error.js";
import User from "../models/user.model.js";
import Video from "../models/video.model.js";

export const Update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateduser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      res.status(200).json(updateduser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(404, "You can only delete your account"));
  }
};
export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("The Requested user has been deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(404, "You can only delete your account"));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const subscribe = async (req, res, next) => {
  try {
   const isub = await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUser: req.params.id },
    },{new: true});
   const gotsub = await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: 1 } }, { new : true});

    res.status(200).json({isub , gotsub});
  } catch (err) {
    next(err);
  }
};
export const unsubscribe = async (req, res, next) => {
  try {
    const isub = await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUser: req.params.id },
    }, { new : true});
  const gotsub =  await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: -1 } }, { new: true});

    res.status(200).json({isub, gotsub});
  } catch (err) {
    next(err);
  }
};
export const like = async (req, res, next) => {
  try {
    const id = req.user.id;
    const videoId = req.params.id;

    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { disLikes: id },
    });

    res.status(200).json("The video has been Liked");
  } catch (err) {
    next(err);
  }
};
export const disLike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.id;

  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { disLikes: id },
      $pull: { likes: id },
    });

    res.status(200).json("The video has been disLiked");
  } catch (err) {
    next(err);
  }
};

export const Alluser = async (req, res, next) => {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (err) {
    next(err);
  }
};
