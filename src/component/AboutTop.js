import React from "react";
import One from "../img/aboutone.png";
import Two from "../img/abouttwo.png";
import bg from "../img/about-bg.png";
import four from "../img/one.png";
import five from "../img/two.png";
import six from "../img/three.png";
// import footerbg from "../img/footer-about"
function AboutTop() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-2 text-right">
            <img src={One} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 text-center px-5">
            <h6 className="text-secondary about-text">Champs Play is a mobile hub for classic and contemporary games that gives you the best experience by ensuring you have access to play these games from the comfort of their phones or computers.</h6>
          </div>
          <div className="col-md-2 text-left">
            <img src={Two} alt="img-fluid" />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-12">
            <img src={bg} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center pt-5 px-4">
          <div className="col-md-4 text-right">
            <img src={four} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-6 mt-5">
            <h6 className="text-secondary about-text">The world is fast evolving and we are digitizing all the games you love,
              ensuring you have access to them always while earning income from playing. (That's one stone killing two bird). 
            </h6>
          </div>
        </div>
        <div className="row justify-content-center pt-5 px-4">
          <div className="col-md-6 mt-5">
            <h6 className="text-secondary about-text">The games are structured in a way to help users relax, sharpen the competitiveness as you would have access to several playing partners and winners will be crowned “Champ” from playing tournament.
            </h6>
          </div>
          <div className="col-md-4 text-left">
            <img src={five} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center pt-5 px-4">
          <div className="col-md-4 text-right">
            <img src={six} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 mt-5">
            <h6 className="text-secondary about-text">
              We also offer a game publishing platform for game developers to publish their games and give their games the publicity that it deserves to soar.
            </h6>
            <h6 className="text-secondary about-text pt-2">At Champ play, we would be bringing out the champion in you.</h6>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bg">
        {/* <div className="row"></div> */}
      </div>
    </section>
  )
}

export default AboutTop;