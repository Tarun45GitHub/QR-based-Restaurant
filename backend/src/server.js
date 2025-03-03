import dotenv from "dotenv"
import express from 'express'
import connectDB from "./db/index.js"
import QRcode from 'qrcode'
import { Menu } from "./db/menu.model.js"
import bodyParser from "body-parser"
import cors from 'cors'
import {uploadOnCloudinary} from './fileUpload/cloudinary.js'
import { upload } from "./fileUpload/multer.js"



dotenv.config({path:"./env"})
// console.log(process.env.PORT);


const app = express()
const port = process.env.PORT||5000


app.use(cors())
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/qr/:tableId', (req, res) => {
  const tableId=req.params.tableId;
  const tableURL=`http://localhost:5173/menu/${tableId}`
  try {
   QRcode.toDataURL(tableURL,(err,url)=>{
    if(err){
      res.status(500).json({ Message: "Error Generating QR Code" });
    }
    else{
      res.json({ qrCodeUrl: url });
    }
   }) 
  } catch (error) {
    res.status(500).json({ Message: "Error Generating QR Code",error });
  }
});
app.post('/api/menu/create',upload.single('menuImage'),async(req,res)=>{
 const {name,description,price}=req.body;
//  const imageURL=req.file
//  console.log(imageURL);
 const result = await uploadOnCloudinary(req.file.path);
//  console.log(result);
 
 const item=await Menu.create(
   {MenuName:name,
    Descriptions:description,
    MenuImage:result.url,
    MenuPrice:price})
 const checkitems= await Menu.findById(item._id);
 console.log(checkitems);
 
 if(!checkitems) res.status(400).json("menu add reqest faild")
else{
  res.status(200).json("menu added successfully")
}
});

app.get("/api/menu/getDetails", async(req, res) => {
 const response= await Menu.find()
 if(!response) {
  res.status(404).json("ERROR:while data fetching")
 }
 else res.send(response)
  
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connectDB();
  console.log(`App running on http://localhost:${port}`)
});
