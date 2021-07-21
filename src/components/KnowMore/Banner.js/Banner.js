import React from "react";

import classes from "./Banner.module.css";

function Banner(props) {
  if (props.data.fullSize) {
    return (
      <div
        className={[
          classes.Banner,
          props.data.rightAligned ? classes.RightAl : null,
        ].join(" ")}
      >
        <div
          style={{
            backgroundImage: `url(${props.data.bg1})`,
          }}
        >
          <div className={classes.Title}>{props.data.title1}</div>
          <div className={classes.Underline}></div>

          {props.data.subImg ? (
            <div className={classes.SubImage}>
              <img src={props.data.subImg} width="100%" alt=""></img>
            </div>
          ) : null}
          {props.data.subText ? (
            <div className={classes.SubText}>{props.data.subText}</div>
          ) : null}
          <div className={classes.KnowButton}>{props.data.button}</div>
          {props.data.bottomText ? (
            <div className={classes.BottomText}>{props.data.bottomText}</div>
          ) : null}
        </div>
        <div
          className={classes.BannerImage}
          style={{ backgroundImage: `url(${props.data.bg2})` }}
        ></div>
      </div>
    );
  } else {
    return (
      <div className={classes.Banner}>
        <div
          style={{
            backgroundImage: `url(${props.data.bg1})`,
            margin: "0rem 1rem",
          }}
        >
          <div className={classes.Title}>{props.data.title1}</div>
          <div className={classes.Underline}></div>
          <div className={classes.Product}>
            <img src={props.data.img1} width="100%" alt=""></img>
          </div>
          {props.data.subImg ? (
            <div className={classes.SubImage}>
              <img src={props.data.subImg} width="100%" alt=""></img>
            </div>
          ) : null}
          {props.data.subText ? (
            <div className={classes.SubText}>{props.data.subText}</div>
          ) : null}
          <div className={classes.KnowButton}>{props.data.button}</div>
          {props.data.bottomText ? (
            <div className={classes.BottomText}>{props.data.bottomText}</div>
          ) : null}
        </div>
        <div
          style={{
            backgroundImage: `url(${props.data.bg2})`,
            margin: "0rem 1rem",
          }}
        >
          <div className={classes.Title}>{props.data.title2}</div>
          <div className={classes.Underline}></div>
          <div className={classes.Product}>
            <img src={props.data.img2} width="100%" alt=""></img>
          </div>
          {props.data.subImg ? (
            <div className={classes.SubImage}>
              <img src={props.data.subImg} width="100%" alt=""></img>
            </div>
          ) : null}
          {props.data.subText ? (
            <div className={classes.SubText}>{props.data.subText}</div>
          ) : null}
          <div className={classes.KnowButton}>{props.data.button}</div>
          {props.data.bottomText ? (
            <div className={classes.BottomText}>{props.data.bottomText}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Banner;
// <div className={classes.KnowContainer}>
//         <div
//           style={{
//             backgroundImage: `url(${data[0].img1})`,
//           }}
//         >
//           <div className={classes.Title}>
//             Innovative Versatile Design that stays Hidden in your Kitchen
//           </div>
//           <div className={classes.Underline}></div>
//           <div className={classes.KnowButton}>{props.data.button}</div>
//           <div className={classes.Warrenty}>
//             *Free Installation | Free Maintenance | 1 Year Warranty*
//           </div>
//         </div>
//         <div style={{ backgroundColor: "blue" }}></div>
//       </div>
