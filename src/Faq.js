import React from "react";
import FaqContent from "./component/FaqContent";
import Footer from "./component/Footer";
import HeaderPrimary from "./component/HeaderPrimary";

function Faq() {
  return (
    <div className="App-faq">
      <HeaderPrimary/>
      <FaqContent/>
      <Footer/>
    </div>
  )
}

export default Faq;