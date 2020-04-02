import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
// import EditButton from "./EditButton";
import "bootstrap/dist/css/bootstrap.css";
import "../css/shared.css";
import "../css_tanya/style.css";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {}
    };
  }
  //we getting info from jason through server
  componentDidMount() {
    Axios.get(`${UTILS.cars_url}/${this.props.id}`).then(
      res => {
        this.setState({ car: res.data[0] });
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <div className="main-content-t">
        <div className="user-details-container-t  main-redline-input">
          <div className=" user-image-wrapper-t">
            <img src={this.state.car.car_image} alt="my-car-image-t" />
          </div>
          <div>
            <h1 className="user-title-red">Jane Doe</h1>
          </div>
          <div>
            <p className="email">janedoe12@gmail.com</p>
          </div>
          <div>
            <Button className="edit-btn-big">Edit profile</Button>
          </div>
        </div>

        <div className="row-t">
          <h1 className="make-big-title-t"> {this.state.car.make} </h1>
          <h1 className="model-big-title-t"> {this.state.car.model} </h1>

          <h1 className="price-big-title-t"> ${this.state.car.price}</h1>
        </div>

        <div className="row-t buttons-container-t">
          <Button className="edit-btn-bigger" onClick={this.gotoEditCar}>
            Edit
          </Button>
          <Button className="delete-btn" onClick={this.removeCar}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}
