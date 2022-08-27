import React, {useState} from 'react';
import Card from './Card';
import {datas} from './Data';
import Checkout from './Checkout';

 const Body = ({bodyToNavbar}) => {

  const [totalCost, setTotalCost] = useState();
  const [final, setFinal] = useState([]);
  const sum=final.reduce((partialSum, a) => partialSum + a, 0);
  const[image,setImage]=useState('');
  const[title,setTitle]=useState();
  const[price,setPrice]=useState();
  const[_id,set_id]=useState();
  const[quantityToCheckout,setQuantityToCheckout]=useState();

//   const [cartArray,setCartArray]=useState([]);
  
  
  
  const cardToBody=(total,quantity,title,images,price,_id)=>{
      total=Math.round(total)
      setTotalCost(total);
      setFinal([...final, total]);
      let intQuantity=parseInt(quantity);
      console.log(sum);
      
      let cartArray={_id,images,title,price,intQuantity,total};
      
      bodyToNavbar(intQuantity,cartArray,sum);
      setQuantityToCheckout(intQuantity)
      setImage(images);
      setTitle(title);
      setPrice(price);
      set_id(_id);
      // console.log(total,quantity,title,images,price,_id)
        // const cart=[_id,image,title,price,intQuantity,total];
        
        
        

    }

    return (<> 
    <div className = "main-component" > <div className="card-collection">
        <div className="row">
            {
                datas.map((curData) => {
                    return <Card key={curData._id} {...curData} cardToBody={cardToBody}/>

                })
            }

        </div>
        
    </div>
</div>
<div className="order-value">
    <button type="button" className="btn btn-success">
        Total order value
        <span className="badge text-bg-secondary">Rs.{sum}</span>
    </button>
</div>
 
 
</>
    )
}

export default Body;
