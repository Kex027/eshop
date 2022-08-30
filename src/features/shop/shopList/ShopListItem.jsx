import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../shopSlice";

const CartItem = ({ name, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div>
      ${price} {name}
      <img src={img} alt={name} />
      <button onClick={() => dispatch(addItem({ name, price, img }))}>
        Add
      </button>
    </div>
  );
};

export default CartItem;
