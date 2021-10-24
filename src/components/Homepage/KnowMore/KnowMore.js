import React from "react";
import classes from "./KnowMore.module.css";
import data from "../../../data/KnowMore";
import Banner from "./Banner.js/Banner";

function KnowMore() {
  return (
    <div className={classes.KnowMore}>
      <Banner data={data[0]} />
      <Banner data={data[1]} />
      <Banner data={data[2]} />
      <Banner data={data[3]} />

    </div>
  );
}

export default KnowMore;
