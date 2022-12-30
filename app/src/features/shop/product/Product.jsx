import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductFromCart } from "../shopSlice";

//TODO
// css to product
// rating products

const Product = () => {
  const { id } = useParams();
  const { name, description, price } = useSelector((state) =>
    getProductFromCart(state, parseInt(id))
  );

  return (
    <div>
      {name} {price} {description}
    </div>
  );
};

export default Product;
