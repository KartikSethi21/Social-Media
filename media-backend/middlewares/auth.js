const Users = require("../models/Users");
const User=require("../models/Users");
const jwt=require("jsonwebtoken");
try {
    exports.isAuthenticated=async(req,res,next)=>{
        const {token}=req.cookies;
        if(!token){
            return res.status(401).json({
                message:"Please login first"
            })
        }
        const decoded=await jwt.verify(token,process.env.JWT_SECRET);
        req.user=await User.findById(decoded._id);
        next();
    }
} catch (error) {  
    res.status(500).json({
        message:error.message,
    })
}
