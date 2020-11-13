import React, { useEffect, useState} from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage"
import ShopMen from "./Components/ShopMen"
import ShopWomen from "./Components/ShopWomen"

function App() {
  // In react hooks this is how we set state
  // The first agrument is the name of the state, second argument is how we manipulate that state
  // Anything passed in useState is the default value of that state
  const [shopwomen, setShopWomen] = useState([])
  // UseEffect works similarily to componentDidMount
  useEffect(() => {
   let apiUrl = "https://sd-womens-fashion.herokuapp.com/WomenFashion";
   fetch(apiUrl)
   .then(data => data.json())
   .then(shopwomen => setShopWomen(shopwomen))
  //Empty array bracket will only run useEffect once, because we are fetching 
  //Argument passed here is saying everytime our argument changes the API will be called.  
  },[shopwomen]) 

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
              return <ShopMen />;
            }}
          />

           <Route
            // exact
            path="/women"
            render={() => {
              return <ShopWomen />;
            }}
          />
  </Switch>
  );
}

export default App;
