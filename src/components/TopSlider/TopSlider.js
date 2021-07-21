import React from "react";
import classes from "./TopSlider.module.css";
import image from "../../assets/images/slider.png";
function TopSlider() {
  return (
    <div
      className={classes.TopSlider}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}

export default TopSlider;
