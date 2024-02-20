import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js"
import authRouter from './routes/auth.route.js';

dotenv.config();

//mongodb connection
mongoose.connect(process.env.MONGO).then(()=>{console.log('Mongodb connected')}).catch((err)=> console.log(err))

const app=express();

app.use(express.json());
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.use("/server/user",userRouter);
app.use("/server/auth",authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message||'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
    })