import React,{useState} from 'react'

const payment = () => {
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
    const response = await fetch('http://localhost:3001/invoice', {
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
            "storeName": nearestStore,
            "phone": phone,
            "products": {}

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

        console.log(storeSorted[0]);

    }

}
  return (
    <>

<div className="subtotal">

<div className="address">
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
                    {/*
                    <option>Delhi</option>
                    */}

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
    </div>
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
    </>
  )

  }



export default payment
