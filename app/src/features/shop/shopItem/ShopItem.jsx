import React from "react";
import style from "./shopItem.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../shopSlice";
import { toast, ToastContainer } from "react-toastify";
import Button from "../../../components/button/Button";

const ShopItem = ({ product: { id, name, description, price } }) => {
  const dispatch = useDispatch();
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const notify = () =>
    toast.success("Successfully added!", {
      position: "bottom-right",
      autoClose: 1500,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className={`${style.container}  ${style.display}`}>
      <div className="header">
        <h1>
          {capitalizeFirst(name)} ${price}
        </h1>
      </div>
      <p>{description}</p>
      <Button
        text="Add to cart!"
        color="#4EA5D9"
        bgColor="#224870"
        className={style.button}
        handleClick={() => {
          notify();
          dispatch(addToCart({ id, name, price }));
        }}
      />
      <ToastContainer limit={5} />
    </div>
  );
};

export default ShopItem;
