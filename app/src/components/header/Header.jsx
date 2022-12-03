import React from "react";
import style from "./header.module.scss";
import SearchBar from "../searchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getCartLength } from "../../features/shop/shopSlice";

const Header = () => {
  const cartLength = useSelector(getCartLength);

  return (
    <div className={style.container}>
      <div className={`${style.display} ${style.content}`}>
        <div className={`${style.item} ${style.icon}`}>
          <FontAwesomeIcon icon={faHouse} />
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
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
};

export default Header;
