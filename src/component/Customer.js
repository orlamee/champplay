import React from "react";
import customerone from "../img/customer-1.png";
import customertwo from "../img/customer-2.png";
function Customer() {
  return(
    <div className="row mt-5">
      <div className="col-sm-6" data-aos="slide-right" data-aos-duration="1000">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5 col-12">
              <img
                src={customerone}
                alt="Champplay"
                className="img-fluid customer-image"
              />
            </div>
            <div className="col-md-7 col-12">
              <div className="card-body">
                <small className="text-secondary fw-bold mb-3">May 8, 2020</small>
                <h3 className="card-title text-secondary fw-bold fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6" data-aos="slide-left" data-aos-duration="1000">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5 col-12">
              <img
                src={customertwo}
                alt="Champ-play"
                className="img-fluid customer-image"
              />
            </div>
            <div className="col-md-7 col-12">
              <div className="card-body">
                <small className="text-secondary fw-bold mb-3">May 8, 2020</small>
                <h3 className="card-title text-secondary fw-bold fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer;