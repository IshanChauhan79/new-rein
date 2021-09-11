import React from "react";
import { useParams } from "react-router";
import products from "../../data/products";

import ro1 from "../../assets/images/nav/1.jpg";

import classes from "./ProductsPage.module.css";
import heart from "../../assets/images/heart.png";
function ProductsPage() {
  const productName = useParams();
  // console.log(productName.name);
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
  var details = [];
  for (var i of products) {
    if (productName.name === i.route) {
      details = i.product;
    }
  }
  // console.log(details);

  const productElements = details.map((el) => {
    return (
      <div className={classes.Products} key={el.name}>
        <div
          className={classes.BgImage}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Imgs/img${1}.png)`,
          }}
        ></div>
        {/* <img
          src={`${process.env.PUBLIC_URL}/Imgs/img${1}.png`}
          className={classes.Image}
          alt=""
        /> */}

        <div className={classes.ProductContainer}>
          <div className={classes.CatBig} style={{ backgroundColor: catColor }}>
            NEW
          </div>
          <div className={classes.Heart}>
            <img src={heart} alt=""></img>
          </div>
          <div className={classes.ProductImg}>
            <img src={ro1} alt=""></img>
          </div>
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
              {el.types.map((type) => (
                <div key={type}>{type}</div>
              ))}
            </div>
          </div>
          <div className={classes.Desc}>
            Innovative Versatile Design water purifiers can be placed under the
            counter of the kitchen
          </div>
          <ul className={classes.Notes}>
            {el.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className={classes.LearnMore}>Learn More</div>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.ProductsPage}>
      <div className={classes.DisplayProducts}>hello</div>
      {productElements}
    </div>
  );
}

export default ProductsPage;

{
  /* <div
          className={classes.BgImage}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Imgs/img${1}.png)`,
          }}
        ></div> */
}
{
  /* <img src={process.env.PUBLIC_URL + `/Imgs/img${1}.png`} alt="" /> */
}
