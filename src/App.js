import React from "react";
import TopProducts from "./components/TopProducts/TopProducts";
import TopSlider from "./components/TopSlider/TopSlider";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import img from "./assets/images/nav/1.png";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <TopSlider />
      <TopProducts />
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
