import React from "react";

import classes from "./FeaturedProduct.module.css";

function FeaturedProduct(props) {
  
  console.log("FeaturedProduct");
  let catColor = props.catColor;
  switch (props.catColor) {
    case "yellow":
      catColor = "#ffaa4e";
      break;
    case "blue":
      catColor = "#2189ff";
      break;
    case "red":
      catColor = "#ef3434";
      break;
    default:
      catColor = props.catColor;
  }
  if (props.big) {
    return (
      <div>
        <div
          className={classes.FeaturedProduct}
          style={{ backgroundColor: "white" }}
        >
          <div className={classes.CatBig} style={{ backgroundColor: catColor }}>
            {props.cat}
          </div>
          <div className={classes.Img}>
            <img src={props.img} alt="" width="60%"></img>
          </div>
          <div className={classes.TitleBig}>{props.title}</div>
          <div className={classes.Underline}></div>
          <div className={[classes.Desc, classes.DescBig].join(" ")}>
            {props.desc}
          </div>
          <div className={classes.Buy}>Buy now</div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.FeaturedProduct}>
      <div className={classes.Cat} style={{ backgroundColor: catColor }}>
        {props.cat}
      </div>
      <div className={classes.Img}>
        <img src={props.img} alt="" width="60%"></img>
      </div>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.Underline}></div>
      <div className={classes.Desc}>{props.desc}</div>
      <div className={classes.Buy}>Buy now</div>
    </div>
  );
}

export default FeaturedProduct;
