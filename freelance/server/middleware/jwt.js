import jwt from 'jsonwebtoken';
import createErorr from '../utils/createErorr.js';



export const verifyToken = (req,res,next) =>{
    const token = req.cookies.accessToken;
    if(!token) return next(createErorr(401, "You are not authenticated"));


    jwt.verify(token, process.env.JWT, async (err, payload) =>{
        if(err) return next(createErorr(403, "token is not valid"));

        req.userId = payload.id;
        req.isSeller = payload.isSeller;

        next();
    })
}