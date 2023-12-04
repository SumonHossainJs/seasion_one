import mongoose from "mongoose";

const Connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("server is up and running");
    }catch(err){
        throw new Error("Conection failed");
    }
}

export default Connect;