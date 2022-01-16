import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import AdditionValues from "./AdditionValues/AdditionValues";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import shareWa from '../../assets/images/promo/shareWa.jpg'
import SearchProduct from '../ProductsPage/SearchProduct/SearchProduct'

import classes from "./Product.module.css";
import Specifications from "./Specifications/Specifications";
import Header from "../Header/Header";
import Spinner from "../UI/Spinner/Spinner";

function Product() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(
        `https://rein-596c1-default-rtdb.firebaseio.com/prod/${params.id}.json`
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data !== null) {
          setProduct(res.data);
          setLoading(false);
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(false);
      });
  }, [params]);

  // console.log(Object.keys(product))

  if (loading) {
    return (
      <>
        <Header />
        <div className={classes.ProductDefault}><Spinner bgColor="#F9FAFE"/></div>
      </>
    );
  } else if (error || (Object.keys(product).length === 0)) {
    return (
      <>
        <Header />
        <div className={classes.ProductDefault}>product not found/error occured</div>
      </>

    );
  }
  const { features, headers, download, specification, nav } = product;
  const { half, full } = features;
  const { title, para,link } = download;
  return (
    <>
      <Header nav={nav} params={params} />
      <main>
        <img src={headers[0]} alt="" width='100%' style={{ marginTop: "6rem", display: 'block' }} />
        <div className={classes.Product}>
          <div className={classes.WidthNotFull}>
            <KeyFeatures half={half} full={full} />
            <AdditionValues />
          </div>
        </div>

        <div className={classes.Share}>
          <img src={shareWa} alt="" width='100%' />
        </div>

        <div className={classes.WidthNotFull}>
          <Specifications data={specification} />
        </div>
        <div className={classes.DownloadContainer}>
          <div className={classes.Download} >
            <div className={classes.DownloadImg} >
              <img src={link} alt="Download" />
            </div>
            <h1>{title}</h1>
            <p>{para}</p>
          </div>
        </div>
        <SearchProduct />
      </main>



    </>
  );
}

export default Product;
