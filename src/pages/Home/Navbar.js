import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import ProductsService from '../../api/services/ProductsService';

const Navbar = ({ sum, filter }) => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const handleSearch = (event) => {
        let value = event
            .target
            .value
            .toLowerCase();
        let result = [];
        result = allData.filter((data) => {
            return data
                .title
                .search(value) !== -1;
        });
        setFilteredData(result);
    }

    filter(filteredData) //sending filtered data body as callback

    useEffect(() => {
        const getData = async () => {
            let response = await ProductsService.getAllProducts();
            setAllData(response.data);
            setFilteredData(response.data)
        }
        getData();
    }, []);

    return (
        <> < div className="container-fluid" > <nav className="navbar navbar-expand-lg bg-light">
            <Link className="navbar-brand" to="/">
                <img src="/24-hours.png" alt="image" className='icon'></img>Anytime Mart</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="d-flex justify-content-center navbar-nav me-auto mb-2 mb-lg-1">
                    <input
                        className="search-box"
                        type="search"
                        placeholder="Search for products "
                        aria-label="Search"
                        onChange={(event) => handleSearch(event)} />
                </ul>
                <div />
                <div className="">
                    <button
                        type="button"
                        className="navbar-brand btn btn-primary position-relative btn-sm mx-4">
                        <Link className="add-button" to="/cart">Cart</Link>
                        <img src="/shopping-basket.png" alt="image" className='basket-icon'></img>
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {sum}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>
            </div>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Phone Number Verification</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 className="modal-title" id="staticBackdropLabel">Enter your phone number to Login/Sign up</h5>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">+91</span>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    aria-label="Username"
                                    required="required"
                                    aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="staticBackdrop1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="staticBackdropLabel">Become Our Partner</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <h6 className="modal-title px-2" id="staticBackdropLabel">Get your online store listed with us in no time.<br />Earn 4X more by getting daily orders.</h6>
                        <div className="modal-body">
                            <h5 className="modal-title" id="staticBackdropLabel">Enter your phone number to Login/Sign up</h5>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">+91</span>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    aria-label="Username"
                                    required="required"
                                    aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="addon-wrapping">@</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email Id"
                                    aria-label="Username" />
                            </div>
                            <p>
                                <i>We will get in touch with you within 48hrs.</i>
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown-navbar">
                <button className="nav-item dropdown btn btn-sm btn-outline-success mx-4 my-2">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Account
                    </a>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdown">
                        <li>
                            <Link className="dropdown-item" to="/cart">Cart</Link>
                        </li>
                        <li data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <a className="dropdown-item" href="#">Login</a>
                        </li>
                        <li data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                            <a className="dropdown-item" href="#">Become a partner</a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">Logout</a>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <div className="d-flex">
                                    <div className="qr">
                                        <img src="/anytime.png" alt="image" className='dropdown-qr'></img>
                                    </div>
                                    <div className="text">Scan and<br />
                                        order
                                        <br />grocery from<br />
                                        your
                                        <span className="qr-span">mobile
                                            <br />phone</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </button>
            </div>
        </nav>
        </div>
        </>
    )
}

export default Navbar
