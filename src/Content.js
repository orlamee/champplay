import React from "react";
import Table from "./component/Table";

function Content() {
  return(
    <section className="mx-3 mb-5">
      <div className="container">
        <div className="row justify-content-center table-section">
          <div className="col-md-12 col-lg-12 text-center">
            <div className="table-title mb-5">
              <button className='btn btn-primary px-4 bg-faint text-secondary border-0 fw-bold'>This Week’s Top 5 Winners</button>
            </div>
            <Table/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content;