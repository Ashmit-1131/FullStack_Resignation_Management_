const express=require("express")
require("dotenv").config()
const {connectDb}=require("./config/db")
const authRoutes=require('./routes/authRoutes')

const app=express()

app.use(express.json())

connectDb()

// All the routes
app.use('/api/auth',authRoutes)


module.exports=app
