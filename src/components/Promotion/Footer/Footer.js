import React, { useState, useRef } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";

import classes from "./Footer.module.css";
import ques from "../../../assets/images/ques.png";
import person from "../../../assets/images/person.png";
import close from "../../../assets/images/close.png";

const formType = ["Call Request", "Buy Now"];

function Footer(props) {
  const [height, setHeight] = useState(0);
  const [formSubmit, setFormSubmit] = useState(false);
  const [checked, setChecked] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const number = useRef();
  const nodeRef = useRef(null);

  const { menu, setMenu } = props;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let num = number.current.value;
    let i = menu === "sub" ? 1 : 0;
    if (num.toString().length === 10) {
      axios
        .post("https://rein-596c1-default-rtdb.firebaseio.com/promo.json", {
          title: "UnderSink",
          number: num,
          type: formType[i],
          data: new Date(),
        })
        .then((response) => {
          setFormSubmit(true);
          number.current.value = "";
          closeMenu();
          setMenu(false)
        })
        .catch((err) => {
          console.log(err);
          setIsError("Some Error occurred");
        });
    } else {
      setIsError("Enter valid Number");
    }
  };

  const calcHeight = (el) => {
    const claculatedHeight = el.offsetHeight;
    setHeight(claculatedHeight);
  };
  const openMenu = (el) => {
    setMenu(el);
    setIsMenu(el);
    // const html = document.querySelector("html");
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    setMenu(false);
    setTimeout(() => {
      const body = document.querySelector("body");
      setIsMenu(false);
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
      <div className={classes.Popup} style={{ height: menu ? "300px" : "0px" }}>
        <CSSTransition
          in={menu ? true : false}
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
              {isMenu === "call" ? (
                <img src={ques} alt="?" />
              ) : (
                <img src={person} className={classes.Person} alt="?" />
              )}

              {isMenu === "sub" ? (
                <p>Share Your Details</p>
              ) : (
                <p>Still have a doubt?</p>
              )}
            </div>
            <div className={classes.Check}>
              <form onSubmit={formSubmitHandler}>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {isError ? (
                    <div className={classes.ErrorMessage}>
                      Enter a valid Number
                    </div>
                  ) : null}

                  <input
                    className={classes.RequestNumberInput}
                    style={{
                      border: isError ? "1px solid red " : "1px solid #707070",
                    }}
                    type="number"
                    min="0"
                    ref={number}
                    placeholder="Phone Number"
                    required
                  ></input>
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <input
                      type="checkbox"
                      id="RTCP"
                      name="RTCP"
                      style={{ height: "10px" }}
                      checked={checked}
                      onChange={() => {
                        setChecked((prev) => !prev);
                      }}
                      required
                    />
                    <label htmlFor="RTCP" className={classes.RequestTandC}>
                      By Providing my number, I agree that REIN can contact me
                      via phone/e-mail/SMS/WhatApp and/or pre-recorded messages
                      using the number provided
                    </label>
                  </div>
                  {isMenu === "sub" ? (
                    <button type="submit" className={classes.RequestSubmit}>
                      Proceed
                    </button>
                  ) : (
                    <button type="submit" className={classes.RequestSubmit}>
                      Request a Callback
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default Footer;
