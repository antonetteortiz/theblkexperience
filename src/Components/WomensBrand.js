// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";

// function WomensBrand() {
//       const [brand, setBrand] = useState(null);

//       // console.log("in App.js before useEffect");
//       useEffect(() => {
//         // console.log(`are we here`);
//         let apiUrl = "https://sd-womens-fashion.herokuapp.com/WomenFashion";
//         fetch(apiUrl)
//           .then((data) => {
//             console.log(data);
//             return data.json();
//           })
//           .then((returnedBrand) => {
//             console.log(returnedBrand);
//             setBrand(returnedBrand);
//           })
//           .catch((error) => {
//             console.log(error);
//             console.log("uh oh");
//           });
//       }, []);





//     let ProductList = brand.map((shopwomen, i) => {
//       return (
//         <div className="col mb-4">
//           <div
//             className="card"
//             style={{ width: "auto", height: "auto", margin: "30px" }}
//             key={i}
//           >
//             <img src={shopwomen.logo} className="img-fluid" alt="..." />
//             <div className="card-body">
            
//               <a
//                 className="card-link"
//                 href={`/updatebrand/${encodeURI(shopwomen.brand_name)}`}
//               >
//                 Update
//               </a>
//               <a
//                 className="card-link"
//                 onClick={() => remove(shopwomen.brand_name)}
//               >
//                 Delete
//               </a>
//             </div>
//           </div>
//         </div>
//       );
//     });

//     return (
//       <div>
//         <Navbar />
//         <div className="row row-cols-4 row-cols-md-1">{BrandList}</div>
//       </div>
//     );
// }

// export default WomensBrand;
