import React from "react";
import { Link } from "react-router-dom";

import classes from "./FeaturedProduct.module.css";

function FeaturedProduct(props) {
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
          <Link to={props.route}>
            <div className={classes.Buy}>Buy now</div>
          </Link>
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
      <Link to={props.route}>
        <div className={classes.Buy}>Buy now</div>
      </Link>
    </div>
  );
}

export default FeaturedProduct;
