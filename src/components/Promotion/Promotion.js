import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import classes from "./Promotion.module.css";
import whatsapp from "../../assets/images/promo/shareWa.jpg";
import main from "../../assets/images/promo/main.jpg";
import ed from "../../assets/images/promo/fast-delivery.png";
import fi from "../../assets/images/promo/easy-installation.png";
import cd from "../../assets/images/promo/cash-on-delivery.png";
import ma from "../../assets/images/promo/maintenance.png";
import sf from "../../assets/images/promo/water-filter.png";
import yw from "../../assets/images/promo/warranty.png";
import CustomerSlider from "./CustomerSlider/CustomerSlider";
import offer from "../../assets/images/offer.png";

import Social from "../UI/Social/Social";

const varients = [
  "UF+UV",
  "UF+UV+Alkaline",
  "NF",
  "NF+UV",
  "NF+UV+Alkaline",
  "NF+UV+Copper",
  "RO",
  "RO+UV",
  "RO+UV+Alkaline",
  "RO+UV+Copper",
];
const formType = ["Call Request", "Buy Now"];

function Promotion(props) {
  const [formSubmit, setFormSubmit] = useState(false);
  const [checked, setChecked] = useState(true);
  const [isError, setIsError] = useState(false);
  const number = useRef();

  const requestCallSubmit = (e) => {
    e.preventDefault();
    let num = number.current.value;
    if (num.toString().length === 10) {
      axios
        .post("https://rein-596c1-default-rtdb.firebaseio.com/promo.json", {
          title: "UnderSink",
          number: num,
          type: formType[0],
          data: new Date(),
        })
        .then((response) => {
          setFormSubmit(true);
          number.current.value = "";
          setIsError(false);
        })
        .catch((err) => {
          console.log(err);
          setIsError("Some Error occurred");
        });
    } else {
      setIsError("Enter a valid Number");
    }
  };
  return (
    <main className={classes.Promotion}>
      <div className={classes.TopContent}>
        <section>
          <img
            className={classes.TopImage}
            src={main}
            alt=""
            width="100%"
            style={{ display: "block" }}
          />
        </section>
        <section className={classes.ProductOffers}>
          <h3 className={classes.VariantTitle}>
            Multiple Variants Starting from ₹10,499/- Only
          </h3>
          <div className={classes.Variants}>
            {varients.map((v, i) => (
              <div key={i}>{v}</div>
            ))}
          </div>
          <p className={classes.EveryWater}>For every quality of water</p>
          <div className={classes.Offer}>
            <img
              src={offer}
              onClick={() => props.getNow("sub")}
              width="100%"
              alt="offer available"
            />
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
          </div>
        </section>
      </div>

      <section className={classes.RequestContainer}>
        <div className={classes.Request}>
          <p className={classes.RequestTitle}>Request a Call Back</p>
          <form onSubmit={requestCallSubmit}>
            <div style={{ position: "relative" }}>
              {isError ? (
                <div className={classes.ErrorMessage}>Enter a valid Number</div>
              ) : null}

              <input
                className={classes.RequestNumberInput}
                style={{
                  borderTop: isError ? "1px solid red " : "0px",
                  borderLeft: isError ? "1px solid red " : "0px",
                  borderRight: isError ? "1px solid red " : "0px",
                  borderBottom: isError
                    ? "1px solid red "
                    : "1px solid #707070 ",
                }}
                type="number"
                min="0"
                ref={number}
                placeholder="Phone Number"
                required
              ></input>
              <button type="submit" className={classes.RequestSubmit}>
                Request
              </button>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <input
                type="checkbox"
                id="RTC"
                name="RTC"
                style={{ height: "10px" }}
                checked={checked}
                onChange={() => {
                  setChecked((prev) => !prev);
                }}
                required
              />
              <label htmlFor="RTC" className={classes.RequestTandC}>
                By Providing my number, I agree that REIN can contact me via
                phone/e-mail/SMS/WhatApp and/or pre-recorded messages using the
                number provided
              </label>
            </div>
            {/* <br /> */}
          </form>
        </div>
      </section>
      <CustomerSlider />
      <div className={classes.BottomContent}>
        <section style={{ position: "relative" }}>
          <a
            className={classes.WhatsappButton}
            href="https://wa.me/message/IWR4R4FPG2WVH1"
            target="_blank"
            rel="noreferrer"
          >
            .
          </a>
          <img
            src={whatsapp}
            alt=""
            width="100%"
            style={{ display: "block" }}
            className={classes.whatsappImg}
          />
        </section>
        <section className={classes.Contact}>
          <h4 className={classes.ContactTitle}>Feel Free to contact us at</h4>
          <a className={classes.Email} href="mailto: team@reinpurifiers.co.in">
            team@reinpurifiers.co.in
          </a>
          <Social JustifyContent="center" />
          <p className={classes.TandC}>
            By using this website, you agree to our Terms of Use, Privacy Policy
            & Return Policy
          </p>
        </section>
      </div>
    </main>
  );
}

export default Promotion;
