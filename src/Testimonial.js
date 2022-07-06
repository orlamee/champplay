import React from "react";
import Customer from "./component/Customer";

function Testimonial() {
  return(
    <div className="container-fluid testimonial-section" data-aos="slide-up" data-aos-duration="1000">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="text-secondary fw-bold fs-2">Hear From Our Customers</h1>
          </div>
          <Customer/>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;