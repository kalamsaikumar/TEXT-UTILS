import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function Navbar({ 
  title = "Set Title Here", 
  aboutText = "Set About Here" ,
  mode,
  toggleMode,

})  {
  return (
  <nav className={`navbar  p-2 mb-2  navbar-expand-lg  bg-${mode}`}>
      <div className="container-fluid ">
        <Link  className={`navbar-brand text-${mode==='light' ? 'dark' : 'light'} `} to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link  className={`nav-link active text-${mode==='light' ? 'dark' : 'light'} aria-current="page" `} to="/" >Home</Link>
            </li>
            <li className="nav-item" >
              <Link  className={`nav-link text-${mode==='light' ? 'dark' : 'light'}  `} to="/about" >{aboutText}</Link>
            </li> 
          </ul>
        </div>
        <div className={`form-check form-switch text-${mode==='light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="switchCheckDefault" />
          <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
  </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "Set About Here"
};