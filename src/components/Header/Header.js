import React from "react";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import classes from "./Header.module.css";
import products, { support } from "../../data/products";

import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Header() {
  const navList = products.map((item) => {
    return <NavItem data={item} key={item.title}></NavItem>;
  });
  const supportElement = <NavItem data={support} />;
  return (
    <div className={classes.Header}>
      <div className={classes.HeaderList}>
        <Logo />
        <div className={classes.Navigation}>
          {navList}
          <div className={classes.NavHoverOpen}></div>
          {/* <div className={classes.Backdrop}></div> */}
        </div>
      </div>
      <div className={classes.HeaderList}>
        <div className={classes.Navigation}>
          {supportElement}
          <div className={classes.NavHoverOpen}></div>
          {/* <div className={classes.Backdrop}></div> */}
        </div>

        <div className={classes.Search}>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
