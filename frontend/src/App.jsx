
import React, { useEffect, useState } from 'react'
import QRcodeDisplay from './components/QRcodeDisplay.jsx'
import AddMenu from './components/addMenu.jsx'
import MenuPage from './components/menuPage.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartPage from './components/CartPage.jsx'


export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/menu/:tableId' element={<MenuPage/>}/>
      <Route path='/menu/add' element={<AddMenu/>} />
      <Route path='/qr/:tableId' element={<QRcodeDisplay/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
