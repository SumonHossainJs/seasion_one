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


export const login = async (req,res,next) =>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user) return next(createError(404, " user Not found"));


        const isCurrect = bcrypt.compareSync(req.body.password, user.password);

        if(!isCurrect) return next(createError(400, "Wrong password or email"));


        const token = jwt.sign(
            {
                id:user._id,
                isSeller: user.isSeller,
            }, 
            process.env.JWT
        );

        const { password, ...info} = user._doc;

        res.cookie("accessToken", token).status(200).json(info);


    }catch(err){
        next(err)
    }
}

export const logout = async (req,res,next) =>{
    res.clearCookie("accessToken", {
        sameSite: 'none',
        secure: true,
    }).status(200).send("user has been logged out");
}