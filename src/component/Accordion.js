import React from "react";

function Accordion() {
  return (
    <div className="accordion mt-5" id="accordionExample">
      <div className="card-accordion">
        <div className="card-header" id="headingOne">
          <h2 className="clearfix mb-0">
            <a className="btn btn-link text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How do I get started? <i className="material-icons">add</i></a>									
          </h2>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body text-muted">Once we go live, you can get started by downloading Champs Play App on IOS and Android stores, register. Select the games you love, start playing and earning. In the mean time you can join our waitlist and earn free champ tokens.</div>
        </div>
      </div>
      <div className="card-accordion">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <a className="btn btn-link collapsed text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How do I earn money from the App?<i className="material-icons">add</i></a>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">You can earn money by selecting the games you love, fund your account and stake to play a game. You can also play tournaments to earn more in a shorter period. </div>
        </div>
      </div>
      <div className="card-accordion">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <a className="btn btn-link collapsed text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can I play with my friends or random players? <i className="material-icons">add</i></a>                     
          </h2>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">Champs Play allows leaves you with the power to either choose a friend as a playing partner. Challenge a Champion or play with a random player just for the fun of it. The power is always in your hands. </div>
        </div>
      </div>
      <div className="card-accordion">
        <div className="card-header" id="headingFour">
          <h2 className="mb-0">
            <a className="btn btn-link collapsed text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Can I play games for the fun of it and not for money? <i className="material-icons">add</i></a>                               
          </h2>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
          <div className="card-body">With Champs Play we understand that there are users who are not financially motivated and you can always play a game just for the fun of it without any financial stake. </div>
        </div>
      </div>
      <div className="card-accordion">
        <div className="card-header" id="headingFive">
          <h2 className="mb-0">
            <a className="btn btn-link collapsed text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">How do I get my money after I win a game?<i className="material-icons">add</i></a>                               
          </h2>
        </div>
        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
          <div className="card-body">Each user has a secure wallet that all that will account for their winning in the course of playing games. To get money out of your wallet all you have to do is initiate a withdrawal and the fund will hit any account of your choice. </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion;