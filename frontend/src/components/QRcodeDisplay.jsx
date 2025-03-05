import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function QRcodeDisplay() {
  const {tableId}=useParams();
    const [QRcodeURL,setQRcodeURL]=useState("")
    console.log(tableId);
    useEffect(()=>{
            axios.get(`/api/qr/${tableId}`)
            .then((res)=>{
            // console.log(res.data.qrCodeUrl);
            setQRcodeURL(res.data.qrCodeUrl)
            // console.log(QRcodeURL);
            
            })
           .catch((err)=>{
            console.log(err);
           })
    },[tableId])
  return (
    <div class="flex justify-center items-center h-screen">
    <div class=' border-8 border-indigo-600 ... m-5 p-10'>
      <h2 class='text-center text-3xl'> Table NO {tableId}</h2>
      <h2>Scan this QR code to place your order</h2>
      {QRcodeURL ? (
        <img src={QRcodeURL} alt={`QR code for table ${tableId}`}
        className='w-full h-full' />
      ) : (
        <p>Loading QR Code ....!!</p>
      )}
      </div>
    </div>
  )
};

export default QRcodeDisplay;
