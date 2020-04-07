import React, { Component } from "react";
import "../css/shared.css";
import * as UTILS from "../utils";
import Axios from "axios";
import SingleCar from "./SingleCar";
import Comments from "./Comments";

export default class ViewCarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  componentDidMount() {
    this.getData();
  }

  commentAdded = (e) => {
    this.getData();
  };

  getData = (e) => {
    console.log("reload data");
    Axios.get(UTILS.cars_url + "/" + this.props.id).then(
      (res) => {
        this.setState({ cars: res.data });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.cars.map((car, i) => {
          return (
            <div key={Date.now()}>
              <SingleCar
                make={car.make}
                model={car.model}
                car_image={car.car_image}
                year={car.year}
                odometer={car.odometer}
                seller={car.seller_name}
                commentAdded={this.commentAdded}
              />

              <Comments />
            </div>
          );
        })}
      </div>
    );
  }
}
