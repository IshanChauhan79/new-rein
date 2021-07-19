import React from "react";
import classes from "./TopProducts.module.css";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import dispenser from "../../assets/images/products/commercial.png";
import undersink from "../../assets/images/products/undersink.png";
import softener from "../../assets/images/products/softener.png";
import plant from "../../assets/images/products/plant.png";
import storm from "../../assets/images/products/storm.png";




function TopProducts(props) {
  return (
    <div className={classes.TopProducts}>
      <div className={classes.Title}>Featured Product</div>
      <div className={classes.FeaturedProductsContainer}>
        <div className={classes.MainProduct}>
          <FeaturedProduct
            img={dispenser}
            title="UNDERSINK"
            desc="Starting at Rs.10,499* | Free Maintenance 1 Year | EMI available"
            cat="NEW"
            catColor="blue"
            big
          />
        </div>
        <div className={classes.SubProductsList}>
          <div className={classes.SubProductsRow}>
            <FeaturedProduct
              img={undersink}
              title="UNDERSINK"
              desc="Starting at Rs.10,499* | Free Maintenance 1 Year | EMI available"
              cat="BEST SELLER"
              catColor="yellow"
            />
            <FeaturedProduct
              img={storm}
              title="STORM"
              desc="Starting at Rs.8,499* | Free Maintenance 1 Year | EMI available"
              cat="HOT"
              catColor="red"
            />
          </div>
          <div className={classes.SubProductsRow}>
            <FeaturedProduct
              img={softener}
              title="SOFTNER"
              desc="Starting at Rs.8,499* | Free Maintenance 1 Year | EMI available"
              cat="HOT"
              catColor="red"
            />
            <FeaturedProduct
              img={plant}
              title="MINI RO PLANT"
              desc="Starting at Rs.8,499* | Free Maintenance 1 Year | EMI available"
              cat="NEW"
              catColor="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
