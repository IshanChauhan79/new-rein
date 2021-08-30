import React from "react";
import { useParams } from "react-router";
import products from "../../data/products";

import classes from "./ProductsPage.module.css";

function ProductsPage() {
  const productName = useParams();
  console.log(productName.name)
  return <div className={classes.ProductsPage}>hello</div>;
}

export default ProductsPage;
