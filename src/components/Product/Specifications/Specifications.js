import React from "react";

import classes from "./Specifications.module.css";

function Specifications({ data }) {
  return (
    <section className={classes.Specifications}>
      <div className={classes.Title}>
        Specifications
      </div>
      <div>
        {data.map((el,i) => (
          <div className={classes.SpecsRow} key={i}>
            <div>
              <p className={classes.SpecsTitle}>
                {el.title1}
              </p>
              <p className={classes.SpecsDetail}>
                {el.data1}
              </p>
            </div>
            <div>
              <p className={classes.SpecsTitle}>
                {el.title2}
              </p>
              <p className={classes.SpecsDetail}>
                {el.data2}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.Treatment}>*Treatment Capacity tested for Tap Water having TDS level of 750ppm at room temperature.</div>
    </section>
  );
}

export default Specifications;