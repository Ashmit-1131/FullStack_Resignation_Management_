const mongoose=require("mongoose")
require("dotenv").config()

exports.connectDb=async()=>{
    try{
 await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
 })
 console.log("mongodb connected successfully")
    }catch(err){
console.log("error in connecting with the mongoDb",err)
  process.exit(1)
    }
}

// module.exports=connectDb