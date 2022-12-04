import React from "react";
import style from "./header.module.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCartLength, switchShop } from "../shop/shopSlice";

const Header = () => {
  const cartLength = useSelector(getCartLength);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={`${style.display} ${style.content}`}>
        <div
          onClick={() => {
            dispatch(switchShop(true));
          }}
          className={`${style.item} ${style.icon}`}
        >
          <FontAwesomeIcon icon={faHouse} className={style.pointer} />
        </div>
        <div className={style.item}>
          <h1>E-SHOP</h1>
        </div>
        <div className={style.item}>
          <SearchBar />
        </div>
        <div className={`${style.item} ${style.icon}`}>
          <span className={`${style.info}`}>
            {cartLength > 9 ? "9+" : cartLength}
          </span>
          <div
            onClick={() => {
              dispatch(switchShop(false));
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} className={style.pointer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
