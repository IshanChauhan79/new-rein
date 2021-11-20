import React, { useEffect, useState } from "react";
import classes from "./Slider.module.css";

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

  // const nextSlide = () => {
  //   if (slideIndex !== Sliders) {
  //     setSlideIndex(slideIndex + 1);
  //   } else if (slideIndex === Sliders) {
  //     setSlideIndex(1);
  //   }
  // };

  // const prevSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1);
  //   } else if (slideIndex === 1) {
  //     setSlideIndex(Sliders);
  //   }
  // };

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
        <div className={classes.ReviewsCard}>
          <p className={classes.WhatCustomer}>
            What <span style={{ fontFamily: "amiko-bold" }}>Our Customer</span>{" "}
            Are Saying
          </p>
          <h4 className={classes.Value}>Value for Money</h4>
          <p className={classes.CustomerReview}>
            "I bought a Rein undersink water purifier last month, and believe me
            it is the best water purifier one can get at a really affordable
            price in the market. They also offered me 1 year free maintenance
            plan which makes it most value for money product compared to others
            and the taste of water after filtration is amazing. I seriously
            recommend Rein if you are in the market looking for an economical
            and quality water purifier."
          </p>
          <h4 className={classes.CustomerName}>K. Swapnil</h4>
          <p className={classes.Location}>New Delhi</p>
        </div>
      </div>
      <div
        className={[
          classes.Slide,
          slideIndex === 2 ? classes.SlideActive : null,
        ].join(" ")}
      >
        <div className={classes.ReviewsCard}>
          <p className={classes.WhatCustomer}>
            What <span style={{ fontFamily: "amiko-bold" }}>Our Customer</span>{" "}
            Are Saying
          </p>
          <h4 className={classes.Value}>Service Experience</h4>
          <p className={classes.CustomerReview}>
            "My last water purifier broke and the company they gave me really
            high repair costs, so I decided to buy a new one altogether. My
            experience with Rein has been amazing, they check up for servicing
            on time and cost of their parts is also very acceptable. I believe
            when purchasing anything after-sales service shouldn't be
            overlooked, that's where I'm really happy that I bought a rein water
            purifier, their service support is really good."
          </p>
          <h4 className={classes.CustomerName}>Utkarsh Sharma</h4>
          <p className={classes.Location}>New Delhi</p>
        </div>
      </div>
      <div
        className={[
          classes.Slide,
          slideIndex === 3 ? classes.SlideActive : null,
        ].join(" ")}
      >
        <div className={classes.ReviewsCard}>
          <p className={classes.WhatCustomer}>
            What <span style={{ fontFamily: "amiko-bold" }}>Our Customer</span>{" "}
            Are Saying
          </p>
          <h4 className={classes.Value}>Value for Money</h4>
          <p className={classes.CustomerReview}>
            "I bought a Rein undersink water purifier last month, and believe me
            it is the best water purifier one can get at a really affordable
            price in the market. They also offered me 1 year free maintenance
            plan which makes it most value for money product compared to others
            and the taste of water after filtration is amazing. I seriously
            recommend Rein if you are in the market looking for an economical
            and quality water purifier."
          </p>
          <h4 className={classes.CustomerName}>K. Swapnil</h4>
          <p className={classes.Location}>New Delhi</p>
        </div>
      </div>
      <div
        className={[
          classes.Slide,
          slideIndex === 4 ? classes.SlideActive : null,
        ].join(" ")}
      >
        <div className={classes.ReviewsCard}>
          <p className={classes.WhatCustomer}>
            What <span style={{ fontFamily: "amiko-bold" }}>Our Customer</span>{" "}
            Are Saying
          </p>
          <h4 className={classes.Value}>Service Experience</h4>
          <p className={classes.CustomerReview}>
            "My last water purifier broke and the company they gave me really
            high repair costs, so I decided to buy a new one altogether. My
            experience with Rein has been amazing, they check up for servicing
            on time and cost of their parts is also very acceptable. I believe
            when purchasing anything after-sales service shouldn't be
            overlooked, that's where I'm really happy that I bought a rein water
            purifier, their service support is really good."
          </p>
          <h4 className={classes.CustomerName}>Utkarsh Sharma</h4>
          <p className={classes.Location}>New Delhi</p>
        </div>
      </div>
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
