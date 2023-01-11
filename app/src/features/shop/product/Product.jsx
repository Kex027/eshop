import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductFromCart } from "../shopSlice";
import { capitalizeFirst } from "../../../functions";
import style from "./product.module.scss";
import Rating from "../../../components/rating/Rating";

//TODO
// rating products

const Product = () => {
  const { id } = useParams();
  const { name, description, price } = useSelector((state) =>
    getProductFromCart(state, parseInt(id))
  );

  return (
    <div className={style.container}>
      <h1 className={style.header}>
        {capitalizeFirst(name)} <span>${price.toFixed(2)}</span>
      </h1>
      <p className={style.description}>{description}</p>
      <div>
        <p>Rate this product!</p>
      </div>
      <Rating />
    </div>
  );
};

export default Product;
