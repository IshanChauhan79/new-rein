import React, { useEffect, useState } from "react";
import classes from "./Slider.module.css";
import BtnSlider from "./BtnSlider";

export default function Slider(props) {
  const { imgs } = props;
  const Sliders = imgs.length;
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
  }, [slideIndex, Sliders]);

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
      {imgs.map((item, i) => {
        if (i === 0) {
          return ((
            <div
              key={item.web}
              className={[
                classes.SlideFirst,
                slideIndex === i + 1 ? classes.SlideActive : null,
              ].join(" ")}
            >
              <img
                src={item.web}
                alt="opps"
                width="100%"
                height="100%"
                className={classes.Img}
              />
              <img
                src={item.web}
                alt="opps"
                width="100%"
                className={classes.ImgMobile}
              />
            </div>
          ))
        }
        return (
          <div
            key={item.web}
            className={[
              classes.Slide,
              slideIndex === i + 1 ? classes.SlideActive : null,
            ].join(" ")}
          >
            <img
              src={item.web}
              alt="opps"
              width="100%"
              height="100%"
              className={classes.Img}
            />
            <img
              src={item.web}
              alt="opps"
              width="100%"
              className={classes.ImgMobile}
            />
          </div>
        )
      })}

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
