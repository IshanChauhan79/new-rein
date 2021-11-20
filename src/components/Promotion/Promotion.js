import React from "react";

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

function Promotion(props) {
  return (
    <main className={classes.Promotion}>
      <section>
        <img src={main} alt="" width="100%" style={{ display: "block" }} />
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
      <section className={classes.RequestContainer}>
        <div className={classes.Request}>
          <p className={classes.RequestTitle}>Request a Call Back</p>
          <p className={classes.RequestTandC}>
            By Providing my number, I agree that REIN can contact me via
            phone/e-mail/SMS/WhatApp and/or pre-recorded messages using the
            number provided
          </p>
        </div>
      </section>
      <CustomerSlider />
      <section style={{ position: "relative" }}>
        <a
          className={classes.WhatsappButton}
          href="https://wa.me/message/IWR4R4FPG2WVH1"
          target="_blank"
          rel="noreferrer"
        >.</a>
        <img src={whatsapp} alt="" width="100%" style={{ display: "block" }} />
      </section>
      {/* <Form /> */}
      <section className={classes.Contact}>
        <h4 className={classes.ContactTitle}>Feel Free to contact us at</h4>
        <a className={classes.Email} href="mailto: team@reinpurifiers.co.in">
          team@reinpurifiers.co.in
        </a>
        <Social />
        <p className={classes.TandC}>
          By using this website, you agree to our Terms of Use, Privacy Policy &
          Return Policy
        </p>
      </section>
    </main>
  );
}

export default Promotion;
