import React from "react";

import classes from "./KeyFeatures.module.css";

const KeyFeatures = (props) => {
  const { full, half } = props;
  const halfdiv = [];
  for (let i = 0; i < half.length; i = i + 2) {
    halfdiv.push(
      <div className={classes.FeatureDiv} key={i}>
        <div className={classes.FeatureDesc}>
          <h2>{half[i].title}</h2>
          <div className={classes.HalfData}>
            <p>{half[i].desc}</p>
            <img src={half[i].img} alt="" height="100px"></img>
          </div>
        </div>
        <div className={classes.FeatureDesc}>
          <h2>{half[i + 1].title}</h2>
          <div className={classes.HalfData}>
            <p>{half[i + 1].desc}</p>
            <img src={half[i + 1].img} alt="" height="100px"></img>
          </div>

        </div>
      </div>
    )
  }
  
  return (
    <div className={classes.KeyFeatures}>
      <div className={classes.Title}>
      Key Features
      </div>
      {full.map((pd, i) => {
        if (i % 2 === 0) {
          return (
            <div className={classes.FeatureDiv} key={pd.title}>
              <div className={classes.FeatureDesc}>
                <h2>{pd.title}</h2>
                <p>{pd.desc}</p>
              </div>
              <div className={classes.FeatureImg}>
                <img src={pd.img} alt="" />
              </div>
              <div></div>
            </div>

          )
        };
        return (
          <div className={classes.FeatureDiv} key={pd.title}>
            <div className={classes.FeatureImg}>
              <img src={pd.img} alt="" />
            </div>
            <div className={classes.FeatureDesc}>
              <h2>{pd.title}</h2>
              <p>{pd.desc}</p>
            </div>
          </div>
        )
      })}
      {halfdiv}
    </div>

  )
};

export default KeyFeatures;