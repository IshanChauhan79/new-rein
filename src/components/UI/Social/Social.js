import React from "react";

import classes from "./Social.module.css";
import { ReactComponent as Twitter } from "../../../assets/images/social/twitter.svg";
import { ReactComponent as Instagram } from "../../../assets/images/social/instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/images/social/facebook.svg";
import { ReactComponent as LinkedIn } from "../../../assets/images/social/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../../assets/images/social/whatsapp.svg";

function Social() {
  return (
    <div className={classes.Social}>
      <a
        href="https://www.facebook.com/reinwaterpurifiers"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook />
      </a>
      {/* <a href="/" target="_blank" rel="noreferrer"> */}
      <Twitter />
      {/* </a> */}
      <a
        href="https://www.instagram.com/reinwaterpurifiers/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram />
      </a>
      <a
        href="https://www.linkedin.com/company/rein-water-purifiers"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn />
      </a>
      <a
        href="https://wa.me/message/IWR4R4FPG2WVH1"
        target="_blank"
        rel="noreferrer"
      >
        <Whatsapp />
      </a>
    </div>
  );
}

export default Social;
