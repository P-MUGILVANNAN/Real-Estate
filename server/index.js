import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js"

dotenv.config();

//mongodb connection
mongoose.connect(process.env.MONGO).then(()=>{console.log('Mongodb connected')}).catch((err)=> console.log(err))

const app=express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.use("/server/user",userRouter);