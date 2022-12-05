import React, { useState } from "react";
import style from "./button.module.scss";

const Button = ({ text, handleClick, color, bgColor, borderW }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const styles = {
    backgroundColor: bgColor,
    opacity: !isHover ? 1 : 0.9,
    color: color,
    borderColor: color,
    borderWidth: borderW,
  };

  return (
    <button
      className={style.btn}
      style={styles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default Button;
