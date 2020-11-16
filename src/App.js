import React, { useEffect, useState } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import ShopMen from "./Components/ShopMen";
import ShopWomen from "./Components/ShopWomen";
import CreateBrands from "./Components/CreateBrands"
import UpdateBrands from "./Components/UpdateBrands";
import WomensProduct from "./Components/WomensBrand";
import WomensBrand from "./Components/WomensBrand";

function App() {
  // In react hooks this is how we set state
  // The first agrument is the name of the state, second argument is how we manipulate that state
  // Anything passed in useState is the default value of that state
  const [shopwomen, setShopWomen] = useState([]);
  // UseEffect works similarily to componentDidMount
  console.log("in App.js before useEffect");
  useEffect(() => {
    console.log(`are we here`);
    let apiUrl = "https://sd-womens-fashion.herokuapp.com/WomenFashion";
    fetch(apiUrl)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((shopwomen) => {
        console.log(shopwomen);
        setShopWomen(shopwomen);
      })
      .catch((error) => {
        console.log(error);
        console.log("uh oh");
      });
    //Empty array bracket will only run useEffect once, because we are fetching
    //Argument passed here is saying everytime our argument changes the API will be called.
  }, []);

 
  const [shopmen, setShopMen] = useState([]);

  console.log("in App.js before useEffect");
  useEffect(() => {
    console.log(`are we here`);
    let menapiUrl = "https://sd-womens-fashion.herokuapp.com/menswear";
    fetch(menapiUrl)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((shopmen) => {
        console.log(shopmen);
        setShopMen(shopmen);
      })
      .catch((error) => {
        console.log(error);
        console.log("uh oh");
      });

  }, []);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <HomePage />;
        }}
      />

      <Route
        // exact
        path="/men"
        render={() => {
          return <ShopMen menBrands={shopmen} />;
        }}
      />

      <Route
        exact
        path="/women"
        render={() => {
          return <ShopWomen womenBrands={shopwomen} />;
        }}
      />

      <Route
        // exact
        path="/createbrand"
        render={() => {
          return <CreateBrands />;
        }}
      />

      <Route
        // exact
        path="/women/brand/:brand_name"
        render={() => {
          return <WomensBrand />;
        }}
      />

      <Route
        exact
        path="/updatebrand/:brand_name"
        render={() => {
          return <UpdateBrands womenBrandList={shopwomen} />;
        }}
      />

      {/* {shopwomen.length !== 0 ? (
        <Route
          exact
          path="/shopwomen/:id"
          render={(routerProps) => {
            let shopwomen = shopwomen.filter(
              (shopwomen) => shopwomen.id == routerProps.match.params.id
            );
            return <ShopWomen womenBrands={shopwomen} />;
          }}
        />
      ) : null} */}
    </Switch>
  );
}

export default App;
