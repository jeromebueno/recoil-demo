import React from "react";

const CartItem = ({ id }) => {
  const item = {
    img: "http://lorempixel.net",
    price: "0",
  };

  return (
    <div className="mini-item">
      <img src={item.img} alt="mini-item" />
      <span>{item.price}</span>
    </div>
  );
};

export default CartItem;
