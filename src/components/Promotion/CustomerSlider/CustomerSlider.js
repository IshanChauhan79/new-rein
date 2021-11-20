import React from "react";
import classes from "./CustomerSlider.module.css";
// import image from "../../assets/images/slider.png";
import Slider from './Slider/Slider'
function CustomerSlider() {
  return (
    <section
      className={classes.CustomerSlider}   
    ><Slider /></section>
  );
}

export default CustomerSlider;
