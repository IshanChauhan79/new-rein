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
        console.log(res.data);
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

  console.log(params);
  if (loading) {
    return <div className={classes.Product}>Loading</div>;
  } else if (error) {
    return (
      <div className={classes.Product}>product not found/error occured</div>
    );
  }
  const { features } = product;
  const { half, full } = features;
  return (
    <>
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
        <Specifications />
      </div>
      <SearchProduct />


    </>
  );
}

export default Product;
