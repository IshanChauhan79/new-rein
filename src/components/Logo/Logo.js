import React from "react";
import img from "../../assets/images/logo.png";
import img2 from "../../assets/images/logo2.png";

import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <div className={classes.Logo}>
      {props.noLink ? (
        <img
          src={props.logo2 ? img2 : img}
          height={props.logo2 ? "40px" : "40px"}
          alt="Rein"
        ></img>
      ) : (
        <Link to="/">
          <img
            style={{ position:'relative',bottom:'-5px' }}
            src={props.logo2 ? img2 : img}
            height={props.logo2 ? "40px" : "40px"}
            alt="Rein"
          ></img>
        </Link>
      )}
    </div>
  );
}

export default Logo;
