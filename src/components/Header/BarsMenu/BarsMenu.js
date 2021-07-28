import React, { useState } from "react";
import close from "../../../assets/images/close.png";
import arrowRight from "../../../assets/images/arrowRight.png";
import arrowLeft from "../../../assets/images/arrowLeft.png";
import arrowDown from "../../../assets/images/arrowDown.png";

import products, { support } from "../../../data/products";

import classes from "./BarsMenu.module.css";

function BarsMenu(props) {
  const [menuSelected, setMenuSelected] = useState(null);
  const data = [...products, support];
  const closeClicked = () => {
    setMenuSelected(null);
    props.closed();
  };
  const menuclicked = (el) => {
    setMenuSelected(el);
  };
  const backClicked = () => {
    setMenuSelected(null);
  };

  console.log(menuSelected);
  const productList = data.map((pd, i) => (
    <div
      className={classes.MenuType}
      key={pd.title}
      onClick={() => menuclicked(i)}
    >
      <div>{pd.title}</div>
      <img src={arrowRight} alt="X" height="12px"></img>
    </div>
  ));
  let selctedMenuList = null;
  let menuSelctedElement = null;
  if (menuSelected !== null) {
    selctedMenuList = data[menuSelected]["types"].map((pd, i) => (
      <div className={classes.MenuType} key={pd.name}>
        <div>{pd.name}</div>
        <img src={arrowDown} alt="X" height="12px"></img>
      </div>
    ));
    menuSelctedElement = (
      <div>
        <div className={classes.Back} onClick={backClicked}>
        <img src={arrowLeft} alt="<" height="24px" ></img>
        </div>
        <div className={classes.Title}>{data[menuSelected].title}</div>
        {selctedMenuList}
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
      {menuSelected === null ? productList : menuSelctedElement}
    </div>
  );
}

export default BarsMenu;
