
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
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="d-flex justify-content-center navbar-nav me-auto mb-2 mb-lg-1">        
        <input className="search-box" type="search" placeholder="Search for products " aria-label="Search"/>
      </ul>
      <div/>
      <div className="">
      

      <button type="button" className="navbar-brand btn btn-primary position-relative btn-sm mx-4" >            
        <Link className="add-button" to="/cart">Cart</Link>
  <img src="/shopping-basket.png" alt="image" className='basket-icon'></img>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {sum}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>


      
        </div>
      </div>
      
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Phone Number Verification</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5 class="modal-title" id="staticBackdropLabel">Enter your phone number to
Login/Sign up</h5>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">+91</span>
  <input type="tel" class="form-control" placeholder="Phone Number"  aria-label="Username" required aria-describedby="basic-addon1"/>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="staticBackdropLabel">Become Our Partner</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <h6 class="modal-title px-2" id="staticBackdropLabel">Get your online store listed with us in no time.<br/>Earn 4X more by getting daily orders.</h6>
      <div class="modal-body">
        <h5 class="modal-title" id="staticBackdropLabel">Enter your phone number to
Login/Sign up</h5>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">+91</span>
  <input type="tel" class="form-control" placeholder="Phone Number"  aria-label="Username" required aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
<span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Email Id" aria-label="Username"/>

</div>
<p><i>We will get in touch with you within 48hrs.</i></p>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</div>

      <div className="dropdown-navbar">
        

      <button class="nav-item dropdown btn btn-sm btn-outline-success mx-4 my-2">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/cart">Cart</Link></li>
            <li data-bs-toggle="modal" data-bs-target="#staticBackdrop"><a class="dropdown-item" href="#">Login</a></li>
            {/* <li><a class="dropdown-item" href="#">FAQs</a></li> */}
            <li data-bs-toggle="modal" data-bs-target="#staticBackdrop1"><a class="dropdown-item" href="#">Become a partner</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#"><div className="d-flex"><div className="qr"><img src="/anytime.png" alt="image" className='dropdown-qr'></img></div><div className="text">Scan and<br/> order <br/>grocery from<br/> your <span className="qr-span">mobile <br/>phone</span></div></div></a></li>
          </ul>
        </button>







</div>
      
      
    
  </div>
</nav>
{/* <Body bodyToNavbar={bodyToNavbar}/>   */}
      
    </>
  )
}

export default Navbar
