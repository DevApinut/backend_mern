const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const User = require("./router/User");
require("dotenv").config();


// create application for express
app = express();

// set port and connet to port 5000
const port = process.env.PORT  
app.listen(port,()=>console.log(`ready server at port ${port}`))

//connect to mongo dB
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
})
.then(()=>console.log("เชื่อมต่อข้อมูลสำเร็จ"))
.catch((err)=>console.log("การเชื่อมต่อมีปัญหา"))


// middleware for setting 
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))



//set for rout 
// app.get("*",(req,res)=>{res.send("ทดสอบสำหรับการเชื่อมต่อ")})
app.use('/api',User)








