import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import Forms from "../stories/Forms";
import { Subscribe } from "../stories/Subscribe";
import { Delete } from "../stories/Delete";
import { Update } from "../stories/Update";

function ShopWomen(props) {
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
      });
  };

  console.log(props.womenBrands);
  let BrandList = props.womenBrands.map((brand, i) => {
    let encodedbrand_name = encodeURI(brand.brand_name);

    return (
      <div className="col-auto mb-4">
        <div className="card" style={{ width: "40rem" }} key={i}>
          <Link to={`/women/brand/${encodedbrand_name}`}>
            <img
              src={brand.logo}
              className="card-img-top"
              alt="..."
              href={`/updatebrand`}
            />
          </Link>
          {/* <div className="card-body">
            <h5 className="card-title">{shopwomen.brand_name}</h5>
            <p className="card-text">{shopwomen.CEO}</p>
          </div> */}
          <div className="storybook-Delete">
            <a href={`/updatebrand/${encodeURI(brand.brand_name)}`}>
              <Update className="storybook-Update" label="Update" />
            </a>
            <Delete
              className="storybook-delete"
              onClick={() => remove(brand.brand_name)}
              label="Delete"
            />
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
