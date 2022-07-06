import React from "react";
import avi from "../img/avi.png";
import avatar from "../img/avi-two.png";
function Table() {
  return (
    <div className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Name</th>
            <th scope="col">Played</th>
            <th scope="col">Won</th>
            <th scope="col">Drawn</th>
            <th scope="col">Lost</th>
            <th scope="col">Amount Won</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-secondary">1</th>
            <td><img src={avi} alt="avi" className="img-fluid pe-2" width="35px"/>@philiptemplar</td>
            <td>129</td>
            <td>89</td>
            <td>30</td>
            <td>6</td>
            <td className="text-primary fw-bold">N12,000</td>
          </tr>
          <tr>
            <th scope="row" className="text-secondary">2</th>
            <td><img src={avatar} alt="avi" className="img-fluid pe-2" width="35px"/>@philiptemplar</td>
            <td>129</td>
            <td>89</td>
            <td>30</td>
            <td>6</td>
            <td className="text-primary fw-bold">N12,000</td>
          </tr>
          <tr>
            <th scope="row" className="text-secondary">3</th>
            <td><img src={avi} alt="avi" className="img-fluid pe-2" width="35px"/>@philiptemplar</td>
            <td>129</td>
            <td>89</td>
            <td>30</td>
            <td>6</td>
            <td className="text-primary fw-bold">N12,000</td>
          </tr>
          <tr>
            <th scope="row" className="text-secondary">4</th>
            <td><img src={avatar} alt="avi" className="img-fluid pe-2" width="35px"/>@philiptemplar</td>
            <td>129</td>
            <td>89</td>
            <td>30</td>
            <td>6</td>
            <td className="text-primary fw-bold">N12,000</td>
          </tr>
          <tr>
            <th scope="row" className="text-secondary">5</th>
            <td><img src={avi} alt="avi" className="img-fluid pe-2" width="35px"/>@philiptemplar</td>
            <td>129</td>
            <td>89</td>
            <td>30</td>
            <td>6</td>
            <td className="text-primary fw-bold">N12,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;