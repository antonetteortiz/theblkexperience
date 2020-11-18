import React from "react";
import { Link, Route, Switch, Redirect, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Forms from "../stories/Forms";
import { Subscribe } from "../stories/Subscribe";

function ShopWomen(props) {
  const history = useHistory();
  const remove = (brand_name) => {
    let encodedbrand_name = encodeURI(brand_name);
    axios
      .delete(
        `https://sd-womens-fashion.herokuapp.com/WomenFashion/${encodedbrand_name}`,
        {
          brand_name,
        }
      )
      .then(function (response) {
        alert("Brand has been deleted!");
        console.log(response);
        // history.push(`/women`)
        window.location.href = `https://antonetteortiz.github.io/women`;
      });
  };

  console.log(props.womenBrands);
  let BrandList = props.womenBrands.map((brand, i) => {
    let encodedbrand_name = encodeURI(brand.brand_name);

    console.log(`/women/brand/${encodedbrand_name}`);
    return (
      <div className="col mb-4">
        <div className="card" style={{ width: "40rem", margin: "30px", padding: "20px, 0px, 0px, 50px"}} key={i}>
          <Link to={`/women/brand/${encodedbrand_name}`}>
            <img
              src={brand.logo}
              className="card-img-top"
              alt="Responsive image"
            />
          </Link>

          <div className="card-footer" style={{ backgroundColor: "#020202" }}>
            <Link to = {`/updatebrand/WomenFashion/${encodeURI(brand.brand_name)}`}
            >
              Update
            </Link>
            
            <a className="card-link" onClick={() => remove(brand.brand_name)}>
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-2">{BrandList}</div>
      <footer>
        <Forms />
        <Subscribe
          className="storybook-subscribe"
          onClick={() => alert("Thank you for Subscribing")}
          label="Subscribe"
        />
      </footer>
    </div>
  );
}

export default ShopWomen;
