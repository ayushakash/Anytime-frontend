import React from 'react'

const CheckoutCard = ({title,price,image,quantity,totalCost}) => {
  

    
  return (
    <div>
<div class="h-100 d-flex flex-row justify-content-start align-items-start">
  
  <p class="serial">1.</p>
    <img src='/chocolate-mousse-torte-cake.png' class="chkout-img-top" alt="image"></img>
    <p class="chkout-items">Chocolate Mousse Torte Cake</p>
    <p class="chkout-items">Rs.50</p>
    <p class="chkout-items">5</p>
    <p class="chkout-items">Rs.250</p>
    
    </div>
  </div>

    

    
    
    
    
  )
}

export default CheckoutCard
