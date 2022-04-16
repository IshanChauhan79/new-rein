import React, { useState } from "react";

import classes from "./Float.module.css";
import call from "../../../assets/images/call2.png";
import whatsapp from "../../../assets/images/whatsapp.png";
import shop from "../../../assets/images/shop.png";

import { CSSTransition } from "react-transition-group";

function Float() {
  const [floatOpen, setFloatOpen] = useState(false);
  const [height, setHeight] = useState(0);
  // const nodeRef = useRef(null);
  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setHeight(height);
  };
  return (
    <aside className={classes.Float}>
      <div
        onClick={() => setFloatOpen((prev) => !prev)}
        className={classes.Contact}
      >
        <img src={call} alt="call"></img>
      </div>
      <div
        className={classes.FloatMenu}
        style={{ height: floatOpen ? height : "0px" }}
      >
        {/* <div className={classes.Arrow}></div> */}
        <CSSTransition
          in={floatOpen}
          // nodeRef={nodeRef}
          onEnter={calcHeight}
          mountOnEnter
          unmountOnExit
          timeout={500}
        >
          <div>
            <a href="tel:+919971205388">
              <img src={shop} alt="call"></img>
              <div className={classes.ContactDetails}>
                <p>Call sales</p>
                <p className={classes.ContactNo}>971205388</p>
              </div>
            </a>
            <a href="tel:+919971205388">
              <img src={call} alt="call"></img>
              <div className={classes.ContactDetails}>
                <p>Call Services</p>
                <p className={classes.ContactNo}>9971205388</p>
              </div>
            </a>
            <a
              href="https://wa.me/message/IWR4R4FPG2WVH1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="call"></img>
              <div className={classes.ContactDetails}>
                <p>Whastapp</p>
              </div>
            </a>
          </div>
        </CSSTransition>
      </div>
    </aside>
  );
}

export default Float;
