import React, { useState } from "react";
import Axios from "axios";
import swal from 'sweetalert';

function Content() {
  // const url=;
  
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    bad: [],
    fullname: "",
    email: "",
    phone: "",
    token: "",

  })

  

  function submit(e) {
    setIsLoading(true);
    e.preventDefault(); 

//   this is another way to reset but i feel you dont need it since they cant click submit again 
// setData();
    Axios.post ("https://chamsplay.herokuapp.com/api/v1/users", {
      is_waitlist: true,
      fullname: data.fullname,
      email: data.email,
      phone: data.phone,
      // token: data.token
      
    })
    
    
    .then(res => {
      swal({
        title: "Congratulations!",
        text: "You've successfully been added to champsplay wailtlist!",
        icon: "success",
        button: "Ok!",
        
      });
    })
    
    .catch(error => {
      swal({
        title: "Error!",
        text: error.response.data.error.phone?.[0]  || error.response.data.error.email?.[0],
        icon: "success",
        button: "Ok!",
        
      });
      // console.log(error.response.data.error.phone?.[0]);

    })
    
  }

      


  function handle(e){
    const newdata= {...data}
    newdata[e.target.id] =e.target.value
    setData(newdata)
    // console.log(newdata)
  }

  return(
    <section className="mx-3 mb-5">
      <div className="container">
        <div className="row justify-content-center table-section">
          <div className="col-md-10 col-lg-10 text-center coin">
            <h2 className="fw-bolder mb-5 text-secondary">Get free Champ Token<br/>by joining our waitlist</h2>
            <button type="button" className="btn btn-primary mb-5 px-5 py-3 bg-faint text-secondary border-0 fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                        <label className="text-white fw-bold">Your full name</label>
                        <input type="name" className="form-control py-2" value={data.fullname} onChange={(e) => handle(e)} id="fullname" required/>
                      </div>
                      <div className="form-group">
                        <label  className="text-white fw-bold">Your email address</label>
                        <input type="email" className="form-control py-2" value={data.email} onChange={(e) => handle(e)} id="email" required/>
                      </div>
                      <div className="form-group">
                        <label className="text-white fw-bold">Phone number</label>
                        <input type="tel" className="form-control py-2" value={data.phone} onChange={(e) => handle(e)} id="phone" pattern="{30988765678}" required/>
                      </div>
                      {/* <div className="form-group">
                        <label className="text-white fw-bold">Field</label>
                        <input type="number" className="form-control py-2" value={data.token} onChange={(e) => handle(e)} id="token"/>
                      </div> */}
                       {isLoading ? (
                       <div className="mt-4">
                       <button className="btn btn-primary btn-block px-4 py-2 bg-white text-secondary border-btn fw-bold">Submitting</button>
                     </div>
                        ) : (
                    
                        <div className="mt-4">
                        <button type="submit" className="btn btn-primary btn-block px-4 py-2 bg-white text-secondary border-btn fw-bold">Submit</button>
                      </div>
                           )}
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