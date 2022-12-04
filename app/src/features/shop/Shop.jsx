import React from "react";
import ShopItem from "../shopItem/ShopItem";
import style from "./shop.module.scss";
import { useSelector } from "react-redux";
import { getAllProducts, getIsShop, getQuery } from "./shopSlice";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../cart/Cart";

const Shop = () => {
  const products = useSelector(getAllProducts);
  const query = useSelector(getQuery);
  const isShop = useSelector(getIsShop);

  const getFilteredItems = () => {
    if (!products.length) {
      return products;
    }
    return products.filter((product) => product.name.includes(query));
  };

  return (
    <div className={`${style.container}  ${style.display}`}>
      {isShop ? (
        getFilteredItems().map((product) => (
          <ShopItem key={product.id} product={product} />
        ))
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default Shop;
