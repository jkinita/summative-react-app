import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
// import EditButton from "./EditButton";
import "bootstrap/dist/css/bootstrap.css";
import "../css/shared.css";
import "../css_tanya/style.css";
import picture_women from "../images/women.png";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }
  //we getting info from jason through server
  componentDidMount() {
    Axios.get(`${UTILS.cars_url}`).then(
      (res) => {
        this.setState({ cars: res.data });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <div className="main-content-t">
        <div className="user-content-t">
          <div className="user-details-container-t  main-redline-input">
            <div className=" user-image-wrapper-t">
              <img src={picture_women} alt="women-img" />
            </div>
            <div>
              <h1 className="user-title-red">Jane Doe</h1>
            </div>
            <div>
              <p className="email">janedoe12@gmail.com</p>
            </div>
            <div>
              <Button className="edit-profile-btn">Edit profile</Button>
            </div>
          </div>
        </div>
        <div className="selling-vehicles-container">
          <div className="row-t">
            <h2 className="selling-vehicles-title">Selling Vehicles</h2>
          </div>
          {this.state.cars
            .filter((car) => car.seller_name == "user")
            .map((car) => {
              return (
                <div className="row-t">
                  <div className="  small-image-car-wrapper">
                    <img src={car.car_image} alt="car-img" />
                  </div>

                  <div>
                    <h1 className="make-big-title-t">Toyota {car.make} </h1>
                    <h1 className="model-big-title-t"> Prius{car.model} </h1>
                    <p className="view-details-btn-t">View details ></p>
                  </div>

                  <div className=" small-buttons-container-t">
                    <Button
                      className="edit-btn-small-t "
                      onClick={this.gotoEditCar}
                    >
                      Edit
                    </Button>
                    <Button
                      className="delete-btn-small-t"
                      onClick={this.removeCar}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
