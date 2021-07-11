import React from "react";

import classes from "./SideImage.module.css";
import Nav1 from "../../../assets/images/nav/1.png";
import Nav2 from "../../../assets/images/nav/2.png";
import Nav3 from "../../../assets/images/nav/3.png";
import Nav4 from "../../../assets/images/nav/4.png";
import Nav5 from "../../../assets/images/nav/5.png";
import Nav6 from "../../../assets/images/nav/6.png";

function SideImage(props) {
  var image = null;
  switch (props.type) {
    case "Water Purifiers":
      image = Nav2;
      break;
    case "Water Softener":
      image = Nav1;
      break;
    case "Water Heaters":
      image = Nav3;
      break;
    case "Air Purifiers":
      image = Nav4;
      break;
    case "Home Appliances":
      image = Nav5;
      break;
    case "Support":
      image = Nav6;
      break;
    default:
      image = Nav2;
  }
  return (
    <div className={classes.SideImage}>
      <img src={image} alt={props.type} />
    </div>
  );
}

export default SideImage;
