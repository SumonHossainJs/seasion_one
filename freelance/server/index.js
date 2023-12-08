import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import reviewRoute from './routes/review.route.js';
import orderRoute from './routes/order.route.js';

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


app.use("/auth", authRoute);
app.use('/user', userRoute);
app.use('/gig', gigRoute);
app.use('/review', reviewRoute);
app.use('/order', orderRoute);



app.listen(PORT, ()=>{
    connect();
    console.log(`Server is up and runnig on PORT: ${PORT}`);
})