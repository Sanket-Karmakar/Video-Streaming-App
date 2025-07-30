import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import { DB_NAME } from '../constants.js'

dotenv.config()

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MONGODB CONNECTED SUCCESSFULLY !! HOST : ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log('MONGODB CONNECTION ERROR : ', error);
    }
}

export default connectDB;


