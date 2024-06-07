import React from "react";
import "./index.css";
const Navbar = (props) => {

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.textcolor} fixed-top`}
      >
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/general">
                General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/business">
                Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/entertainment">
                Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/health">
                Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/science">
                Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/sports">
                Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/technology">
                Technology
                </a>
              </li>
              <li className="nav-item">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onClick={props.togglemode}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    <span>{props.togglemsg}</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
Navbar.defaultProps = {
  category: 'general'
}
export default Navbar;
