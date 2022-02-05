import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import classes from "./App.module.css";
import BuyNow from "./components/BuyNow/BuyNow";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Float from "./components/UI/Float/Float";
import ScrollToTop from "./utility/ScrollToTop";
import Spinner from "./components/UI/Spinner/Spinner";

const Footer = lazy(() => import("./components/Footer/Footer"));
const ProductsPage = lazy(() =>
  import("./components/ProductsPage/ProductsPage")
);
const HomePage = lazy(() => import("./components/Homepage/Homepage"));
const PromoPage = lazy(() => import("./components/Promotion/PromoPage"));
const Privacy = lazy(() => import('./components/Privacy/Privacy'));
const TandC = lazy(() => import('./components/Privacy/TandC'));

function App() {
  return (
    <div className={classes.App}>
      <ScrollToTop />
      <Switch>
        <Route path="/promo" exact>
          <Suspense fallback={<Spinner />}>
            <PromoPage />
          </Suspense>
        </Route>
        <Route path="/buynow/:pd" exact>
          <Header />
          <Suspense fallback={<Spinner />}>
            <BuyNow />
          </Suspense>
        </Route>
        <Route path='/privacy-policy'>
          <Header />
          <Suspense fallback={<Spinner />}><Privacy /></Suspense>
        </Route>
        <Route path='/terms-and-condition'>
          <Header />
          <Suspense fallback={<Spinner />}><TandC /></Suspense>
        </Route>
        <Route path="/">
          <Switch>
            <Route path="/" exact>
              <Header />
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            </Route>
            <Route path="/products/:name" exact>
              <Header />
              <Suspense fallback={<Spinner />}>
                <ProductsPage />
              </Suspense>
            </Route>
            <Route path="/product/:id" exact >
              <Product />
            </Route>
            <Route path="/">
              <Header />
              <div className={classes.NotFound}>404 Page not Found</div>
            </Route>
          </Switch>
          <div className={classes.Disclaimer}>
            *Images shown here are for representational purpose only, actual may
            vary. All features, specifications and prices are subject to change
            without prior notice. Model availability may vary from location to
            location.
          </div>
          <Suspense fallback={<Spinner />}>
            <Footer />
          </Suspense>

          <div className={classes.Disclaimer}>
            <a
              href="https://icons8.com/icons/set/svg"
              target="_blank"
              rel="noreferrer"
            >
              Icons by Icons8
            </a>
          </div>
          <Float />
        </Route>
      </Switch>
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
