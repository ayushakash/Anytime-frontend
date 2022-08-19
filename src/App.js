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
  let dummyData=[]
  // let data={_id,images,title,price,intQuantity,totalCost}
  
  const bodyToNavbar=(quantity,cartArray)=>{
    
    console.log(cartArray);
    dummyData.push(cartArray);
    console.log(dummyData);
    setQuantitySum([...quantitySum, quantity]);
      
    setCartData((cartArray));
    
    // console.log((cartArray));
    // console.log(quantity);

  }
  return (
     <>
<Navbar sum={sum} />

<Routes>
                 <Route exact path='/' element={< Body bodyToNavbar={bodyToNavbar} />}></Route>
                 <Route exact path='/cart' element={< Checkout cartData={cartData} />}></Route>
                 
          </Routes>


      
    </>
  );
}

export default App;