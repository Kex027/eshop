import { getCart, getCartPrice } from "./shopSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import style from "./Cart.module.scss";
import { removeItem } from "./shopSlice";
import Button from "../../components/Button";

//TODO updating price after removing item

const Cart = () => {
  const dispatch = useDispatch();
  const price = useSelector(getCartPrice);
  const cart = useSelector(getCart);

  const countedCart = cart.reduce((accumulator, value) => {
    return { ...accumulator, [value.name]: (accumulator[value.name] || 0) + 1 };
  }, []);

  return (
    <div className={style["container"]}>
      CART (${price}):
      {Object.entries(countedCart).map((cartItem) => (
        <div key={cartItem} className={style["cart-item"]}>
          <span className={style["margin"]}>
            {cartItem[0]} x {cartItem[1]}
          </span>{" "}
          <Button
            name="X"
            onClick={() => {
              dispatch(removeItem(cartItem[0]));
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Cart;
