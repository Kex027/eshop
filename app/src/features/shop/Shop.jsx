import React from "react";
import ShopItem from "./shopItem/ShopItem";
import style from "./shop.module.scss";
import { useSelector } from "react-redux";
import { getAllProducts, getQuery } from "./shopSlice";
import "react-toastify/dist/ReactToastify.css";
import Banner from "../banner/Banner";

const Shop = () => {
  const products = useSelector(getAllProducts);
  const query = useSelector(getQuery);

  const getFilteredItems = () => {
    if (!products.length) {
      return products;
    }
    return products.filter((product) => product.name.includes(query));
  };

  return (
    <div className={`${style.container}  ${style.display}`}>
      <Banner />

      {getFilteredItems().map((product) => (
        <ShopItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
