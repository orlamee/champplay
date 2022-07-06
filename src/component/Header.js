import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';

function Header() {
  return(
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
			<div className='container'>
				<Link className='navbar-brand' to="/">
					<img src={logo} alt="" className='logo img-fluid' />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<div className='ml-auto'>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/faq">FAQs</Link>
							</li>
              <li className='nav-item'>
								<Link to="/" className='nav-link me-3'>Blog</Link>
							</li>
              <li className='nav-item'>
						   	<Link className='btn btn-primary px-4 linear fw-bolder' to="/contact">Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Header;