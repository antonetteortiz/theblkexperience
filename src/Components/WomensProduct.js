import React from "react";
import Navbar from "./Navbar";
import axios from "axios";

function WomensProduct() {

    let BrandList = props.womenBrands.map((shopwomen, i) => {
      return (
        <div className="col mb-4">
          <div
            className="card"
            style={{ width: "auto", height: "auto", margin: "30px" }}
            key={i}
          >
            <img src={shopwomen.logo} className="img-fluid" alt="..." />
            <div className="card-body">
              {/* <h5 className="card-title">{shopwomen.brand_name}</h5>
            <p className="card-text">{shopwomen.CEO}</p> */}
              <a
                className="card-link"
                href={`/updatebrand/${encodeURI(shopwomen.brand_name)}`}
              >
                Update
              </a>
              <a
                className="card-link"
                onClick={() => remove(shopwomen.brand_name)}
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
      </div>
    );
}

export default WomensProduct