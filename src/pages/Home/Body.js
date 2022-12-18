import React, { useState } from "react";
import Card from "./Card";
const Body = ({ bodyToNavbar, filter }) => {
  const [final, setFinal] = useState([]);
  const sum = final.reduce((partialSum, a) => partialSum + a, 0);

  const cardToBody = (total, quantity, title, images, price, _id) => {
    total = Math.round(total);
    setFinal([...final, total]);
    let intQuantity = parseInt(quantity);
    let cartArray = { _id, images, title, price, intQuantity, total };
    bodyToNavbar(intQuantity, cartArray, sum);

  };
  return (
    <>
      <div className="main-component">
        <div className="card-collection">
          <div className="row">
            {filter.map((product) => {
              return (
                <Card key={product._id} {...product} cardToBody={cardToBody} />
              );
            })}
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
  );
};

export default Body;
