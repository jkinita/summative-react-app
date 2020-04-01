import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import Axios from "axios";
import uuid from "react-uuid";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import "./css/shared.css";
import "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,600&display=swap";

// Ella's components:
import Home from "./components_ella/Home";
import ViewCarDetails from "./components_ella/ViewCarDetails";
import SearchCars from "./components_ella/SearchCars";
import FilterdCars from "./components_ella/FilterdCars";

// Tanya's components:

import AddCarAd from "./components_tanya/AddCarAd";
import EditCarAd from "./components_tanya/EditCarAd";
import MyCarDetails from "./components_tanya/MyCarDetails";
import MyProfile from "./components_tanya/MyProfile";
import Header from "./components_tanya/Header";

// Joe's components:
import GlobalNav from "./components_joe/GlobalNav";
import LoginPage from "./components_joe/LoginPage";
import SplashPage from "./components_joe/SplashPage";
import SellerDetails from "./components_joe/SellerDetails";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalNav />
        {/* <Header /> */}
        <Router>
          <SplashPage path="/" />
          <LoginPage path="/login" />
          <Home path="/all-cars" />
          <SearchCars path="/search-cars" />
          <FilterdCars path="/filterd-cars" />
          <ViewCarDetails path="/cars/:id" />
          <AddCarAd path="/add-car" />
          <EditCarAd path="/edit/:id" />
          <MyProfile path="/my-profile" />
          <MyCarDetails path="/my-car-details" />

          <SellerDetails path="/seller-details" />
        </Router>
      </React.Fragment>
    );
  }
}
