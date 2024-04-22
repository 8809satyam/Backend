//console.log("Har Har Mahadev");
//require('dotenv').config()

import 'dotenv/config'
import { connectDB } from "./db/db.js";




connectDB();

// (async()=>{
//      try{
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log("Error occured in Express",error);
//         throw error
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`app is Active on the Port  ${process.env.PORT}`);
//       })
//      }
//      catch(error){
//     console.error("Error:",error);
//     throw error
//      }
// })()