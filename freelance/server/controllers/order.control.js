import createErorr from "../utils/createErorr.js";
import Order from '../Models/order.model.js'
import Gig from '../Models/gig.model.js';
import Stripe from 'stripe';



export const intent = async (req,res,next) =>{
    const stripe = new Stripe(process.env.STRIPE);

    const gig = await Gig.findById(req.params.id);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: gig.price*100,
        currency:'usd',
        automatic_payment_methods:{
            enabled: true,
        }
    });

    const newOrder = new Order({
        gigId: gig._id,
        img:gig.cover,
        title:gig.title,
        buyerId:req.userId,
        sellerId: gig.userId,
        price:gig.price,
        paymentIntent:paymentIntent.id
    })

    await newOrder.save();

    res.status(200).send({
        clientSecret: paymentIntent.client_secret,
    })
}


export const getOrders = async (req,res,next) =>{
    try{
        const orders = await Order.find({
            ...(req.isSeller ? {sellerId : req.userId} :{buyerId: req.userId }),
            isCompleted: true,
        })
        res.status(200).json(orders);
    }catch(err){
        next
    }
}
export const confromOrders = async (req,res,next) =>{
    try{
        const orders = await Order.findByIdAndUpdate(
            {
                paymentIntent: req.body.paymentIntent,
            }, {
                $set:{
                    isCompleted: true,
                }
            }
        )
        res.status(200).json(orders);
    }catch(err){
        next
    }
}