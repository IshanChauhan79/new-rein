import React from "react";

import classes from "./Footer.module.css";
import data from "../../data/Footer";
import DropDown from "../UI/DropDown/DropDown";
import Social from "../UI/Social/Social";

function Footer() {
  // console.log(data);
  
  console.log("Footer");
  const footerTable = data.map((el, i) => {
    const listItem = el.cate.map((li) => (
      <div className={classes.FooterItem} key={li}>
        {li}
      </div>
    ));
    return (
      <div
        key={el.name}
        style={{
          borderRight: i + 1 === data.length ? "0px" : "2px solid lightgray",
        }}
      >
        <div className={classes.Title}>{el.name}</div>
        {listItem}
      </div>
    );
  });
  return (
    <div className={classes.Footer}>
      <div className={classes.Topbar}>
        <div className={classes.FooterTable}>{footerTable}</div>
      </div>

      <div className={classes.DropDown}>
        <DropDown data={data} />
      </div>
      <div className={classes.SocialBox}>
        <Social />
      </div>
    </div>
  );
}

export default Footer;
