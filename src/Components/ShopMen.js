import React from "react";
import { Link, Route, Switch, Redirect, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { Button } from "../stories/Button";
import { Subscribe } from "../stories/Subscribe";
import Forms from "../stories/Forms";
import { Delete } from "../stories/Delete";
import { Update } from "../stories/Update";


function ShopMen(props) {
  const history = useHistory();
  const remove = (brand_name) => {
    let encodedbrand_name = encodeURI(brand_name);
    axios
      .delete(
        `https://sd-womens-fashion.herokuapp.com/menswear/${encodedbrand_name}`,
        {
          brand_name,
        }
      )
      .then(function (response) {
        alert("Brand has been deleted!");
        console.log(response);
        // history.push("/men")
        window.location.href = `http://localhost:3000/men`;
      });
  };

  console.log(props.menBrands);
  let BrandList = props.menBrands.map((brand, i) => {
    let encodedbrand_name = encodeURI(brand.brand_name);

    console.log(`/men/brand/${encodedbrand_name}`);
    return (
      <div className="col mb-4">
        <div className="card" style={{ width: "auto", margin: "30px" }} key={i}>
          <Link to={`/men/brand/${encodedbrand_name}`}>
            <img
              src={brand.logo}
              className="img-fluid"
              alt="Responsive image"
            />
          </Link>

          <div className="card-footer" style= {{backgroundColor: "black"}}>
            <div className="storybook-update">
              <a href={`/updatebrand/${encodeURI(brand.brand_name)}`}>
                <Update className="storybook-Update" label="Update" />
              </a>
              <Delete
                className="storybook-delete"
                onClick={() => remove(brand.brand_name)}
                label="Delete"
              />
            </div>

            {/* <a
              className="card-link"
              href={`/updatebrand/menswear/${encodeURI(brand.brand_name)}`}
            >
              Update
            </a>
            <a className="card-link" onClick={() => remove(brand.brand_name)}>
              Delete
            </a> */}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="row row-cols-4 row-cols-md-1">{BrandList}</div>
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

export default ShopMen;
