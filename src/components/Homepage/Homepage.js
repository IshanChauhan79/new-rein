import React from "react";

// import classes from "./HomePage.module.css";
import TopSlider from "./TopSlider/TopSlider";
import TopProducts from "./TopProducts/TopProducts";
import KnowMore from "./KnowMore/KnowMore";
import Search from "./Search/Search";

function HomePage() {
    
  console.log("Homepage");
  return (
    <div >
      <TopSlider />
      <TopProducts />
      <KnowMore />
      <Search />
    </div>
  );
}

export default HomePage;
