const multer=require("multer");
const upload=multer({dest:'uploads/'});

const storage=multer.memoryStorage();


// export default singleUpload; 

  
exports.singleUpload = multer({ storage}).single("files");