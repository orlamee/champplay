import React from "react";

function Form() {
  return (
    <div className="form-box">
      <form>
        <div className="mb-4">
          <h6 className="text-white fs-5 fw-bolder">Drop us a quick message, we will get back to you as soon as possible</h6>
        </div>
        <div className="form-group">
          <label for="name" className="text-white fw-bold">Your Name</label>
          <input type="name" className="form-control py-2" id="formGroupExampleInput"/>
        </div>
        <div className="form-group">
          <label for="email" className="text-white fw-bold">Your Email Address</label>
          <input type="email" className="form-control py-2" id="formGroupExampleInput"/>
        </div>
        <div className="form-group">
          <label for="name" className="text-white fw-bold">Your Message</label>
          <textarea className="form-control" name="message" rows="5"/>
        </div>
        <div className="mt-4">
          <button type="button" className="btn btn-primary px-4 py-2 bg-white text-secondary border-btn fw-bold">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Form;