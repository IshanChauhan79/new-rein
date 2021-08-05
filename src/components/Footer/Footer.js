import React from "react";

import classes from  "./Footer.module.css";
import data from '../../data/Footer';
import DropDown from "../UI/DropDown/DropDown";

function Footer() {
  return <div className={classes.Footer}>
      <DropDown data={data} />
  </div>;
}

export default Footer;