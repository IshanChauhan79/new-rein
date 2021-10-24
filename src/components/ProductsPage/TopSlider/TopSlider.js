import React from "react";
import classes from "./TopSlider.module.css";
// import image from "../../assets/images/slider.png";
import Slider from './Slider/Slider'
function TopSlider() {
  return (
    <div
      className={classes.TopSlider}   
    ><Slider /></div>
  );
}

export default TopSlider;
