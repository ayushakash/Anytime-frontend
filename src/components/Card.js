import React, { useState } from 'react'
 

const Card = ({title,price,images,cardToBody,_id}) => {

    const [quantity,setQuantity]=useState(0);
    const [totalCost,setTotalCost]=useState('');
    
    
    let shortTitle=title.slice(0, 25);
    function calculateTotal(){
         setTotalCost((Math.round(quantity*price)));
         if(quantity==''){

         }
         else{
            
             cardToBody(quantity*price,quantity,shortTitle,images,price,_id);
         }
    }


    
    return (
        <> 
        <div className= "col-sm-4 col-md-2" id="card-body">
         <div className="card">

            <img src={images} className="card-img-top" alt="image"></img>
            <div className="card-body">
                <p className="card-title">{shortTitle}</p>
                <div className="rating">
                    <span>
                        <span className="badge text-bg-success">4.0
                            <img src="/star.png" alt="image" className='star-icon'></img>
                        </span>
                    </span>

                </div>
                <h6 className="card-price">Rs. {price}</h6>
                
                
                <input type="Number" className='quantity-input' placeholder='Qty' value={quantity}  onChange={(e) => setQuantity(e.target.value)}/>
                <button onClick={calculateTotal} className='button-33'>Add<img src="/shopping-basket.png" alt="image" className='basket-icon'></img></button>
                
                
            </div>
        </div>

    </div>
    
    {/* <Checkout title={title} price={price} images={images} quantity={quantity}/> */}
</>
    )
}

export default Card;
