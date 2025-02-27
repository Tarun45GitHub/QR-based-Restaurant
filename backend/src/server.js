import dotenv from "dotenv"
import express from 'express'
import connectDB from "./db/index.js"
import QRcode from 'qrcode'

dotenv.config({path:"./env"})
console.log(process.env.PORT);


const app = express()
const port = process.env.PORT||5000

connectDB();


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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
