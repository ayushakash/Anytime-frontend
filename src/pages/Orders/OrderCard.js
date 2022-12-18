import {React,useState} from 'react'

const OrderCard = ({name,address,phone,mop,products}) => {

  const [title1,setTitle1]= useState('');
  const [price1,setPrice1]= useState('');
  const [price2,setPrice2]= useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState('');
  
  

  let productData=JSON.parse(products)
  console.log(products)

// console.log(JSON.parse(products[0]))

  // console.log(productData[0].price);


//    const deleteItem = () => { 
//       let fid=_id            
//       let url="http://localhost:4000/files/"+fid;
      
//       axios.delete(url, {headers: { "Authorization": "***" } });
    
//   }



  const changeHandler = (event) => {                        //setting file to selected file
    setSelectedFile(event.target.files[0]);
    setDetails(title1+','+price1);


};

let location="/home/ayush/Desktop/pro2/micro-services/Invoice-generator/files/";
return (
  // http://localhost:3000/order
  <>

<div>
<div className="h-100 d-flex flex-row justify-content-center align-items-start">

 
  {/* <p className="serial">1.</p> */}
    
    <p className="admin-items">{name}</p>
    <p className="admin-items">{address}</p>
    <p className="admin-items" id='quantity2'>{phone}</p>
    
    <p className="admin-items">{productData[0].title}</p>
    
    <p className="admin-items">{productData[0].intQuantity}</p>
    <p className="admin-items" >Rs.{productData[0].price}</p>
    {/* <form method="get" action="file.doc">
   <button type="submit">Download!</button>
   </form> */}
   

   <a  className='invoice' href={location+name +'.pdf'} >Download</a>
   {/* <button  href="path_to_file" download="proposed_file_name">Download</button>
    */}

    {/* <button className='invoice'>Download Invoice</button> */}
    {/* http://localhost:3000/order */}
    
    
    </div>
  </div>


  <form >
                   <div
                        className="modal fade"
                        id="staticBackdrop9"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="staticBackdropLabel">Update New Item</h4>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>

                                <div className="modal-body">
                                    <h5 className="modal-title" id="staticBackdropLabel">Enter product Name,Price and upload Image</h5>

                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Product Name"
                                            aria-label="Recipient's username"
                                            name="title"
                                            aria-describedby="button-addon2"
                                            value={title1}
                    onChange={(e) => setTitle1(e.target.value)}
                                            />

                                    </div>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">₹</span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="price"
                                            aria-label="Amount (to the nearest paise)"


                                            value={price1}
                    onChange={(e) => setPrice1(e.target.value)}
                                                
                                            />
                                        <span className="input-group-text">.00</span>
                                    </div>

                                    <div className="input-group mb-3">
                                        <input type="file" className="form-control" name="file" required 
                                            // value={images1}
                    onChange={changeHandler}/>
                                        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                      {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>  */}
 
                                    
                                     <button  className="btn btn-primary" data-bs-dismiss="modal">Update Item</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </form> 

  
      
    </>
  )
}


export default OrderCard
