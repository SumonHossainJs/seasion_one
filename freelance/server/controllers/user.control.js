import User from '../Models/user.model.js';
import createErorr from '../utils/createErorr.js';


export const deleteUser = async (req,res,next) =>{
    try{
        const user = await User.findById(req.params.id);

        if(!user) return next(createErorr(404, 'user not found'));

        if(req.userId !== user._id.toString()){
            return next(createErorr(403,'You can only delete your account'));
        }

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    }catch(err){
        next(err);
    }
}

export const updateUser = async (req,res,next) =>{
    try{
        const user = await User.findById(req.params.id);

        if(!user) return next(createErorr(404, 'user not found'));

        if(req.userId !== user._id.toString()){
            return next(createErorr(403,'You can only delete your account'));
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body },
            { new: true });
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    }
}

export const getUser = async (req,res,next) =>{
    const user = await User.findById(req.params.id);
    if(!user ) return next(createErorr(404, " user not Found"));
    res.status(200).json(user)
}