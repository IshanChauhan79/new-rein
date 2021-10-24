import React from "react";
import classes from "./Slider.module.css";
import leftArrow from "../../../../assets/images/arrowLeft.png";
import rightArrow from "../../../../assets/images/arrowRight.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? [classes.BtnSlide, classes.Next].join(" ")
          : [classes.BtnSlide, classes.Prev].join(" ")
      }
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt={direction === "next" ? ">" : "<"}
      />
    </button>
  );
}
