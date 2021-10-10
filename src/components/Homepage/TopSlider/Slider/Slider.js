import React, { useEffect, useState } from "react";
import classes from "./Slider.module.css";
import BtnSlider from "./BtnSlider";
import festive from "../../../../assets/images/homeSlider/festive.jpg";
import festiveMobile from "../../../../assets/images/homeSlider/festiveMobile.jpg";
import us from "../../../../assets/images/homeSlider/us.jpg";
import ws from "../../../../assets/images/homeSlider/ws.jpg";
import sd from "../../../../assets/images/homeSlider/sd.jpg";
import usM from "../../../../assets/images/homeSlider/usM.jpg";
import wsM from "../../../../assets/images/homeSlider/wsM.jpg";
import sdM from "../../../../assets/images/homeSlider/sdM.jpg";

const Sliders = 4;
export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (slideIndex !== Sliders) {
        setSlideIndex((prev) => prev + 1);
      } else if (slideIndex === Sliders) {
        setSlideIndex(1);
      }
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== Sliders) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Sliders) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Sliders);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={classes.ContainerSlider}>
      <div
        className={[
          classes.SlideFirst,
          slideIndex === 1 ? classes.SlideActive : null,
        ].join(" ")}
      >
        <img
          src={festive}
          alt="opps"
          width="100%"
          height="100%"
          className={classes.Img}
        />
        <img
          src={festiveMobile}
          alt="opps"
          width="100%"
          className={classes.ImgMobile}
        />
      </div>
      <div
        className={[
          classes.Slide,
          slideIndex === 2 ? classes.SlideActive : null,
        ].join(" ")}
      >
        <img src={us} alt="opps" width="100%" className={classes.Img} />
        <img src={usM} alt="opps" width="100%" className={classes.ImgMobile} />
      </div>
      <div
        className={[
          classes.Slide,
          slideIndex === 3 ? classes.SlideActive : null,
        ].join(" ")}
      >
        <img src={ws} alt="opps" width="100%" className={classes.Img} />
        <img src={wsM} alt="opps" width="100%" className={classes.ImgMobile} />
      </div>
      <div
        className={[
          classes.Slide,
          slideIndex === 4 ? classes.SlideActive : null,
        ].join(" ")}
      >
        <img src={sd} alt="opps" width="100%" className={classes.Img} />
        <img src={sdM} alt="opps" width="100%" className={classes.ImgMobile} />
      </div>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className={classes.DotContainer}>
        {Array.from({ length: Sliders }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={[
              classes.Dot,
              slideIndex === index + 1 ? classes.ActiveDot : null,
            ].join(" ")}
          ></div>
        ))}
      </div>
    </div>
  );
}
