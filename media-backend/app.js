const express = require('express');
const cors = require('cors');
const app=express();
const path=require("path");
app.use(cors());
const cookieParser=require("cookie-parser");
if(process.env.NODE_ENV !=="production"){
require("dotenv").config({"path":"media-backend/config/config.env"});
}
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true})); 
app.use(cookieParser());

//importing routes
const post=require("./routes/post");
const user=require("./routes/user");

//using Routes
app.use("/api/v1",post);
app.use("/api/v1",user); 

// app.use(express.static(path.join(__dirname,"../media-frontend/build")));
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../media-frontend/build/index.html"));
// });
module.exports=app; 