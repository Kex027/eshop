import React from "react";
import { useSelector } from "react-redux";
import { getCart, getDiscount } from "../shop/shopSlice";
import style from "./cart.module.scss";
import Button from "../../components/button/Button";

const Cart = () => {
  const cart = useSelector(getCart);
  const { discount, quantityToDiscount } = useSelector(getDiscount);
  let allItemsCost = 0;
  const sortedCart = cart.reduce((acc, item) => {
    const name = item.name;
    const quantity = acc[name]?.quantity ?? 0;
    if (acc[name] == null) {
      acc[name] = [];
    }
    acc[name] = {
      ...item,
      quantity: quantity + 1,
    };
    return acc;
  }, {});

  return (
    <div className={style.container}>
      {!cart.length ? (
        <div>
          <h2>Cart is empty!!</h2>
          <p>Buy some things</p>
        </div>
      ) : (
        <div className={style.grid}>
          <span className={style.heading}>Quantity</span>{" "}
          <span className={style.heading}>Item</span>{" "}
          <span className={style.heading}>Price</span>
          {Object.values(sortedCart).map(({ name, price, quantity }) => {
            const sum = Math.round(
              quantity *
                price *
                Math.pow(
                  1 - discount,
                  Math.floor(quantity / quantityToDiscount)
                )
            );
            allItemsCost += sum;
            return (
              <>
                <span>{quantity}</span>{" "}
                <span>
                  {name} (${price}){" "}
                  <Button
                    text="X"
                    color="#4EA5D9"
                    bgColor="#122C34"
                    handleClick={() => {
                      console.log(name);
                    }}
                  />
                </span>{" "}
                {quantity >= quantityToDiscount ? (
                  <span>
                    <s>${quantity * price}</s> ${sum}
                  </span>
                ) : (
                  <span>${quantity * price}</span>
                )}
              </>
            );
          })}
          <span className={`${style.heading} ${style.lastRow}`}>
            Everything costs: ${allItemsCost}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
