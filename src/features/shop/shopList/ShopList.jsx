import React from "react";
import CartItem from "./ShopListItem";

const Cart = () => {
  const shopItems = [
    { name: "milk", price: 2, img: "./milk.jfif" },
    { name: "butter", price: 4, img: "./butter.jfif" },
    { name: "bun", price: 0.5, img: "./bun.jfif" },
  ];

  return (
    <div>
      SHOP:
      {!!shopItems &&
        shopItems.map(({ name, price, img }) => (
          <CartItem key={name} name={name} price={price} img={img} />
        ))}
    </div>
  );
};

export default Cart;
