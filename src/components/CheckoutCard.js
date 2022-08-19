import React from 'react'

const CheckoutCard = ({title,price,images,intQuantity,total,sum}) => {

  // console.log(title,price,image,quantity,totalCost);

    
  return (
    <div>
<div className="h-100 d-flex flex-row justify-content-start align-items-start">
  
  <p className="serial">1.</p>
    <img src={images} className="chkout-img-top" alt="image"></img>
    <p className="chkout-items">{title}</p>
    <p className="chkout-items">Rs.{price}</p>
    <p className="chkout-items">{intQuantity}</p>
    <p className="chkout-items">Rs.{total}</p>
    
    </div>
  </div>

    

    
    
    
    
  )
}

export default CheckoutCard
