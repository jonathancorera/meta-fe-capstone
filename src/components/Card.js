import React from "react";
import "./Card.css";

const Card = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <img width="300px" src={image} alt="featured-dish" />
      <div className="dish-info">
        <div className="title">
          <h3>{title}</h3>
        
        </div>
        <p>{description}</p>
        
        <span
          role="button"
          aria-label="On Click"
          className="specials-order-btn"
        >
          Place Order
          <p className="price">${price}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
