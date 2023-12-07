import User from '../Models/user.model.js';
import createError from '../utils/createErorr.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const register = async (req,res,next) => {
    try{
        const hash = bcrypt.hashSync(req.body.password, 8);
        const newUser = new User({
            ...req.body,
            password: hash,
        })
        const saveduser = await newUser.save();
        res.status(200).json(saveduser);
    }catch(err){
        next(err);
    }
}