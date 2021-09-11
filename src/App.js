import React from "react";
import { Switch, Route } from "react-router-dom";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import HomePage from "./components/Homepage/Homepage";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products/:name" exact>
          {/* <TopSlider /> */}
          <ProductsPage />
        </Route>
        <Route path="/">
          <div className={classes.NotFound}>404 Page not Found</div>
        </Route>
      </Switch>

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
