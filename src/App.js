import React from "react";
import TopProducts from "./components/TopProducts/TopProducts";
import TopSlider from "./components/TopSlider/TopSlider";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import KnowMore from "./components/KnowMore/KnowMore";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <TopSlider />
      <TopProducts />
      <KnowMore />
      <Search />

      <div className={classes.Disclaimer}>
        *Images shown here are for representational purpose only, actual may
        vary. All features, specifications and prices are subject to change
        without prior notice. Model availability may vary from location to
        location.
      </div>
      <Footer />
      <div className={classes.Disclaimer}>
        <a
          href="https://icons8.com/icons/set/svg"
          target="_blank"
          rel="noreferrer"
        >
          Icons by Icons8
        </a>
      </div>
    </div>
  );
}

export default App;

// import React from "react";

// import classes from  "./App.module.css";

// function App() {
//   return <div className={classes.App}></div>;
// }

// export default App;
