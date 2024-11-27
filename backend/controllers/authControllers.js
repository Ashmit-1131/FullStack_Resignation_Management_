const User=require('../models/userModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
require("dotenv").config()

 const registerUser=async(req,res)=>{
    try{
 const {username,email,password}=req.body;
 const existingUser=await User.findOne({$or:[{username},{email}]});
 if(existingUser){
    return res.status(400).json({message:"User already exists"});
 }
 const newUser=new User({
    username,
    email,
    password,
    role:'employee'
 })
 await newUser.save()
 res.status(201).json({message:"User registered Successfully"});
    }catch(err){
        res.status(500).json({message:"server error",error:err.message})

    }

}

const loginUser=async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username})
        if(!user){
            return res.status(401).json({message:'Invalid credentials'});
        }
        isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid credentials"});
        }
        const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{
            expiresIn:'1d'
        })
        res.status(200).json({token})
    }catch(err){
   res.status(500).json({message:'Server error',error:err.message})
    }

}

module.exports={registerUser,loginUser}