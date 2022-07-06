import React from "react";
import faq from "../img/faq.png";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";
function FaqContent() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <img src={faq} alt="" className="img-fluid mb-5" />
            <h1 className="text-secondary fw-bold fs-2">Frequently asked question</h1>
          </div>
        </div>
        <div className="row justify-content-center pt-2">
          <div className="col-md-8">
            <p className="text-center text-muted">Did you come here for something in particular or just general Riker-bashing? And blowing</p>
          </div>
        </div>
        <div className="row justify-content-center accordion-section">
          <div className="col-md-8">
            <Accordion/>
          </div>
        </div>
        <div className="row justify-content-center accordion-section">
          <div className="col-md-8">
            <h1 className="text-secondary fw-bold fs-2 text-center">Can't find an answer to your question?</h1>
          </div>
        </div>
        <div className="row justify-content-center accordion-section">
          <div className="col-md-8 text-center">
            <Link className='btn btn-outline-primary py-2 px-4' to="/contact">Contact Us <i className="bi bi-arrow-right"></i></Link>
            {/* <button type="button" class="btn btn-outline-primary py-2 px-4">Contact us <i class="bi bi-arrow-right"></i></button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqContent;