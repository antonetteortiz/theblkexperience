import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar"

function CreateMusic() {
  const [logo, setLogo] = useState();
  const [brand_name, setBrand_Name] = useState();
  const [CEO, setCEO] = useState();
  const [type, setType] = useState();
  const [price_point, setPrice_Point] = useState();
  const [link, setLink] = useState();

  const submitToApi = () => {
    console.log("submitting");
    axios
      .post("https://sd-womens-fashion.herokuapp.com/WomenFashion", {
        logo,
        brand_name,
        CEO,
        type,
        price_point,
        link,
      })
      .then(function (response) {
        alert("Thanks for adding to our libary.");
        console.log(response);
      });
  };

  return (
    <div>
      <Navbar />
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Logo</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setLogo(event.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Please paste link to brand jpeg/png
          </small>
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Brand Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            onChange={(event) => setLink(event.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Insert link to brand website
          </small>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Add brand
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
  );
}

export default CreateMusic;
