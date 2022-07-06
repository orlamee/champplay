import React from "react";

function Accordion() {
  return (
    <div className="accordion mt-5" id="accordionExample">
      <div className="card-accordion">
        <div className="card-header" id="headingOne">
          <h2 className="clearfix mb-0">
            <a className="btn btn-link text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Is there have any option for write blog? <i className="material-icons">add</i></a>									
          </h2>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="card-body text-muted">Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about</div>
        </div>
      </div>
      <div className="card-accordion">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <a className="btn btn-link collapsed text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Can i change my plan later? <i className="material-icons">add</i></a>
          </h2>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
        </div>
      </div>
      <div className="card-accordion">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <a className="btn btn-link collapsed text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Did you come here for something in particular? <i className="material-icons">add</i></a>                     
          </h2>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet sagittis. In tincidunt orci sit amet elementum vestibulum.</div>
        </div>
      </div>
      <div className="card-accordion">
        <div className="card-header" id="headingFour">
          <h2 className="mb-0">
            <a className="btn btn-link collapsed text-secondary fw-bolder fs-6" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> is there have any option for write blog? <i className="material-icons">add</i></a>                               
          </h2>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
          <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion;