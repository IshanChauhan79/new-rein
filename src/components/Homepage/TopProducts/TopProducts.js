import React from "react";
import classes from "./TopProducts.module.css";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import dispenser from "../../../assets/images/products/commercial.jpg";
import undersink from "../../../assets/images/products/undersink.jpg";
import softener from "../../../assets/images/products/softener.jpg";
import plant from "../../../assets/images/products/plant.jpg";
import storm from "../../../assets/images/products/storm.jpg";

function TopProducts() {
  return (
    <div className={classes.TopProducts}>
      <div className={classes.Title}>Featured Product</div>
      <div className={classes.FeaturedProductsContainer}>
        <div className={classes.MainProduct}>
          <FeaturedProduct
            img={dispenser}
            title="RO Water Table Dispenser"
            desc="Starting at Rs.24,499* | Free Maintenance 1 Year | EMI available"
            cat="NEW"
            catColor="blue"
            route="/products/water-purifiers"
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
              route="/products/water-purifiers"
            />
            <FeaturedProduct
              img={storm}
              title="STORM"
              desc="Starting at Rs.8,499* | Free Maintenance 1 Year | EMI available"
              cat="HOT"
              catColor="red"
              route="/products/water-purifiers"
            />
          </div>
          <div className={classes.SubProductsRow}>
            <FeaturedProduct
              img={softener}
              title="SOFTENER"
              desc="Starting at Rs.8,499* | Free Maintenance 1 Year | EMI available"
              cat="HOT"
              catColor="red"
              route="/products/water-softener"
            />
            <FeaturedProduct
              img={plant}
              title="MINI RO PLANT"
              desc="Starting at Rs.8,499* | Free Maintenance 1 Year | EMI available"
              cat="NEW"
              catColor="blue"
              route="/products/water-purifiers"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TopProducts);
