import React from "react";
import Logo from "../../Logo/Logo";

import classes from "./Header.module.css";

function Header() {
  return <header className={classes.Header}>
      <Logo logo2  noLink/>
  </header>;
}

export default Header;
