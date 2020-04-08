import React, { Component } from "react";
import "../css/shared.css";
import "../css_ella/home.css";
import { navigate } from "@reach/router";

export default class SingleCarAsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  viewCarDetails = (e) => {
    navigate(`/cars/${this.props.id}`);
  };

  render() {
    console.log(this.props);
    var carImage = this.props.car_image;
    if (carImage !== undefined && !carImage.startsWith("http"))
      carImage = `http://localhost:4000/assets/${carImage}`;

    return (
      <div className="car-card-e">
        <img src={carImage} alt="carimage" />
        <div className="card-text-container-e">
          <h3>
            {this.props.make} {this.props.model}
          </h3>
          <hr />
          <div className="odometer-year-container-e">
            <p>
              Odometer <br /> <span>{this.props.odometer}km</span>
            </p>
            <p>
              Year <br /> <span>{this.props.year}</span>
            </p>
          </div>
          <p>${this.props.price}</p>
          <button onClick={this.viewCarDetails} className="view-details-btn">
            View details
          </button>
        </div>
      </div>
    );
  }
}
