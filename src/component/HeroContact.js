import React from "react";
import Form from "./Form";
// import bg from "../img/contact-bg.png"

function HeroContact() {
  return (
    <div className="container-fluid contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-contact" data-aos="slide-right" data-aos-duration="1000">
            <h2 className="text-white banner-title">Any Questions?<br/>We are glad<br/>to help</h2>
          </div>
          <div className="col-md-6">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContact;