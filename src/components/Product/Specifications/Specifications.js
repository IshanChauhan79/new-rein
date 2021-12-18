import React from "react";

import classes from "./Specifications.module.css";

function Specifications() {
  return (
    <section className={classes.Specifications}>
      <div className={classes.Title}>
        Specifications
      </div>
      <div>
        <div className={classes.SpecsRow}>
          <div>
            <p className={classes.SpecsTitle}>
              Application
            </p>
            <p className={classes.SpecsDetail}>
              sdadadada
            </p>
          </div>
          <div>
            <p className={classes.SpecsTitle}>
              Application
            </p>
            <p className={classes.SpecsDetail}>
              sdadadada
            </p>
          </div>
        </div>
        <div className={classes.SpecsRow}>
          <div>
            <p className={classes.SpecsTitle}>
              Application
            </p>
            <p className={classes.SpecsDetail}>
              sdadadada
            </p>
          </div>
          <div>
            <p className={classes.SpecsTitle}>
              Application
            </p>
            <p className={classes.SpecsDetail}>
              sdadadada
            </p>
          </div>
        </div>
        <div className={classes.SpecsRow}>
          <div>
            <p className={classes.SpecsTitle}>
              Application
            </p>
            <p className={classes.SpecsDetail}>
              sdadadada
            </p>
          </div>
          <div>
            <p className={classes.SpecsTitle}>
              Application
            </p>
            <p className={classes.SpecsDetail}>
              sdadadada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specifications;