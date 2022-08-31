import React from "react";
import style from "./Button.module.scss";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <button
        className={style["btn"]}
        onClick={() => {
          onClick();
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
