import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import { useState } from 'react';

function App() {
//dentro cart ho il valore corrente con setCart posso aggiornarlo
//dentro handleClick devo prendere il cart, aggiungere un elemento ed aggiornarlo con setCart
  const [cart, setCart] = useState([1,2,3]);
  function handleClick(product: number) {
    setCart ([...cart, product] );
  }
  return (
    <>
      <Navbar />
      {cart.length}
      <Shop addToCart={handleClick} />
    </>
  )
}

export default App
