import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function QRcodeDisplay() {
    const [QRcodeURL,setQRcodeURL]=useState("")
    const {tableId}=useParams()
    useEffect(()=>{
            axios.get(`/api/qr/${tableId}`)
            .then((res)=>{
            // console.log(res.data.qrCodeUrl);
            setQRcodeURL(res.data.qrCodeUrl)
            console.log(QRcodeURL);
            
            })
           .catch((err)=>{
            console.log(err);
           })
    },[tableId])
  return (
    <div>
      <h2>Scan this QR code to place your order</h2>
      {QRcodeURL ? (
        <img src={QRcodeURL} alt={`QR code for table ${tableId}`}
        className='flex center' />
      ) : (
        <p>Loading QR Code ....!!</p>
      )}
    </div>
  )
};

export default QRcodeDisplay;
