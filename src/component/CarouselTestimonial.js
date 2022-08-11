import React from "react";
import customerone from "../img/customer-1.png";
import customertwo from "../img/customer-2.png";

function CarouselTestimonial() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="testimonials" className="carousel slide" data-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#testimonials" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#testimonials" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row mt-5">
                    <div className="col-sm-6">
                      <div className="card mb-2">
                        <div className="row g-0">
                          <div className="col-md-5 col-12">
                            <img
                              src={customerone}
                              alt="Champ-play"
                              className="img-fluid customer-image"
                            />
                          </div>
                          <div className="col-md-7 col-12">
                            <div className="card-body">
                              <small className="text-secondary fw-bold mb-3">May 8, 2022</small>
                              <h3 className="card-title text-secondary fw-bold fs-6">Tunde</h3>
                              <p className="card-text">
                                I can’t wait to finally put my gaming skills to test and be the ultimate champ. 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
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
                              <small className="text-secondary fw-bold mb-3">May 18, 2022</small>
                              <h3 className="card-title text-secondary fw-bold fs-6">Oluchi</h3>
                              <p className="card-text">
                               I love to play games and now I can earn money from doing just that. This is going to be exciting.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row mt-5">
                    <div className="col-sm-6">
                      <div className="card mb-2">
                        <div className="row g-0">
                          <div className="col-md-5 col-12">
                            <img
                              src={customerone}
                              alt="Champ-play"
                              className="img-fluid customer-image"
                            />
                          </div>
                          <div className="col-md-7 col-12">
                            <div className="card-body">
                              <small className="text-secondary fw-bold mb-3">May 8, 2022</small>
                              <h3 className="card-title text-secondary fw-bold fs-6">Haruna</h3>
                              <p className="card-text">
                                Playing games and earning money will be a good way to cope with Lagos traffic. 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
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
                              <small className="text-secondary fw-bold mb-3">June 8, 2022</small>
                              <h3 className="card-title text-secondary fw-bold fs-6">Mike</h3>
                              <p className="card-text">
                              I cant wait to pair with all my friends on the app and beat them one after the other. Let us put our money where our mouth is. 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarouselTestimonial;