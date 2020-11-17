import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useParams, Redirect } from "react-router-dom";
function UpdateBrands() {
  const [logo, setLogo] = useState();
  const [brand_name, setBrand_Name] = useState();
  const [CEO, setCEO] = useState();
  const [type, setType] = useState();
  const [price_point, setPrice_Point] = useState();
  const [link, setLink] = useState();
  const params = useParams();
  useEffect(() => {
    let apiUrl = `https://sd-womens-fashion.herokuapp.com/WomenFashion/${params.brand_name}`;
    fetch(apiUrl)
      .then((data) => {
        let test = data.json();
        console.log(test);
        return test;
      })
      .then((shopwomen) => {
        if (shopwomen) {
          console.log(shopwomen);
          setLogo(shopwomen.logo);
          setBrand_Name(shopwomen.brand_name);
          setCEO(shopwomen.CEO);
          setType(shopwomen.type);
          setPrice_Point(shopwomen.price_point);
          setLink(shopwomen.link);
        }
      });
    //Passing params in brackets will cause function to run again when any of the values of the array changes.
  }, []);
  const submitToApi = () => {
    console.log("update", params.artistName);
    axios
      .put(
        `https://sd-womens-fashion.herokuapp.com/WomenFashion/${params.brand_name}`,
        {
          logo,
          brand_name,
          CEO,
          type,
          price_point,
          link,
        }
      )
      .then(function (response) {
        if (response.status == 200) {
          // change when deploying
          window.location.href = "http://localhost:3000/";
        }
        // alert("Thanks for updating to our libary.");
        console.log(response);
      });
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* // Make app so that user needs to enter brand name to submit */}
      <div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Logo</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={logo}
              onChange={(event) => setLogo(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Brand Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={brand_name}
              onChange={(event) => setBrand_Name(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">CEO</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={CEO}
              onChange={(event) => setCEO(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Type</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={type}
              onChange={(event) => setType(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Price Point</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={price_point}
              onChange={(event) => setPrice_Point(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Link</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={link}
              onChange={(event) => setLink(event.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Update Brand
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => submitToApi()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default UpdateBrands;
