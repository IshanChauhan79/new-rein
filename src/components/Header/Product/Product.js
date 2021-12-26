import React from "react";

import classes from "./Product.module.css";

function Product({data}) {
    return (
        <div className={classes.Product}>
            <div className={classes.TitleRow}>
                <h2 className={classes.Title}>
                    {data.title}
                </h2>
                <div className={classes.ButtonDiv}>
                    <button className={classes.VarientButton}>VARIANTS</button>
                    <button className={classes.BuyButton}>BUY NOW</button>
                </div>

            </div>
            <div className={classes.CategoryRow}>

            </div>
        </div>
    );
}

export default Product;
