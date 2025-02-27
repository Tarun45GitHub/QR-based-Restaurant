import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QRcodeDisplay from './components/QRcodeDisplay.jsx'

export default function App() {
  return (
    <div>
      <QRcodeDisplay/>
    </div>
  )
}
