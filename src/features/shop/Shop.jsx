import React from "react";
import { useSelector } from "react-redux";
import Cart from "./shopList/ShopList";
import { getCart, getCartPrice } from "./shopSlice";

const Shop = () => {
  const price = useSelector(getCartPrice);
  const cart = useSelector(getCart);

  const countedCart = cart.reduce((accumulator, value) => {
    return { ...accumulator, [value.name]: (accumulator[value.name] || 0) + 1 };
  }, []);

  return (
    <div>
      CART (${price}):
      {Object.entries(countedCart).map((cartItem) => (
        <div key={cartItem}>
          {cartItem[0]} x {cartItem[1]}
        </div>
      ))}
      <Cart />
    </div>
  );
};

export default Shop;
