//const express = require('express') //method 1 to import express
import express from 'express' ;      //add "type":"module" in package.json
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import cookieParser from 'cookie-parser';
import messageRoute from "./routes/messageRoute.js"
import cors from "cors";
import { app,server } from "./socket/socket.js";


dotenv.config({});


//defining express app
const app = express();

const PORT = process.env.PORT || 5000;

//middleware(b/w req and res)
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
    origin:`http://localhost:3000`,
    credentials:true
}
app.use(cors(corsOption));

//routes
app.use("/api/v1/user", userRoute);
// https://localhost:8080/api/v1/user/register

app.use("/api/v1/message",messageRoute);


app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});
