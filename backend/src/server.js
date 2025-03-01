import dotenv from "dotenv"
import express from 'express'
import connectDB from "./db/index.js"
import QRcode from 'qrcode'
import {MenuItems} from './models/menu.model.js'
import bodyParser from "body-parser"
import cors from 'cors'

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

app.post('/api/menu/create',async(req,res)=>{
 const {name,description}=req.body;
 const item=await MenuItems.create({name,description})
 const checkitems= await MenuItems.findById(item._id);
 if(!checkitems) res.status(400).json("menu add reqest faild")
else{
  res.status(200).json("menu added successfully")
}
});

app.get("/api/menu/getDetails", async(req, res) => {
 const response= await MenuItems.find()
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
