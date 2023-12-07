import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 5005;
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to DB');
    }catch(err){
        console.log(err);
    }
}

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());



app.listen(PORT, ()=>{
    connect();
    console.log(`Server is up and runnig on PORT: ${PORT}`);
})