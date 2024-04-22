
import mongoose from "mongoose"
import express from "express"

import { DB_NAME } from "../constants.js"



const get=express()

 export const connectDB=async()=>{
 try{
   const connectionData= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
   console.log(`MongoDb connected !!   ${connectionData.connection.host}`);

    

 }
 catch(error){
    console.error("Erorr :  ",error)
    process.exit(1);
 }
}