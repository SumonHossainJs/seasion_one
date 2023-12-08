import createErorr from "../utils/createErorr.js";
import Review from '../Models/review.model.js';

import Gig from '../Models/gig.model.js';



export const craeteAReview = async (req,res,next) =>{
    if(req.iSeller) return next(createErorr(404, " Selller can not create a review"));


    const newReview = new Review({
        userId:req.userId,
        gigId:req.body.gigId,
        desc:req.body.desc,
        star: req.body.star,
    });

    try{
         const review = await Review.findOne({
            gigId: req.body.gigId,
            userId: req.body.userId,
         })

         if(review) return next(createErorr(404, "You have already created a review"));

         const savedReview = await newReview.save();
          await Gig.findByIdAndUpdate(req.body.gigId, {
            $inc: { totalStar: req.body.star, starNumber: 1},
          });

          res.status(200).json(savedReview);
    }catch(err){
        next(err);
    }
}


export const getReview = async (req,res,next) =>{
    try{
        const reviews = await Review.find({gigId: req.params.gigId});

        res.status(200).json(reviews);
    }catch(err){
        next(err);
    }
}