import React from "react";
import style from "./banner.module.scss";
import { getDiscount } from "../shop/shopSlice";
import { useSelector } from "react-redux";

const Banner = () => {
  const { discount, itemsToDiscount } = useSelector(getDiscount);

  return (
    <div className={style.container}>
      <h3>
        For every {itemsToDiscount} products you get {discount * 100}%
        discount!!!
      </h3>
    </div>
  );
};

export default Banner;
