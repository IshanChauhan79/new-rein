import React from "react";

import classes from "./SearchProduct.module.css";
import down from "../../../assets/images/arrowDown.png";

function SearchProduct() {
  return (
    <div className={classes.SearchProduct}>
      <div className={classes.FindBox}>
        <h6 className={classes.QuickSearch}>Quick Search</h6>
        <h2 className={classes.FindTitle}>Lets find your water purifiers</h2>
      </div>
      <div className={classes.SearchForm}>
        <div className={classes.FormElement}>
          <span>For use in</span>
          <img src={down} alt=""></img>
        </div>
        <div className={classes.FormRow}>
          <div className={classes.FormElement}>
            <span>Placement</span>
            <img src={down} alt=""></img>
          </div>
          <div className={classes.FormElement}>
            <span>TDS</span>
            <img src={down} alt=""></img>
          </div>
        </div>
        <div className={classes.FormRow}>
          <div className={classes.FormElement}>
            <span>Number of People</span>
            <img src={down} alt=""></img>
          </div>
          <div className={classes.FormElement}>
            <span>pH AlKaline</span>
            <img src={down} alt=""></img>
          </div>
        </div>
        <div className={classes.FormRow}>
          <div className={classes.FillForm}>Fill a Form</div>
          <div className={classes.Find}>Find</div>
        </div>
      </div>
    </div>
  );
}

export default SearchProduct;
