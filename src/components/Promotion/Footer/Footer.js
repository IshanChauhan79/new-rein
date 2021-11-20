import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import classes from "./Footer.module.css";
import ques from "../../../assets/images/ques.png";
import close from "../../../assets/images/close.png";

function Footer(props) {
  const [height, setHeight] = useState(0);
  const nodeRef = useRef(null);

  const {menu,setMenu}=props;

  const calcHeight = (el) => {
    const claculatedHeight = el.offsetHeight;
    setHeight(claculatedHeight);
  };
  const openMenu = (el) => {
    setMenu(el);
    // const html = document.querySelector("html");
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    setMenu(false);
    setTimeout(() => {
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    }, 500);
  };

  return (
    <>
      {menu ? (
        <div className={classes.Backdrop} onClick={closeMenu}></div>
      ) : null}
      <div className={classes.Footer}>
        <button className={classes.call} onClick={() => openMenu("call")}>
          Request a call
        </button>
        <button className={classes.sub} onClick={() => openMenu("sub")}>
          Buy Now
        </button>
      </div>
      <div className={classes.Popup} style={{ height: menu ? "200px" : "0px" }}>
        <CSSTransition
          in={menu}
          // nodeRef={nodeRef}
          onEnter={calcHeight}
          mountOnEnter
          unmountOnExit
          timeout={500}
        >
          <div className={classes.PopupDetails}>
            <img
              src={close}
              alt="X"
              className={classes.Close}
              onClick={closeMenu}
            />
            <div className={classes.Title}>
              <img src={ques} alt="?" />
              {menu==='sub'?<p>Share Your Details</p>:<p>Still have a doubt?</p>}
              
            </div>
            <div className={classes.Check}>
              {menu==='sub'?<p>aaaaaaaaaaaaaaaaaaa a ksdjh sdjhsd jsdh sdjhsd fjsdvhf sdfsd
                fsdjhvf sdfsd fjsdbf sdfsdjv</p>:<p>Still have a doubt?</p>}
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default Footer;
