import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path: './env'
});

const app = express();

connectDB()
.then(process.env.PORT, () => {
    app.listen(`Server is running on port : ${process.env.PORT}`);
})
.catch((err) => {
    console.log('MongoDB connection failed : ', err);
});

