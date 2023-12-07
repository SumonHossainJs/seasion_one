import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema({
    id:{
        type:String, 
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    sellerId:{
        type:String,
        required:true,
    },
    lastMessage:{
        type:String,
        required:false,
    },
    readbyUser:{
        type:Boolean,
        required: true,
    },
    readbyBuyer:{
        type:Boolean,
        required:true,
    },
    
   
}, {timestamps: true});

export default mongoose.model('conversation', conversationSchema);