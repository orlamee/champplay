import React from "react";
import CarouselTestimonial from "./component/CarouselTestimonial";
// import Customer from "./component/Customer";

function Testimonial() {
  return(
    <div className="container-fluid testimonial-section" data-aos="slide-left" data-aos-duration="1000">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-12 text-center">
            <h1 className="text-secondary fw-bold fs-2">Hear From Our Customers</h1>
          </div>
          {/* <Customer/> */}
          <CarouselTestimonial/>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;