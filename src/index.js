//console.log("Har Har Mahadev");
//require('dotenv').config()

import 'dotenv/config'
import { connectDB } from "./db/db.js";




connectDB()
.then(()=>{

app.on("Error",(err)=>{
   console.error("Error : ",err)
   throw err

})    
app.listen(process.env.PORT,()=>{
    console.log(`Server is Active at ${process.env.port}`);
     

})
})
.catch((err)=>{
    console.log("Mongo db is connection failed",err);
})































































































































































































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