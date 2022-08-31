import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import { addItem } from "../shopSlice";
import style from "./ShopListItem.module.scss";

const CartItem = ({ name, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className={style["container"]}>
      ${price} {name}
      <img src={img} alt={name} className={style["image"]} />
      <Button
        name="Add"
        onClick={() => dispatch(addItem({ name, price, img }))}
      />
    </div>
  );
};

export default CartItem;
