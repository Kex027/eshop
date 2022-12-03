import React from "react";
import ShopItem from "../../components/shopItem/ShopItem";
import style from "./shop.module.scss";
import { useSelector } from "react-redux";
import { getAllProducts, getQuery } from "./shopSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const products = useSelector(getAllProducts);
  const query = useSelector(getQuery);

  const notify = () => toast("Wow so easy!");

  const getFilteredItems = () => {
    if (!products.length) {
      return products;
    }
    return products.filter((product) => product.name.includes(query));
  };

  return (
    <div className={`${style.container}  ${style.display}`}>
      {getFilteredItems().map((product) => (
        <ShopItem key={product.id} product={product} addAlert={notify} />
      ))}
      {/*<button onClick={notify}>Notify</button>;*/}
      {/*<ToastContainer />*/}
    </div>
  );
};

export default Shop;
