import React, {useEffect, useState} from "react";
import AdminCard from './AdminCard';

const Admin = () => {

    const [datas, setDatas] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [details, setDetails] = useState('');
    const [changer, setChanger] = useState(0);

    useEffect(() => {
        const sse = new EventSource('http://localhost:4000/files/notification');
        function getRealtimeData(data) {
            console.log(data)
        }
        sse.onmessage = e => getRealtimeData('ayush');
        sse.onerror = () => {

            sse.close();
        }
        return() => {
            sse.close();
        };
    }, [changer]);

    useEffect(() => {
        fetch("http://localhost:4000/files")
            .then((res) => res.json())
            .then((data) => {

                setDatas(data);

            });
    }, [changer])

    const changeHandler2 = (e) => {
        setPrice(e.target.value)
        setChanger(prev => prev + 1)

    }

    const changeHandler = (event) => { //setting file to selected file
        setSelectedFile(event.target.files[0]);
        setDetails(title + ',' + price);

    };

    const handleSubmit = async (e) => { //declaring form to submit and sending as body
        e.preventDefault()
        // console.log(details);
        setChanger(prev => prev + 1)
        let formData = new FormData()
        formData.append('file', selectedFile)
        formData.append('details', details)
        // let data = formData.getAll('details')

        const response = await fetch('http://localhost:4000/files', {
            method: 'POST',
            body: formData
        })
        if (response) 
            setStatus(response.statusText)
        console.log(status)
    }
    return (
        <> < div className = "px-2" > <div className="chkout-body">

            <div className="heading">

                <img src="./admin.png" alt="admin" className='trolley-icon'></img>
                <h3>Admin Panel</h3>
            </div>

            <hr className="horic"></hr>
            <div
                className="h-100 d-flex flex-row justify-content-center align-items-end"
                id='chkout-body'>

                <p className="admin-title">Item
                </p>
                <p className="admin-title">Item Name</p>
                <p className="admin-title" id='quantity2'>Item Price</p>
                <p className="admin-title">Edit Item</p>
                <p className="admin-title">Delete item</p>

                <div className="edit-icon">
                    <img
                        src='./plus.png'
                        className="edit-icon"
                        alt="edit-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop5"></img>

                    <form >
                        <div
                            className="modal fade"
                            id="staticBackdrop5"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="staticBackdropLabel">Add New Item</h4>
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
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">₹</span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="price"
                                                aria-label="Amount (to the nearest paise)"
                                                required="required"
                                                value={price}
                                                onChange={changeHandler2}/>
                                            <span className="input-group-text">.00</span>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="file" className="form-control" name="file"
                                                // value={changer}
                                                onChange={changeHandler}/>
                                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            className="btn btn-primary"
                                            data-bs-dismiss="modal">Add Item</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="cout">
                {
                    datas.map((curData) => {

                        return <AdminCard key={curData._id} {...curData} data={curData}/>

                    })
                }

            </div>

            <hr className="hori"></hr>

        </div>
    </div>

</>
    )
}

export default Admin
