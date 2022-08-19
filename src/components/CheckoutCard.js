import React from 'react'

const CheckoutCard = ({title,price,image,quantity,totalCost}) => {

  // console.log(title,price,image,quantity,totalCost);

    
  return (
    <div>
<div className="h-100 d-flex flex-row justify-content-start align-items-start">
  
  <p className="serial">1.</p>
    <img src={image} className="chkout-img-top" alt="image"></img>
    <p className="chkout-items">{title}</p>
    <p className="chkout-items">Rs.{price}</p>
    <p className="chkout-items">{quantity}</p>
    <p className="chkout-items">Rs.{totalCost}</p>
    
    </div>
  </div>

    

    
    
    
    
  )
}

export default CheckoutCard
