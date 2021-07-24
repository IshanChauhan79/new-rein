import React, { useState } from "react";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Bar } from "../../assets/images/bars.svg";

import classes from "./Header.module.css";
import products, { support } from "../../data/products";

import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Header() {
  const [showDropMenu, setDropMenu] = useState(false);
  const [showBackDrop, setBackDrop] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

  const [BarBackDrop, setBarBackDrop] = useState(false);
  const [showBarsMenu, setBarsMenu] = useState(false);

  const barMenuClicked = () => {
    setBarsMenu(true);
  };
  const closeBarsMenu = () => {
    setBarsMenu(false);
  };

  const mouseEnterNav = (e, nav) => {
    if (!showBackDrop) {
      setDelayHandler(
        setTimeout(() => {
          setBackDrop(true);
          setTimeout(() => {
            setDropMenu(nav);
          }, 200);
        }, 200)
      );
      return;
    }
    setDelayHandler(
      setTimeout(() => {
        setDropMenu(nav);
      }, 200)
    );
  };

  const mouseLeaveNav = (e) => {
    clearTimeout(delayHandler);
    setDropMenu(false);
  };
  const backdropMouseLeave = (e) => {
    setTimeout(() => {
      setBackDrop(false);
      setDropMenu(false);
    }, 200);
  };

  const navList = products.map((item) => {
    return (
      <NavItem
        data={item}
        key={item.title}
        mouseEnter={mouseEnterNav}
        mouseLeave={mouseLeaveNav}
        show={showDropMenu}
      ></NavItem>
    );
  });
  const supportElement = (
    <NavItem
      data={support}
      mouseEnter={mouseEnterNav}
      mouseLeave={mouseLeaveNav}
      show={showDropMenu}
    />
  );
  return (
    <div className={classes.Header}>
      <div className={classes.HeaderList}>
        <Logo />
        <div
          className={classes.Navigation}
          onMouseLeave={(e) => backdropMouseLeave(e)}
        >
          {navList}
          <div
            className={classes.NavHoverOpen}
            style={{
              maxHeight: showBackDrop ? "70vh" : "0",
              visibility: showBackDrop ? "visible" : "hidden",
            }}
          ></div>
        </div>
      </div>
      <div className={classes.HeaderList}>
        <div
          className={classes.Navigation}
          onMouseLeave={(e) => backdropMouseLeave(e)}
        >
          {supportElement}
          <div
            className={classes.NavHoverOpen}
            style={{
              maxHeight: showBackDrop ? "70vh" : "0",
              visibility: showBackDrop ? "visible" : "hidden",
            }}
          ></div>
        </div>

        <div className={classes.Search}>
          <Search />
        </div>
        <div className={classes.Bars} onClick={barMenuClicked}>
          <Bar />
        </div>
      </div>
      {showBarsMenu && (
        <div className={classes.BarsBackdrop} onClick={closeBarsMenu}></div>
      )}
      <div
        className={classes.BarsMenu}
        style={{ right: showBarsMenu ? "0" : "-100%" }}
      ></div>

      {showBackDrop && <div className={classes.Backdrop}></div>}
    </div>
  );
}

export default Header;
