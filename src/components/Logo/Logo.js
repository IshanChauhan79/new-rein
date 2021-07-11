import React from "react";
import img from '../../assets/images/logo.png'

import classes from  "./Logo.module.css";

function Logo() {
  return <div className={classes.Logo}>
          <img src={img} alt="Rein"></img>
  </div>;
}

export default Logo;
