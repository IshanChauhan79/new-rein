import React from "react";
import classes from "./Slider.module.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

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
