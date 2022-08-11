import React, { useState } from "react";
import Axios from "axios";
function Content() {
  // const url=;
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    token: ""
  })

  function submit(e) {
    e.preventDefault(); 
    Axios.post ("http://chamsplay.herokuapp.com/api/v1/waitlist", {
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      token: data.token
    })

    .then(res => {
      console.log(res.data)
    })
  }

  function handle(e){
    const newdata= {...data}
    newdata[e.target.id] =e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return(
    <section className="mx-3 mb-5">
      <div className="container">
        <div className="row justify-content-center table-section">
          <div className="col-md-12 col-lg-12 text-center">
            <h2 className="fw-bolder mb-3 text-secondary">Get free Champ Token by joining our waitlist</h2>
            <button type="button" className="btn btn-primary mb-5 px-4 bg-faint text-secondary border-0 fw-bold'" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Click to join the waitlist
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-white fw-bolder" id="exampleModalLabel">Get free Champ Token by joining our waitlist</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={(e) => submit(e)}>
                      <div className="form-group">
                        <label className="text-white fw-bold">Your Name</label>
                        <input type="name" className="form-control py-2" value={data.fullname} onChange={(e) => handle(e)} id="fullname"/>
                      </div>
                      <div className="form-group">
                        <label  className="text-white fw-bold">Your Email Address</label>
                        <input type="email" className="form-control py-2" value={data.email} onChange={(e) => handle(e)} id="email"/>
                      </div>
                      <div className="form-group">
                        <label className="text-white fw-bold">Phone number</label>
                        <input type="tel" className="form-control py-2" value={data.phone} onChange={(e) => handle(e)} id="phone"/>
                      </div>
                      <div className="form-group">
                        <label className="text-white fw-bold">Field</label>
                        <input type="number" className="form-control py-2" value={data.token} onChange={(e) => handle(e)} id="token"/>
                      </div>
                      <div className="mt-4">
                        <button type="submit" className="btn btn-primary btn-block px-4 py-2 bg-white text-secondary border-btn fw-bold">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Table/> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content;