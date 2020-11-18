import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Button } from "../stories/Button";
import { Subscribe } from "../stories/Subscribe";
import Forms from "../stories/Forms";
import { Delete } from "../stories/Delete";
import { Update } from "../stories/Update";

function ShopMen(props) {
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
      });
  };

  console.log(props.menBrands);
  let BrandList = props.menBrands.map((shopmen, i) => {
    return (
      <div className="col mb-4">
        <div className="card" style={{ width: "auto", margin: "30px" }} key={i}>
          <img
            src="https://pds.exblog.jp/pds/1/201609/18/51/f0044151_165878.jpg"
            className="img-fluid"
            alt="Responsive image"
          />
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
