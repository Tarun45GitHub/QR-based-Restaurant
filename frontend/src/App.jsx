import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QRcodeDisplay from './components/QRcodeDisplay.jsx'
import AddMenu from './components/addMenu.jsx'
import MenuPage from './components/menuPage.jsx'


export default function App() {
  return (
    <div>
      {/* <QRcodeDisplay/> */}
      {/* <AddMenu/> */}
      <MenuPage/>
      
    </div>
  )
}
