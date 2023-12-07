import mongoose from "mongoose";
const { Schema } = mongoose;

const gigSchema = new Schema({
    userId:{
        type:String, 
        required:true,
    },
    cover:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    shortTitle:{
        type:String,
        required:true,
    },
    shortDesc:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    cat:{
        type:String,
        required:true,
    },
    
    totalStar:{
        type:Number,
        default: 0,
    },
    deliveryTime:{
        type:Number,
        default: 0,
    },
    revisionNumber:{
        type:Number,
        default: 0,
    },
    sales:{
        type:Number,
        default: 0,
    },
    starNumber:{
        type:Number,
        default: 0,
    },
    price:{
        type:Number,
        required:true,
    },
    sellerId:{
        type:[String],
        required:false,
    },
    images:{
        type:String,
        required:true,
    }
}, {timestamps: true});

export default mongoose.model('gig', gigSchema);