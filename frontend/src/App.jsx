
import React from 'react'
import {MenuAdd,MenuPage,QRcodeDisplay,CartPage,Home} from './components/index.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/menu/:tableId' element={<MenuPage/>}/>
      <Route path='/menu/add' element={<MenuAdd/>} />
      <Route path='/qr/:tableId' element={<QRcodeDisplay/>}/>
      <Route path='/cart/:tableId' element={<CartPage/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}
