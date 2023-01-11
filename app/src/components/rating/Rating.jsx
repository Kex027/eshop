import React, { useState } from "react";
import style from "./rating.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { toast, ToastContainer } from "react-toastify";

const Rating = () => {
  // It is in reverse, cuz in css it is reversed. It is necessary to work properly
  const rating = [5, 4, 3, 2, 1];
  const [isRated, setIsRated] = useState(false);
  const notify = () =>
    toast.info("Rated! Thanks for your time", {
      position: "bottom-right",
      autoClose: 1000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });

  return (
    <div className={style.ratingStars}>
      {rating.map((rate) => (
        <FontAwesomeIcon
          key={rate}
          icon={faStar}
          className={!isRated ? `${style.starUnrated}` : ``}
          onClick={() => {
            if (!isRated) {
              console.log(rate);
              notify();
              setIsRated(true);
            }
          }}
        />
      ))}
      <ToastContainer limit={1} />
    </div>
  );
};

export default Rating;
