import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="header">
        <h4>BLACK LIVES MATTER</h4>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#bc925a"}}
      >
        <a className="navbar-brand" href="#">
          BLK Experience
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav1">
          <ul className="navbar-nav">
            <button className="nav-item active">
              <Link to="/">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </button>
            <button className="nav-item">
              <Link to="/women">
                <a className="nav-link" href="#">
                  Women's
                </a>
              </Link>
            </button>
            <button className="nav-item">
              <Link to="/men">
                <a className="nav-link" href="#">
                  Men's
                </a>
              </Link>
            </button>
            <button className="nav-item">
              <Link to="/createbrand">
                <a className="nav-link" href="#">
                  Create Brand
                </a>
              </Link>
            </button>
          </ul>
        </div>
      </nav>
      <div></div>
    </div>
  );
}

export default Navbar;
