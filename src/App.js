import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Navbar from './components/Navbar'; 
import Body from './components/Body'; 
import TotalCost from './components/TotalCost'; 
import Checkout from './components/Checkout'; 
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [quantitySum, setQuantitySum] = useState([]);
  const [cartData, setCartData] = useState([]);
  const sum=quantitySum.reduce((partialSum, a) => partialSum + a, 0);
  // const[sum1,setSum1]=useState(0)
  
  
  const bodyToNavbar=(quantity,cartArray)=>{
    // setSum1(sum1)
    // console.log(cartArray);
    // console.log(sum1)
    
    setQuantitySum([...quantitySum, quantity]);
      
    setCartData(current=>[...current,cartArray]);
    // console.log(cartData);
    

  }
  return (
     <>
<Navbar sum={sum} />

<Routes>
                 <Route exact path='/' element={< Body bodyToNavbar={bodyToNavbar} />}></Route>
                 <Route exact path='/cart' element={< Checkout cartData={cartData}  />}></Route>
                 
          </Routes>


      
    </>
  );
}

export default App;