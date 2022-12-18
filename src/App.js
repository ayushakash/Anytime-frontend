import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from './pages/Home/Navbar';
import Body from './pages/Home/Body';
import Checkout from './pages/Cart/Checkout';

import {
  Routes,
  Route,
} from "react-router-dom";
import Admin from './pages/Admin/Admin';
import Order from './pages/Orders/Order';

function App() {
  const [quantitySum, setQuantitySum] = useState([]);
  const [cartData, setCartData] = useState([]);
  const sum = quantitySum.reduce((partialSum, a) => partialSum + a, 0);
  const [filtered, setFiltered] = useState([])

  const bodyToNavbar = (quantity, cartArray) => {
    setQuantitySum([...quantitySum, quantity]);
    setCartData(current => [...current, cartArray]);
  }

  const filter = (datas) => {
    setFiltered(datas);
  }


  return (
    <>
      <Navbar sum={sum} filter={filter} />
      <Routes>
        <Route exact path='/' element={< Body bodyToNavbar={bodyToNavbar} filter={filtered} />}></Route>
        <Route exact path='/cart' element={< Checkout cartData={cartData} />}></Route>
        <Route exact path='/admin' element={< Admin />}></Route>
        <Route exact path='/order' element={< Order />}></Route>
      </Routes>
    </>
  );
}

export default App;