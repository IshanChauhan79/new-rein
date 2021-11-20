import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Promotion from "./Promotion";

function PromoPage() {
  const [menu, setMenu] = useState(false);

  const setmenuValue= (el) => {
      if(el){
          setMenu(el);
      }else{
          setMenu(false);
      }
  }

  return [
    <Header key="header" />,
    <Promotion key="Promotion" getNow={setmenuValue}  />,
    <Footer key="Footer" menu={menu} setMenu={setmenuValue} />,
  ];
}

export default PromoPage;
