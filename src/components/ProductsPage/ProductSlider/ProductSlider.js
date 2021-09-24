import React from "react";
import Slider from "./Slider/Slider";
import classes from "./ProductSlider.module.css";

function ProductSlider() {
  return (
    <div className={classes.ProductSlider}>
      <Slider />
    </div>
  );
}

export default ProductSlider;
