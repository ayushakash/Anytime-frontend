import React,{useState} from 'react';
import CheckoutCard from './CheckoutCard'; 


const Checkout = ({title,price,image,quantity,totalCost,id}) => {
  
  const [finalData, setFinalData] = useState([]);
  
  let data={"title":title,"price":price,"image":image,"quantity":quantity,"totalCost":totalCost,"id":id}
  
  let cartData=[{"title":title,"price":price,"image":image,"quantity":quantity,"totalCost":totalCost,"id":id}]
  
  // setFinalData(cartData);

  // setCartData([...cartData, data]);

    // let modifiedArray=[];
    // modifiedArray=cartData.push(data);
    // setCartData(data);

    //  setCartData([...cartData, data]);
    //  console.log(cartData);
    //  console.log(id);
    //  console.log(quantity);
    
  return (
    <>
    <div class="h-100 d-flex flex-row justify-content-between align-items-start">
    <div className="checkout-main">
        <div className="heading">
            <h4> <img src="./trolley (3).png" alt="image" className='trolley-icon'></img>Cart</h4>
        </div>
        <div class="h-100 d-flex flex-column justify-content-start align-items-start">
        <div class="chkout-body ">

    

<div class="h-100 d-flex flex-row justify-content-start align-items-end">
<p class="serial">S No. </p>
<p class="chkout-title">Item </p>
<p class="chkout-title">Item Name</p>
<p class="chkout-title">Item Price</p>
<p class="chkout-title">Quantity</p>
<p class="chkout-title">Total price</p>
</div> 
<hr className="hori"></hr>
            {
              cartData.map((curData) => {
                    return <CheckoutCard key={curData.id} {...curData} title={title} price={price} image={image} quantity={quantity} totalCost={totalCost} />

                })
            }



  
        {/* <CheckoutCard title={title} price={price} image={image} quantity={quantity} totalCost={totalCost}/> */}
        
      
    </div>

</div><hr className="hori"></hr>
<div className="order-value">
    <button type="button" class="btn btn-success">
        Total order value
        <span class="badge text-bg-secondary">Rs.250</span>
    </button>
</div>
    </div>
    <div className="subtotal">
    
    <div className="address">
    <div className="heading"><h5>Delivery Address</h5></div><hr className="hori"></hr>
    <div class="form-floating">
    
    <form class="row g-3">
  <div class="col-md-6">
    <label for="Name" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">City</label>
    <select id="inputState" class="form-select">
      <option selected>Bangalore</option>
      <option>Delhi</option>
      <option>Noida</option>
      <option>Hyderabad</option>
      <option>Chennai</option>
    </select>
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Phone</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  
  
  <div class="col-md-6">
  <button type="button" class="location-button"><img src="/google-maps.png" alt="image" className='location-image'></img>Deliver to current location</button>
  </div>
</form>
    </div>
    </div>
    <div className="heading"><h6>Mode of Payment</h6></div>
    <div className="modeOfPayment">
    <button type="button" class="payment-button"><img src="/google-pay.png" alt="image" className='button-icon'></img></button>
    <button type="button" class="payment-button"><img src="/phonepe3.png" alt="image" className='button-icon'></img></button>
    <button type="button" class="payment-button"><img src="/upi2.png" alt="image" className='button-icon'></img></button>
    <button type="button" class="payment-button"><img src="/cod.jpg" alt="image" className='button-icon'></img></button>


    </div>
    <div class="d-grid gap-2">
  <button class="button-68" type="button">CHECKOUT</button>
  
</div>
        
    </div>
      </div>
    </>
  )
}

export default Checkout
