import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import { useState } from 'react'

function App() {
  return (
    <>
      <Navbar/>
      <Shop />
    </>
  )
}
export default App
