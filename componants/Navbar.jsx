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
            Click Here
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      ae
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      at
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      au
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      be
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      bg
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      br
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ca
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      cn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      co
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      cu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      cz
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/business">
                Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/entertainment">
                Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/general">
                General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/health">
                Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/science">
                Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/sports">
                Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/technology">
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

export default Navbar;
