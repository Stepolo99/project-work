import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Shop />
    </>
  )
}

export default App
