import React from "react";
import Navbar from "./Navbar"
import axios from "axios";
import { Button } from "../stories/Button";

function ShopMen(props) {
  const remove = (brand_name) => {
        let encodedbrand_name = encodeURI(brand_name)
        axios
          .delete(`https://sd-womens-fashion.herokuapp.com/menswear/${encodedbrand_name}`,
            {
              brand_name,
            }
          )
          .then(function (response) {
            alert("Brand has been deleted!");
            console.log(response);
          });
    }
    
 console.log(props.menBrands)
  let BrandList = props.menBrands.map((shopmen, i) => {
    return (
      <div className="col mb-4">
        <div className="card" style={{ width: "auto", margin: "30px" }} key={i}>
          <img
            src="https://pds.exblog.jp/pds/1/201609/18/51/f0044151_165878.jpg"
            className="img-fluid"
            alt="Responsive image"
          />
          <div className="card-body">
            {/* <h5 className="card-title">{shopmen.brand_name}</h5> */}
            <a
              className="card-link"
              href={`/updatebrand/${encodeURI(shopmen.brand_name)}`}
            >
              Update
            </a>
            <a
              className="card-link"
              onClick={() => remove(shopmen.brand_name)}
            >
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
      <div className="row row-cols-4 row-cols-md-1">{BrandList}</div>
      <Button label = "Delete" primary = {true} ></Button>
    </div>
  );
}

export default ShopMen;
