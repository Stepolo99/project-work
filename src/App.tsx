import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import { useState } from 'react'

function App() {
  return (
    <>
      <Navbar cart={[1,2,3,4]}/>
      <Shop />
    </>
  )
}
export default App
