import React from "react";

import classes from "./AdditionValues.module.css";
import ed from "../../../assets/images/promo/fast-delivery.png";
import fi from "../../../assets/images/promo/easy-installation.png";
import cd from "../../../assets/images/promo/cash-on-delivery.png";
import ma from "../../../assets/images/promo/maintenance.png";
import sf from "../../../assets/images/promo/water-filter.png";
import yw from "../../../assets/images/promo/warranty.png";

function AdditionValues() {
    return (
        <section className={classes.AdditionValues}>
            <p className={classes.OnlyRein}>Only REIN gives you</p>
            <div>
                <div className={classes.AddedValuesRow}>
                    <div className={classes.AddedValues}>
                        <img src={ed} alt="" />
                        <p>Free Express Delivery</p>
                    </div>
                    <div className={classes.AddedValues}>
                        <img src={fi} alt="" />
                        <p>Free Installation</p>
                    </div>
                    <div className={classes.AddedValues}>
                        <img src={cd} alt="" />
                        <p>Free Cash on Delivery</p>
                    </div>
                </div>
                <div className={classes.AddedValuesRow}>
                    <div className={classes.AddedValues}>
                        <img src={ma} alt="" />
                        <p>1 Year Free Maintenance</p>
                    </div>
                    <div className={classes.AddedValues}>
                        <img src={sf} alt="" />
                        <p>2 Free Sediment Filter</p>
                    </div>
                    <div className={classes.AddedValues}>
                        <img src={yw} alt="" />
                        <p>1 Year Warranty</p>
                    </div>
                </div>
            </div>
        </section>);
}

export default AdditionValues;
