import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useParams, Redirect } from "react-router-dom";

function ViewBrand() {
    const [brand, setBrand] = useState()
    const params = useParams();
  useEffect(() => {
      
    let apiLink;
    if (params.gender === "menswear") {
      apiLink = `https://sd-womens-fashion.herokuapp.com/menswear/${params.brand_name}`;
    } else {
      apiLink = `https://sd-womens-fashion.herokuapp.com/WomenFashion/${params.brand_name}`;
    }

    fetch(apiLink)
      .then((data) => {
        let test = data.json();
        console.log(test);
        return test;
      })
      .then((Brand) => {
        if (Brand) {
          console.log(Brand);
          setBrand(Brand)
        }
      });
    //Passing params in brackets will cause function to run again when any of the values of the array changes.
  }, []);

    let CategoryList = brand.categories.map((categoryObject, i) => {
    let category = categoryObject.category;
    let products = categoryObject.products;

    let ProductList = products.map((product, a) => {
        return (
          <div>
            <h3>{category.category}</h3>
            <div class="card-deck">
              <div class="card" style={{ width: "18rem" }} key={i}>
                <img src={product.image_url} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        );
       
    }) 

    return (
      <div>
        <Navbar />
        <h1>{brand.brand_name}</h1>

        <div className="card-deck">{ProductList}</div>
      </div>

      //   <div key={i}>
      //     // category
      //     {ProductList}
      //   </div> // category PRoductList
    );
    
    
    

//   return (
//     <div className="col-auto mb-4">
//       <div className="card" style={{ width: "40rem" }} key={i}>
//         <Link to={`/women/brand/${encodedbrand_name}`}>
//           <img src={brand.logo} className="card-img-top" alt="..." />
//         </Link>
//         {/* <div className="card-body">
//             <h5 className="card-title">{shopwomen.brand_name}</h5>
//             <p className="card-text">{shopwomen.CEO}</p>
//           </div> */}
//         <div className="card-footer">
//           <a
//             className="card-link"
//             href={`/updatebrand/WomenFashion/${encodeURI(brand.brand_name)}`}
//           >
//             Update
//           </a>
//           <a className="card-link" onClick={() => remove(brand.brand_name)}>
//             Delete
//           </a>
//         </div>
//       </div>
//     </div>
//   );
});

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* // Make app so that user needs to enter brand name to submit */}
      <div>
        
      </div>
    </div>
  );
}
export default ViewBrand;
