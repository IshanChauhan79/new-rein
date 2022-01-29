import React from "react";
import { useParams } from "react-router";
import products from "../../data/products";

import classes from "./ProductsPage.module.css";
import heart from "../../assets/images/heart.png";
import TopSlider from "./TopSlider/TopSlider";
import SearchProduct from "./SearchProduct/SearchProduct";
import { Link } from "react-router-dom";
function ProductsPage() {
  const productName = useParams();
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
      catColor = "blue";
  }
  var details = [];
  for (var i of products) {
    if (productName.name === i.route) {
      details = i.product;
    }
  }

  const productElements = details.map((el) => {
    return (
      <div className={classes.Products} key={el.name}>
        <div
          className={classes.BgImage}
          style={{
            backgroundImage:
              el.bimg !== ""
                ? `url(${process.env.PUBLIC_URL + el.bimg}`
                : `url(${process.env.PUBLIC_URL}/Imgs/img${1}.png`,
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
          {el.link
            ? <Link to={el.link} style={{ textDecoration: "none" }}>
              <div className={classes.ProductImg}>
                <img src={process.env.PUBLIC_URL + el.Pimg} alt="" />
              </div>
            </Link>
            : <div className={classes.ProductImg}>
              <img src={process.env.PUBLIC_URL + el.Pimg} alt="" />
            </div>
          }

          {/* <div className={classes.Color}>
            Color: blue
            <div>
              <div>
                <div style={{ backgroundColor: "blue" }}></div>
              </div>
              <div>
                <div style={{ backgroundColor: "black" }}></div>
              </div>
            </div>
          </div> */}
          <div>
            {el.link
              ? <Link to={el.link} style={{ textDecoration: "none" }}>
                <div className={classes.MobileTitle}>{el.name}</div>
              </Link>
              : <div className={classes.MobileTitle}>{el.name}</div>
            }

          </div>
          <div className={classes.Variants}>
            Variants:
            <div>
              {el.types.map((type) => (
                <div key={type}>{type}</div>
              ))}
            </div>
          </div>
          <div className={classes.Desc}>{el.sub}</div>
          <ul className={classes.Notes}>
            {el.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          {el.link
            ? <Link to={el.link} style={{ textDecoration: "none" }}>
              <div className={classes.LearnMore}>Learn More</div>
            </Link>
            : <div className={classes.LearnMore}>Learn More</div>
          }


          {/* <div className={classes.LearnMore}>Learn More</div> */}
        </div>
      </div>
    );
  });

  return (
    <main className={classes.ProductsPage}>
      <TopSlider />
      <section className={classes.ProductsListContainer}>{productElements}</section>
      <SearchProduct />
    </main>
  );
}

export default ProductsPage;

/* <div
          className={classes.BgImage}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Imgs/img${1}.png)`,
          }}
        ></div> */

/* <img src={process.env.PUBLIC_URL + `/Imgs/img${1}.png`} alt="" /> */
