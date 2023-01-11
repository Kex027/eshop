import React from "react";
import style from "./button.module.scss";

const Button = ({ text, handleClick, color, bgColor, borderW }) => {
  const styles = {
    backgroundColor: bgColor,
    color: color,
    borderColor: color,
    borderWidth: borderW,
  };

  return (
    <button className={style.btn} style={styles} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
