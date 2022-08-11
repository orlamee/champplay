/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import bg from "../img/image-bg.png"

function Hero() {
  return (
    <div className="container-fluid banner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-wrapper" data-aos="slide-right" data-aos-duration="1000">
            <h2 className="text-white banner-title">Earn Real Money<br/>While Having Fun</h2>
            <h6 className="text-white pt-2 mb-5 banner-text">Select your best games, relax and earn real money value while you play.</h6>
            <div className="d-grid gap-2 d-md-block">
              <a className='btn btn-primary px-2 bg-white text-primary border-0 me-1'>Coming Soon on (IOS)</a>
              <a className='btn btn-primary px-2 bg-white text-primary border-0'>Coming Soon on (ANDRIOD)</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src={bg} alt="champ-play" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;