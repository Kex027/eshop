import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, getCart, getDiscount } from "../shop/shopSlice";
import style from "./cart.module.scss";
import Button from "../../components/button/Button";

const Cart = () => {
  const cart = useSelector(getCart);
  const { discount, itemsToDiscount } = useSelector(getDiscount);
  const dispatch = useDispatch();
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
                Math.pow(1 - discount, Math.floor(quantity / itemsToDiscount))
            );
            allItemsCost += sum;
            return (
              <>
                <span>{quantity}</span>{" "}
                <span>
                  {name} (${price.toFixed(2)}){" "}
                  <Button
                    text="X"
                    color="#4EA5D9"
                    bgColor="#122C34"
                    handleClick={() => {
                      dispatch(deleteFromCart(name));
                    }}
                  />
                </span>{" "}
                {quantity >= itemsToDiscount ? (
                  <span>
                    <s className={style.oldPrice}>
                      ${(quantity * price).toFixed(2)}
                    </s>{" "}
                    ${sum}
                  </span>
                ) : (
                  <span>${(quantity * price).toFixed(2)}</span>
                )}
              </>
            );
          })}
          <span className={`${style.heading} ${style.lastRow}`}>
            Everything costs: ${allItemsCost.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
