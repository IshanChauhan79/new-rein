import React from "react";
import classes from "./TopSlider.module.css";
// import image from "../../assets/images/slider.png";
import Slider from './Slider/Slider'
function TopSlider() {
  return (
    <section
      className={classes.TopSlider}   
    ><Slider /></section>
  );
}

export default TopSlider;
