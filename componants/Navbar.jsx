import React from "react";
import { useLocation } from 'react-router-dom';
import "./index.css";

const Navbar = (props) => {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode} text-${props.textcolor}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="https://github.com/Vegadjay" style={{ fontSize: '1rem' }}>
          Check My Github
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'].map((category) => (
              <li className="nav-item" key={category}>
                <a
                  className={`nav-link ${location.pathname === `/${category}` ? "active" : ""}`}
                  href={`/${category}`}
                  style={{ fontSize: '1rem' }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <div className="form-check form-switch d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onClick={props.togglemode}
                />
                <label
                  className="form-check-label ms-2 mb-0"
                  htmlFor="flexSwitchCheckChecked"
                  style={{ fontSize: '1rem' }}
                >
                  {props.togglemsg}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;