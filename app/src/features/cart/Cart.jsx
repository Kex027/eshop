import React from "react";
import { useSelector } from "react-redux";
import { getCart } from "../shop/shopSlice";
import style from "./cart.module.scss";

const Cart = () => {
  const cart = useSelector(getCart);
  const sortedCart = cart.reduce((acc, item) => {
    const name = item.name;
    const quantity = acc[name]?.quantity ?? 0;
    if (acc[name] == null) {
      acc[name] = [];
    }
    acc[name] = {
      ...item,
      quantity: quantity + 1,
    };
    return acc;
  }, {});

  return (
    <div className={style.container}>
      {!cart.length ? (
        <div>
          <h2>Cart is empty!!</h2>
          <p>Buy some things</p>
        </div>
      ) : (
        <div className={style.grid}>
          <span className={style.heading}>Quantity</span>{" "}
          <span className={style.heading}>Item</span>{" "}
          <span className={style.heading}>Price</span>
          {Object.values(sortedCart).map(({ name, price, quantity }) => (
            <>
              <span>{quantity}</span>{" "}
              <span>
                {name} (${price})
              </span>{" "}
              <span>${quantity * price}</span>
            </>
          ))}
          <span className={`${style.heading} ${style.lastRow}`}>
            Everything costs: $
            {Object.values(sortedCart).reduce((sum, { price, quantity }) => {
              return sum + price * quantity;
            }, 0)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
