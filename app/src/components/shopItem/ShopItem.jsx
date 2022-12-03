import React from "react";
import style from "./shopItem.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/shop/shopSlice";

const ShopItem = ({ product: { id, name, description, price }, addAlert }) => {
  const dispatch = useDispatch();
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={`${style.container}  ${style.display}`}>
      <div className="header">
        <h1>
          {capitalizeFirst(name)} ${price}
        </h1>
      </div>
      <p>{description}</p>
      <button
        className={style.button}
        onClick={() => {
          addAlert();
          dispatch(addToCart({ id, name, price }));
        }}
      >
        Add to cart!
      </button>
    </div>
  );
};

export default ShopItem;
