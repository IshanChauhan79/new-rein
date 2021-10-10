import React, { useState } from "react";

import { Link } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";

import DropDown from "../../UI/DropDown/DropDown";

import close from "../../../assets/images/close.png";
import arrowRight from "../../../assets/images/arrowRight.png";
import arrowLeft from "../../../assets/images/arrowLeft.png";
import horizontalTransition from "./horizontalTransition.module.css";
import secondaryHorizontalTransition from "./secondaryHorizontalTransition.module.css";

import products, { support } from "../../../data/products";

import classes from "./BarsMenu.module.css";
import Social from "../../UI/Social/Social";

function BarsMenu(props) {
  console.log("BarsMenu");
  const [menuSelected, setMenuSelected] = useState("");
  const [sideMenu, setSideMenu] = useState("");
  const data = [...products, support];
  const closeClicked = () => {
    setMenuSelected("");
    props.closed();
  };
  const menuclicked = (el) => {
    setMenuSelected(el);
    setSideMenu(el);
    console.log(data);
  };
  const backClicked = () => {
    setMenuSelected("");
  };

  const productList = data.map((pd, i) => (
    <div className={classes.MenuType} key={pd.title}>
      {pd.route ? (
        <Link to={"/products/" + pd.route}>{pd.title}</Link>
      ) : (
        <div>{pd.title}</div>
      )}
      <img
        src={arrowRight}
        alt=">"
        height="12px"
        onClick={() => menuclicked(i)}
      ></img>
    </div>
  ));
  let menuSelctedElement = null;
  if (sideMenu !== "") {
    menuSelctedElement = (
      <div className={classes.Menu}>
        <div className={classes.Back} onClick={backClicked}>
          <img src={arrowLeft} alt="<" height="24px"></img>
        </div>
        <div>
          <div className={classes.Title}>{data[sideMenu].title}</div>
          <DropDown data={data[sideMenu]["types"]} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={classes.BarsMenu}
      style={{
        right: props.show ? "0" : "-100%",
        visibility: props.show ? "visible" : "hidden",
      }}
    >
      <div className={classes.Close}>
        <img src={close} alt="X" onClick={closeClicked}></img>
      </div>
      <CSSTransition
        in={menuSelected === ""}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames={horizontalTransition}
      >
        {(state) => <div className={classes.Menu}>{productList}</div>}
      </CSSTransition>
      <CSSTransition
        in={menuSelected !== ""}
        mountOnEnter
        unmountOnExit
        timeout={500}
        classNames={secondaryHorizontalTransition}
      >
        {(state) => menuSelctedElement}
      </CSSTransition>
      <div className={classes.Social}>
        <Social />
      </div>

      {/* {menuSelected === null ? productList : menuSelctedElement} */}
    </div>
  );
}

export default BarsMenu;
