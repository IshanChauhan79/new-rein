import React, { useState } from "react";
import arrow from "../../../assets/images/arrowRight.png";
import ProductList from "./ProductList.js";

import classes from "./ProductDetails.module.css";

function ProductDetails(props) {
  const types = props.data.types;
  const [showProductsList, setShowProductList] = useState(types[0].name);
  const subCategoryData =
    showProductsList && types.findIndex((el) => el.name === showProductsList);
  var ProductLists = null;
  if (showProductsList) {
    ProductLists = <ProductList subCat={types[subCategoryData].cate} />;
  }

  const mouseEnterProduct = (e, productName) => {
    setShowProductList(productName);
  };

  const ProductCategoryList = types.map((pc) => {
    return (
      <div
        key={pc.name}
        className={classes.Category}
        onMouseEnter={(e) => mouseEnterProduct(e, pc.name)}
      >
        <div
          className={classes.CategoryName}
          style={{
            color: pc.name === showProductsList ? "black" : "grey",
            fontSize: pc.name === showProductsList ? "1.8rem" : "1.7rem",
          }}
        >
          {pc.name}
        </div>
        {pc.cate.length > 0 && (
          <div
            className={classes.Arrow}
            style={{
              opacity: pc.name === showProductsList ? 1 : 0,
              color: pc.name === showProductsList ? "black" : "grey",
            }}
          >
            <img src={arrow} alt=">"></img>
          </div>
        )}
      </div>
    );
  });
  return (
    <div className={classes.ProductDetails}>
      <div className={classes.Title}>{props.data.title}</div>
      <div className={classes.ProductContainer}>
        {ProductCategoryList}
        {ProductLists}
      </div>
    </div>
  );
}

export default ProductDetails;

/* <div
          className={classes.Category}
          onMouseEnter={(e) => mouseEnterProduct(e, "Mobile")}
          // onMouseLeave={(e) => mouseLeaveProduct(e)}
        >
          <div className={classes.CategoryName}>product category</div>
          <div className={classes.Arrow}>&gt;</div>
          {ProductLists}
        </div>
        <div
          className={classes.Category}
          onMouseEnter={(e) => mouseEnterProduct(e, "RO")}
          // onMouseLeave={(e) => mouseLeaveProduct(e)}
        >
          <div className={classes.CategoryName}>product category</div>
          <div className={classes.Arrow}>&gt;</div>
          {ProductLists}
        </div>
        <div
          className={classes.Category}
          onMouseEnter={(e) => mouseEnterProduct(e, "Pc")}
          // onMouseLeave={(e) => mouseLeaveProduct(e)}
        >
          <div className={classes.CategoryName}>product category</div>
          <div className={classes.Arrow}>&gt;</div>
          {ProductLists}
        </div>
        <div className={classes.Category}>
          <div className={classes.CategoryName}>product category</div>
          <div className={classes.Arrow}>&gt;</div>
        //   {/* <div>sub category product</div> */
// </div>
// <div className={classes.Category}>
//   <div className={classes.CategoryName}>product category</div>
//   <div className={classes.Arrow}>&gt;</div>
//   {/* <div>sub category product</div> */}
// </div>
// <div className={classes.Category}>
//   <div className={classes.CategoryName}>product category</div>
//   <div className={classes.Arrow}>&gt;</div>
//   {/* <div>sub category product</div> */}
// </div>
// <div className={classes.Category}>
//   <div className={classes.CategoryName}>product category</div>
//   <div className={classes.Arrow}>&gt;</div>
//   {/* <div>sub category product</div> */}
// </div> */}
