import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="app">
      <div className="header">
        <h4>BLACK LIVES MATTER</h4>
      </div>
      <div className="img-container">
        {/* <img src="https://www.workmodelagency.com/upload/15/08/section-4.jpg" alt="" className="img-fluid"/> */}
        <h1 className="headline">You just entered the black experience</h1>
        <div>
          <Link to="/men">
            <Button variant="outline-warning" size="lg" className="Button">
              Shop Men's
            </Button>
          </Link>
          <Link to="/women">
            <Button variant="outline-warning" size="lg" className="Button">
              Shop Womens
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;