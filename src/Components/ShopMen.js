import React from "react";
import Navbar from "./Navbar"
import axios from "axios";

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
        <div className="card" style={{ width: "18rem" }} key={i}>
          <img src={shopmen.logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{shopmen.brand_name}</h5>
            <p className="card-text">{shopmen.CEO}</p>
            {/* <a
              className="btn btn-primary"
              href={`/updatebrand/${encodeURI(shopwomen.brand_name)}`}
            >
              Update
            </a> */}
            <a
              className="btn btn-primary"
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
      <div className="row row-cols-2 row-cols-md-2">{BrandList}</div>
    </div>
  );
}

export default ShopMen;
