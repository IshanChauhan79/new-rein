import React from "react";
import { Link } from "react-router-dom";

import classes from "./Banner.module.css";

function Banner(props) {
  if (props.data.fullSize) {
    return (
      <div
        className={[
          classes.Banner,
          classes.BannerShadow,
          props.data.rightAligned ? classes.RightAl : null,
        ].join(" ")}
      >
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}${props.data.bg1})`,
          }}
        >
          <div className={classes.Title}>{props.data.title1}</div>
          <div className={classes.Underline}></div>
          {props.data.subImg ? (
            <div className={classes.SubImage}>
              <img
                src={process.env.PUBLIC_URL + props.data.subImg}
                width="100%"
                alt=""
              ></img>
            </div>
          ) : null}
          {props.data.subText ? (
            <div className={classes.SubText}>{props.data.subText}</div>
          ) : null}
          {props.data.link ? (
            <a href={props.data.link} className={classes.KnowButton}>
              {props.data.button}
            </a>
          ) : null}
          {props.data.route ? (
            <Link to={props.data.route} className={classes.KnowButton}>
              {props.data.button}
            </Link>
          ) : null}{" "}
          {props.data.bottomText ? (
            <div className={classes.BottomText}>{props.data.bottomText}</div>
          ) : null}
        </div>
        <div
          className={classes.BannerImage}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}${props.data.bg2})`,
          }}
        ></div>
      </div>
    );
  } else {
    return (
      <div className={classes.Banner}>
        <div
          className={classes.BannerHalf}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}${props.data.bg1})`,
          }}
        >
          <div className={classes.Title}>{props.data.title1}</div>
          <div className={classes.Underline}></div>
          <div className={classes.Product}>
            <img
              src={process.env.PUBLIC_URL + props.data.img1}
              width="100%"
              alt=""
            ></img>
          </div>
          {props.data.subImg ? (
            <div className={classes.SubImage}>
              <img
                src={process.env.PUBLIC_URL + props.data.subImg}
                width="100%"
                alt=""
              ></img>
            </div>
          ) : null}
          {props.data.subText ? (
            <div className={classes.SubText}>{props.data.subText}</div>
          ) : null}
          {props.data.link ? (
            <a href={props.data.link} className={classes.KnowButton}>
              {props.data.button}
            </a>
          ) : null}
          {props.data.route ? (
            <Link to={props.data.route} className={classes.KnowButton}>
              {props.data.button}
            </Link>
          ) : null}{" "}
          {props.data.bottomText ? (
            <div className={classes.BottomText}>{props.data.bottomText}</div>
          ) : null}
        </div>
        <div
          className={classes.BannerHalf}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}${props.data.bg2})`,
          }}
        >
          <div className={classes.Title}>{props.data.title2}</div>
          <div className={classes.Underline}></div>
          <div className={classes.Product}>
            <img
              src={process.env.PUBLIC_URL + props.data.img2}
              width="100%"
              alt=""
            ></img>
          </div>
          {props.data.subImg ? (
            <div className={classes.SubImage}>
              <img
                src={process.env.PUBLIC_URL + props.data.subImg}
                width="100%"
                alt=""
              ></img>
            </div>
          ) : null}
          {props.data.subText ? (
            <div className={classes.SubText}>{props.data.subText}</div>
          ) : null}
          {props.data.link ? (
            <a href={props.data.link} className={classes.KnowButton}>
              {props.data.button}
            </a>
          ) : null}
          {props.data.route ? (
            <Link to={props.data.route} className={classes.KnowButton}>
              {props.data.button}
            </Link>
          ) : null}

          {props.data.bottomText ? (
            <div className={classes.BottomText}>{props.data.bottomText}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Banner;
