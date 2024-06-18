const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a name"]
    },
    avatar:{
        public_id:String,
        url:String
    },
    email:{
        type:String,
        required:[true,"Please enter an emaol"],
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
        minlength:[6,"Password must be at least 6 characters"],
        select:false,//when we try to access the user data password will not be shown for security issues
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",            
        }
    ],
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    ],
    resetPasswordToken:String,
    resetPasswordExpire:Date,


});
//Before Schema get saved function will before it 
UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password,10);
    }
    next();
});

UserSchema.methods.matchPassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

UserSchema.methods.generateToken=function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET);
}

UserSchema.methods.getResetPasswordToken=function(){
    const resetToken= crypto.randomBytes(20).toString("hex");
    console.log(resetToken);
    // more hashing is deone to resentToken
    this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire=Date.now()+10*60*1000;
    return resetToken;
}

module.exports=mongoose.model("User",UserSchema);