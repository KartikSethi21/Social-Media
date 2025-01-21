const mongoose = require('mongoose');
exports.connectDatabase=()=>{
    // console.log('MONGO_URI:', process.env.MONGO_URI);
    mongoose
    .connect(process.env.MONGO_URI) 
    .then((con)=>{
        console.log(`Database Connected : ${con.connection.host}`)
    }).catch((err)=>{
        console.log(err); 
    })
}         