import React, { useState, useRef } from "react";

import classes from "./DropDown.module.css";
import animation from "./animation.module.css";

import { CSSTransition } from "react-transition-group";
import arrowDown from "../../../assets/images/arrowDown.png";

function DropDown(props) {
  const [menuOpen, setMenuOpen] = useState(null);
  const [menu, setMenu] = useState(null);
  const nodeRef = useRef(null);
  const [dropHeight, setDropHeight] = useState(0);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setDropHeight(height);
  };

  const menuclicked = (pd) => {
    if (pd === menuOpen) {
      setMenuOpen(null);
    } else {
      setMenuOpen(pd);
      setMenu(props.data[pd].cate.map((el) => <div key={el}>{el}</div>));
    }
  };

  let dropDownList = props.data.map((pd, i) => (
    <div className={classes.Menu} key={pd.name}>
      <div
        className={classes.MenuName}

        style={{ fontFamily: i === menuOpen ? "amiko-bold" : "amiko-font" }}
      >
        {pd.link
          ? <div onClick={() => props.openPage(pd.link,true)}>{pd.name}</div>
          : <div>{pd.name}</div>
        }

        <img
          src={arrowDown}
          alt=">"
          height="12px"
          onClick={() => menuclicked(i)}
          style={{
            transform: i === menuOpen ? "rotateX(180deg)" : "rotateX(0deg)",
          }}
        ></img>
      </div>
      <div
        className={classes.Drop}
        style={{ height: i === menuOpen ? dropHeight : "0px" }}
      >
        <CSSTransition
          in={i === menuOpen}
          // nodeRef={nodeRef}
          onEnter={calcHeight}
          mountOnEnter
          unmountOnExit
          timeout={500}
          classNames={animation}
        >
          <div className={classes.DropMenu} ref={nodeRef}>
            {menu}
          </div>
        </CSSTransition>
      </div>
    </div>
  ));
  return <div className={classes.DropDown}>{dropDownList}</div>;
}

export default DropDown;
//
