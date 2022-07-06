import React from "react";
import AboutTop from "./component/AboutTop";
import Footer from "./component/Footer";
import HeaderPrimary from "./component/HeaderPrimary";

function About() {
  return (
    <div className="App-about">
      <HeaderPrimary/>
      <AboutTop/>
      <Footer/>
    </div>
    
  )
}

export default About;