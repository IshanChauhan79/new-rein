import React from "react";
import classes from "./KnowMore.module.css";
import data from "../../data/KnowMore";
import Banner from "./Banner.js/Banner";

function KnowMore() {
  const datain=data[0];
  return (
    <div className={classes.KnowMore}>
      <Banner data={datain} />
      <Banner data={data[1]} />
      <Banner data={data[2]} />
      <Banner data={data[3]} />

    </div>
  );
}

export default KnowMore;
// style={{ backgroundImage: `url(${data[0].img1})` }}




// <div className={classes.KnowMore}>
//       <div className={classes.KnowContainer}>
//         <div
//           style={{
//             backgroundImage: `url(${data[0].img1})`,
//             margin: "30px 10px",
//           }}
//         >
//           <div className={classes.Title}>
//             Innovative Versatile Design that stays Hidden in your Kitchen
//           </div>
//           <div className={classes.Underline}></div>
//           <div className={classes.SubImage} ><img src={image} width="100%" alt=""></img></div>
//           <div className={classes.KnowButton}>Know More</div>
//           <div className={classes.Warrenty}>
//             *Free Installation | Free Maintenance | 1 Year Warranty*
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundImage: `url(${data[0].img1})`,
//             margin: "30px 10px",
//           }}
//         >
//           <div className={classes.Title}>
//             Innovative Versatile Design that stays Hidden in your Kitchen
//           </div>
//           <div className={classes.Underline}></div>
//           <div className={classes.KnowButton}>Know More</div>
//           <div className={classes.Warrenty}>
//             *Free Installation | Free Maintenance | 1 Year Warranty*
//           </div>
//         </div>
//       </div>
//       <div className={classes.KnowContainer}>
//         <div
//           style={{
//             backgroundImage: `url(${data[0].img1})`,
//           }}
//         >
//           <div className={classes.Title}>
//             Innovative Versatile Design that stays Hidden in your Kitchen
//           </div>
//           <div className={classes.Underline}></div>
//           <div className={classes.KnowButton}>Know More</div>
//           <div className={classes.Warrenty}>
//             *Free Installation | Free Maintenance | 1 Year Warranty*
//           </div>
//         </div>
//         <div style={{ backgroundColor: "blue" }}></div>
//       </div>
//       <div className={classes.KnowContainer}>
//         <div
//           style={{
//             backgroundImage: `url(${data[0].img1})`,
//           }}
//         >
//           <div className={classes.Title}>
//             Innovative Versatile Design that stays Hidden in your Kitchen
//           </div>
//           <div className={classes.Underline}></div>
//           <div className={classes.KnowButton}>Know More</div>
//           <div className={classes.Warrenty}>
//             *Free Installation | Free Maintenance | 1 Year Warranty*
//           </div>
//         </div>
//         <div style={{ backgroundColor: "blue" }}></div>
//       </div>
//       <div className={classes.KnowContainer}>
//         <div
//           style={{
//             backgroundImage: `url(${data[0].img1})`,
//           }}
//         >
//           <div className={classes.Title}>
//             Innovative Versatile Design that stays Hidden in your Kitchen
//           </div>
//           <div className={classes.Underline}></div>
//           <div className={classes.KnowButton}>Know More</div>
//           <div className={classes.Warrenty}>
//             *Free Installation | Free Maintenance | 1 Year Warranty*
//           </div>
//         </div>
//         <div style={{ backgroundColor: "blue" }}></div>
//       </div>
//     </div>