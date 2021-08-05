import React from "react";

import classes from  "./Social.module.css";
import { ReactComponent as Twitter } from "../../../assets/images/social/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/images/social/instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/images/social/facebook.svg";
import { ReactComponent as LinkedIn } from "../../../assets/images/social/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../../assets/images/social/whatsapp.svg";




function Social() {
  return <div className={classes.Social}>
      <Facebook />
      <Twitter />
      <Instagram />
      <LinkedIn />
      <Whatsapp />
  </div>;
}

export default Social;