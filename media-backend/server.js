const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary=require("cloudinary").v2;

connectDatabase();
 
cloudinary.config({
    cloud_name:process.env.CLOUDIARY_NAME,
    api_key:process.env.CLOUDIARY_API_KEY,
    api_secret:process.env.CLOUDIARY_API_SECRET,
});
app.listen(process.env.PORT,()=>{ 
    console.log(`Server is running on ${process.env.PORT}`)
})   