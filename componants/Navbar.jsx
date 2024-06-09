import React from "react";
import "./index.css";
import { useLocation } from 'react-router-dom';

const Navbar = (props) => {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="https://github.com/Vegadjay">
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
          <ul className="navbar-nav ms-auto">
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
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onClick={props.togglemode}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
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
