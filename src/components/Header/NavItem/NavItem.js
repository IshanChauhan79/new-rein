import React, { useState } from "react";

import classes from "./NavItem.module.css";
import ProductDetails from "./ProductDetails";
import SideImage from "./SideImage";

function NavItem(props) {
  const [isShow, setIsShow] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

  const mouseEnter = (e) => {
    setDelayHandler(
      setTimeout(() => {
        setIsShow(true);
      }, 300)
    );
  };
  const mouseLeave = (e) => {
    clearTimeout(delayHandler);
    setIsShow(false);
  };
  return (
    <div
      className={classes.Nav}
      onMouseLeave={(e) => mouseLeave(e)}
      onMouseEnter={(e) => mouseEnter(e)}
    >
      <div className={classes.NavItem}>
        <div>{props.data.title}</div>
        {isShow && (
          <div className={classes.NavSlideDown}>
            <ProductDetails data={props.data} />
            <SideImage type={props.data.title} />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavItem;
