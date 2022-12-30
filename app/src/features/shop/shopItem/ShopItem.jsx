import React from "react";
import style from "./shopItem.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../shopSlice";
import { toast, ToastContainer } from "react-toastify";
import Button from "../../../components/button/Button";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ShopItem = ({ product: { id, name, price } }) => {
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
      theme: "dark",
    });

  return (
    <div className={`${style.container}  ${style.display}`}>
      <div>
        <h1>{capitalizeFirst(name)}</h1>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className={style.clickable}>
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
        <Link to={`/${id}`} className={style.info}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </Link>
      </div>
      <ToastContainer limit={5} />
    </div>
  );
};

export default ShopItem;
