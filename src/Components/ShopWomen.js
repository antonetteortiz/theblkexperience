import React from "react";
import Navbar from "./Navbar"
import axios from "axios";

function ShopWomen(props) {
  const remove = (brand_name) => {
        let encodedbrand_name = encodeURI(brand_name)
        axios
          .delete(`https://sd-womens-fashion.herokuapp.com/WomenFashion/${encodedbrand_name}`,
            {
              brand_name
            }
          )
          .then(function (response) {
            alert("Brand has been deleted!");
            console.log(response);
          });
    }
    
 console.log(props.womenBrands)
  let BrandList = props.womenBrands.map((shopwomen, i) => {
    return (
      <div className="col mb-4">
        <div className="card" style={{ width: "auto", height: "auto", margin: "30px" }} key={i}>
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

export default ShopWomen;
