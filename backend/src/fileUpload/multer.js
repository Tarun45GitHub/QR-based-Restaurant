import multer from "multer";

const storage = multer.diskStorage({
    destination:'./public/temp',
    filename: function (req, file, cb) { 
      // console.log(file);
      cb(null, file.originalname )
    }
  })
  
 export const upload = multer({ storage })