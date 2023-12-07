import Gig from "../Models/gig.model.js";
import createErorr from "../utils/createErorr.js";

export const createGig = async (req, res, next) => {
  try {
    if (!req.isSeller)
      return next(createErorr(404, " Only Sellers can create a Gig"));

    const newGig = new Gig({
      userId: req.userId,
      ...req.body,
    });
    const savedGig = await newGig.save();
    res.status(200).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(createErorr(404, "gig not Found"));
    if (gig.userId !== req.userId)
      return next(createErorr(404, "you can only delete your gig"));
    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).json("The gig has been deleted");
  } catch (error) {
    next(error);
  }
};
export const uipdateGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(createErorr(404, "gig not Found"));
    if (gig.userId !== req.userId)
      return next(createErorr(404, "you can only update your gig"));
    const updatedGig = await Gig.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedGig);
  } catch (error) {
    next(error);
  }
};
export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(createErorr(404, "gig not Found"));

    res.status(200).json(gig);
  } catch (error) {
    next(error);
  }
};
export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) },
    }),
    ...(q.search && { title : {$regex: q.search, $options: 'i'}}),
  };
  try {

    const gigs = await Gig.find(filters).sort({[q.sort]: -1});
    res.status(200).json(gigs);
  } catch (error) {
    next(error);
  }
};
