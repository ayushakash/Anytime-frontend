import axios from 'axios';
import { useEffect } from 'react';
import {React,useState} from 'react'

const AdminCard = ({title,price,images,_id}) => {

  const [title1,setTitle1]= useState('');
  const [price1,setPrice1]= useState('');
  const [images1,setImages1]= useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState('');

   const deleteItem = () => { 
      let fid=_id            
      let url="http://localhost:4000/files/"+fid;
      
      axios.delete(url, {headers: { "Authorization": "***" } });
    
  }


  const changeHandler = (event) => {                        //setting file to selected file
    setSelectedFile(event.target.files[0]);
    setDetails(title1+','+price1);

};

const handleSubmit = async (e) => { //declaring form to submit and sending as body
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('details', details)
    let fid=_id;
    let data = formData.getAll('details')
    const response = await fetch('http://localhost:4000/files/'+fid, {
        method: 'PUT',
        body: formData
    })
    if (response) 
        setStatus(response.statusText)
}

  function updateItem(){
    let fid=_id;
    let url="http://localhost:4000/files/"+fid
    let data={
        "title": title1,
        "price": price1,
        "images": images1
    }
    
    axios.put("http://localhost:4000/files/"+fid, data);

}



  return (
    <>

<div>
<div className="h-100 d-flex flex-row justify-content-center align-items-start">
  
  {/* <p className="serial">1.</p> */}
    <div className="img"><img src={images} className="admin-img-top" alt="image"></img></div>
    <p className="admin-items">{title}</p>
    <p className="admin-items" id='quantity2'>Rs.{price}</p>
    <p className="admin-items"><img src='./edit.png' className="edit-icon" alt="image" data-bs-toggle="modal"  data-bs-target="#staticBackdrop9"></img></p>
    <p className="admin-items"><img src='./delete.png' className="edit-icon" alt="image" onClick={deleteItem}></img></p>
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
 
                                    
                                     <button onClick={handleSubmit} className="btn btn-primary" data-bs-dismiss="modal">Update Item</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </form> 

  
      
    </>
  )
}


export default AdminCard
