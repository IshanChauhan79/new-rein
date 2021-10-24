import React from "react";
import img from "../../assets/images/logo.png";

import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={img} alt="Rein"></img>
      </Link>
    </div>
  );
}

export default Logo;
