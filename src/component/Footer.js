import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-section">
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-sm mb-3">
              <img src={logo} alt="" className="img-fluid" width="60px" />
            </div>
            <div className="col-sm mb-3">
              <h3>Company</h3>
              <ul className="list-unstyled links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/">Reviews and Ratings</Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h3>Support</h3>
              <ul className="list-unstyled links">
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
            </div>
            <div className="col-sm mb-3">
              <h3>Contact Us</h3>
              <ul className="list-unstyled links">
                <li>09044000008</li>
                <li>help@champsplay.com</li>
              </ul>
            </div>
            <div className="col-md-3 mb-3">
              <h3>Socials</h3>
              <ul className="list-unstyled social">
                <li><i className="bi bi-facebook pe-3"></i></li>
                <li><i className="bi bi-twitter pe-3"></i></li>
                <li><i className="bi bi-instagram"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col text-left">
              <ul className="list-unstyled copyright">
                <li className="pe-5">© 2022 Champ Play</li>
                <li className="pe-5">Terms and Conditions</li>
                <li className="pe-5">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;