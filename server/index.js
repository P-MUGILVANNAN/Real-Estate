const express = require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

//mongodb connection
mongoose.connect(process.env.MONGO).then(()=>{console.log('Mongodb connected')}).catch((err)=> console.log(err))

const app=express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})