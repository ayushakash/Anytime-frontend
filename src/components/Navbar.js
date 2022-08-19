
import React,{useState} from 'react'
import Body from './Body'; 
import {Link} from "react-router-dom";

const Navbar = ({sum}) => {
  // const [quantitySum, setQuantitySum] = useState([]);
  // const sum=quantitySum.reduce((partialSum, a) => partialSum + a, 0);

    
    
  //   const bodyToNavbar=(quantity)=>{

  //     setQuantitySum([...quantitySum, quantity]);  

    


  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="/24-hours.png" alt="image" className='icon'></img>Anytime Mart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex " role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button type="button" className="btn btn-primary position-relative" >
                
        <Link className="add-button" to="/cart">Cart</Link>
  <img src="/shopping-basket.png" alt="image" className='basket-icon'></img>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {sum}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
      </form>
    </div>
  </div>
</nav>
{/* <Body bodyToNavbar={bodyToNavbar}/>   */}
      
    </>
  )
}

export default Navbar
