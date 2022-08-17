import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  return (
     <>
<Navbar />
<Routes>
      <Route   path="/" element={<Checkout  />}>
      <Route path="cart" element={<Body />}>
        {/* <Route index element={<Body />} /> */}
        
      </Route>
      </Route>
    </Routes>
      {/* <Navbar /> */}
      
      
      
    </>
  );
}

export default App;