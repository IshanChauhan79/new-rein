import React from "react";
import { useParams } from "react-router";
import products from "../../data/products";

import classes from "./ProductsPage.module.css";
import heart from "../../assets/images/heart.png";
function ProductsPage() {
  const productName = useParams();
  console.log(productName.name);
  let catColor = "blue";
  switch (catColor) {
    case "yellow":
      catColor = "#ffaa4e";
      break;
    case "blue":
      catColor = "#2189ff";
      break;
    case "red":
      catColor = "#ef3434";
      break;
    default:
      catColor = catColor;
  }
  return (
    <div>
      <div className={classes.ProductsPage}>hello</div>
      <div className={classes.Products}>
        <div
          className={classes.BgImage}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Imgs/img${1}.png)`,
          }}
        >
          {""}
        </div>
        {/* <img src={process.env.PUBLIC_URL + `/Imgs/img${1}.png`} alt="" /> */}
        <div className={classes.ProductContainer}>
          <div className={classes.CatBig} style={{ backgroundColor: catColor }}>
            NEw
          </div>
          <div className={classes.Heart}>
            <img src={heart} alt=""></img>
          </div>
          <div>hello</div>
          <div className={classes.Color}>
            Color: blue
            <div>
              <div>
                <div style={{ backgroundColor: "blue" }}></div>
              </div>
              <div>
                <div style={{ backgroundColor: "red" }}></div>
              </div>
            </div>
          </div>
          <div className={classes.Variants}>
            Variants:
            <div>
              <div> UV+RO</div>
              <div>UV+RO+UF</div>
              <div>UV+RO+UF</div>
              <div>UV+RO+UF</div>
              <div>UV+RO+UF</div>
              <div>UV+RO+UF</div>
              <div>UV+RO+UF</div>
              <div>UV+RO+UF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
