import React from "react";
import CartItem from "./ShopListItem";
import style from "./ShopList.module.scss";

const ShopList = () => {
  const shopItems = [
    { name: "Milk", price: 2, img: "./milk.jfif" },
    { name: "Butter", price: 4, img: "./butter.jfif" },
    { name: "Bun", price: 0.5, img: "./bun.jfif" },
  ];

  return (
    <div className={style["container"]}>
      SHOP:
      <div className={style["items"]}>
        {!!shopItems &&
          shopItems.map(({ name, price, img }) => (
            <div key={name} className={style["item"]}>
              <CartItem name={name} price={price} img={img} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShopList;
