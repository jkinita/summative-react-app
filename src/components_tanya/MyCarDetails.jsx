import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
// import EditButton from "./EditButton";
import "bootstrap/dist/css/bootstrap.css";
import "../css/shared.css";
import "../css_tanya/style.css";

export default class MyCarDetails extends Component {
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

  removeCar = () => {
    Axios.delete(`${UTILS.cars_url}/${this.props.id}`).then(
      res => {
        console.log("DELETED");
        //navigate("/all-cars");
      },
      error => {
        console.log("error = ", error);
      }
    );
  };
  gotoEditCar = e => {
    navigate(`/edit/:id`);
    console.log("go to edit");
  };

  render() {
    return (
      <div className="main-content-t">
        <div className=" row-t my-car-image-wrapper-t">
          <img src={this.state.car.car_image} alt="my-car-image" />
        </div>
        <div className="row-t">
          <h1 className="make-big-title-t"> {this.state.car.make} </h1>
          <h1 className="model-big-title-t"> {this.state.car.model} </h1>

          <h1 className="price-big-title-t"> ${this.state.car.price}</h1>
        </div>

        <div className="row-t">
          <div className="car-details-year-conainer-t">
            <span className="sellpage-body-red">Year </span> <br />
            <span className="sellpage-body-white">{this.state.car.year}</span>
          </div>
          <div>
            <span className="sellpage-body-red">Odometer </span> <br />
            <span className="sellpage-body-white">
              {this.state.car.odometer}km
            </span>
          </div>
        </div>
        <div className="row-t user-details-container-t">
          <div className="  user-image-wrapper-t">
            <img src="" alt="user-image" />
          </div>
          <h1>Jane Doe</h1>
          <div className="phone-icon-wrapper-t">
            <img src="" alt="phone" />
          </div>
          <div className="plane-icon-wrapper-t">
            <img src="" alt="plane" />
          </div>
        </div>

        <div className="row-t buttons-container-t">
          <Button className="edit-btn-bigger" onClick={this.gotoEditCar}>
            Edit
          </Button>
          <Button className="delete-btn" onClick={this.removeCar}>
            Delete
          </Button>
        </div>
        <div className="row-m button-container">
          <Button className="red-btn">Upload</Button>
        </div>
      </div>
    );
  }
}
