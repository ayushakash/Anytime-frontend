import React, {useState} from 'react';
import CheckoutCard from './CheckoutCard';
// import payment from './payment';

const Checkout = ({cartData}) => {

    let {
        _id,
        images,
        title,
        price,
        intQuantity,
        total,
        sum
    } = cartData;
    console.log(_id, images, title, price, intQuantity, total, sum)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [retailerEmail, setRetailerEmail] = useState(
        'construction.akash9@gmail.com'
    );
    const [address, setAddress] = useState('');
    const [city, setCity] = useState(' Bangalore,Karnataka');
    const [phone, setPhone] = useState('');
    const [tick, setTick] = useState('/google-maps.png');
    const [tick1, setTick1] = useState('/google-maps.png');
    const [disable1, setDisable1] = useState("location-button");
    const [disable, setDisable] = useState("location-button");
    const [nearestStore, setNearestStore] = useState();
    const [mop, setMop] = useState('COD');

    async function sendEmail() {
        const response = await fetch('http://localhost:4000/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

                mode: 'no-cors'
            },

            body: new URLSearchParams({
                "name": name,
                "address": address,
                "customerEmail": email,
                "retailerEmail": retailerEmail,
                "mop": mop,
                "storeName": nearestStore
            })

        });
        let resJson = await response.json();
        console.log(resJson);

    }

    let handleSubmit = async (e) => { //activates when deliver to above location is clicked
        e.preventDefault();
        setDisable("location-button-disabled")
        getStore(address + city);
        setTick1('/check.png')

    }

    function getLocation() { /////to get current location of user
        setTick('/check.png')
        setDisable1("location-button-disabled")

        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {

        let customerLocation = (
            position.coords.latitude + ',' + position.coords.longitude
        );
        console.log(customerLocation);
        getStore(customerLocation);

    }

    function getStore(customerLocation) {

        let res = fetch(
            "http://www.mapquestapi.com/directions/v2/routematrix?key=PM9unQ5sdswrknRGzNISm" +
                    "lMpikyVVDdT",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "locations": [
                        customerLocation, "12.918060023360129, 77.62276975158039", "12.90628644283534, 77.60125654978424", "12.936987212754202, 77.57984593848842", "12.960136958888153, 77.65697523839054"
                    ],
                    "options": {
                        "allToAll": false
                    }
                })
            }
        )
            .then(res => res.json())
            .then(data => {

                let output = JSON.stringify(data);

                // let [s0, s1, s2, s3, s4] = (data.distance);
                let s0 = data.distance[0];
                let s1 = data.distance[1];
                let s2 = data.distance[2];
                let s3 = data.distance[3];
                let s4 = data.distance[4];

                // console.log(s0, s1, s2, s3, s4)

                destructuring(s1, s2, s3, s4);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        function destructuring(s1, s2, s3, s4) {

            var store = {
                "SLV Stores,Silk Board": s1,
                "Grocery bazar,Bannerghatta road": s2,
                "Suvidha Store,Jayanagar": s3,
                "Ali Traders,Domlur": s4
            };
            let storeSorted = Object
                .keys(store)
                .sort(function (a, b) {
                    return store[a] - store[b]
                })

            setNearestStore(storeSorted[0]);
            // if (storeSorted[0]=='SLV Stores,Silk Board'){
            // setRetailerEmail('construction.akash9@gmail.com') } else if
            // (storeSorted[0]=='Grocery bazar,Bannerghatta road'){
            // setRetailerEmail('construction.akash9@gmail.com') } else if
            // (storeSorted[0]=='Suvidha Store,Jayanagar'){
            // setRetailerEmail('construction.akash9@gmail.com') } else {
            // setRetailerEmail('construction.akash9@gmail.com') }

            console.log(storeSorted[0]);
            // sendEmail.sendEmail(name,email,total,address,phone,nearestStore);

        }

    }

    return (
        <>
        
         <div className = "h-100 d-flex justify-content-center align-items-start flex-sm-row flex-column" > 
        <div className="px-2">
                    <div className="chkout-body">
            {/* <div className=""> */}
                <div className="heading">
                    <h4>
                        <img src="./trolley (3).png" alt="image" className='trolley-icon'></img>Cart</h4>
                </div>
                {/* <div
                    className="h-100 d-flex flex-column justify-content-start align-items-start"> */}

                        <hr className="horic"></hr>
                        <div className="h-100 d-flex flex-row justify-content-center align-items-end" id='chkout-body'>
                            {/* <p className="serial">S No.
                            </p> */}
                            <p className="chkout-title">Item
                            </p>
                            <p className="chkout-title">Item Name</p>
                            <p className="chkout-title" id='quantity2'>Item Price</p>
                            <p className="chkout-title" id='quantity2'>Quantity</p>
                            <p className="chkout-title">Total price</p>
                        </div>
                        <div className="cout">
                            {
                                cartData.map((curData) => {

                                    return <CheckoutCard key={curData._id} {...curData} data={cartData}/>

                                })
                            }

                        </div>

                    {/* </div> */}
                    <hr className="hori"></hr>
                {/* </div> */}

                {/* <div className="order-value">
                    <button type="button" className="btn btn-success">
                        Total order value
                        <span className="badge text-bg-secondary">{title}</span>
                    </button>
                </div> */}

            </div>
        </div>

        <div className="px-2" id="chkout-body">

            {/* <div className="address"> */}
                <div className="heading">
                    <h5>Delivery Address</h5>
                </div>
                <hr className="hori"></hr>
                <div className="form-floating" onSubmit={handleSubmit}>

                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                required="required"
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                required="required"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                required="required"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">City</label>
                            <select id="inputState" className="form-select">
                                <option >Bangalore</option>
                                {/* <option>Delhi</option> */}

                            </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                required="required"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}/>
                        </div>

                        <div className="col-md-6">
                            <button type="submit" className={disable} onClick={getLocation}>
                                <img src={tick} alt="image" className='location-image'></img>Deliver to current location</button>
                        </div>

                        <div className="col-md-6">
                            <button type="submit" className={disable1}>
                                <img src={tick1} alt="image" className='location-image'></img>Deliver to above address</button>
                        </div>

                    </form>
                {/* </div> */}
            </div>
            <div className="heading">
                <h6>Mode of Payment</h6>
            </div>
            <div className="modeOfPayment">
                <button
                    type="button"
                    className="payment-button"
                    data-toggle="modal"
                    data-target=".bd-example-modal-sm">
                    <img src="/google-pay.png" alt="image" className='button-icon'></img>
                </button>
                <button
                    type="button"
                    className="payment-button"
                    data-toggle="modal"
                    data-target=".bd-example-modal-sm">
                    <img src="/paytm.png" alt="image" className='button-icon'></img>
                </button>
                <button
                    type="button"
                    className="payment-button"
                    data-toggle="modal"
                    data-target=".bd-example-modal-sm">
                    <img src="/upi2.png" alt="image" className='button-icon'></img>
                </button>
                <button type="button" className="payment-button">
                    <img src="/cod.jpg" alt="image" className='button-icon'></img>
                </button>

            </div>
            <div className="d-grid gap-2">
                <button className="button-68" type="submit" onClick={sendEmail}>CHECKOUT</button>

                <div
                    className="modal fade bd-example-modal-sm border border-primary"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="mySmallModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="qr-content">Scan and Pay here</div>

                            <img src="/myqr.png" alt="image" className='qr-icon'></img>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    

</>
    )
}

export default Checkout
