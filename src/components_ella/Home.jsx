import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import SingleCarAsCard from "./SingleCarAsCard";
import "../css_ella/home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  componentDidMount() {
    Axios.get(UTILS.cars_url).then(
      (res) => {
        if (res.data.result === false) {
          this.setState({ result: false });
        } else {
          this.setState({ cars: res.data, result: true });
        }
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.result === false ? <p>no cars returned</p> : null}
        {this.state.cars.map((car, i) => {
          return (
            <SingleCarAsCard
              key={i}
              car_image={car.car_image}
              make={car.make}
              model={car.model}
              odometer={car.odometer}
              year={car.year}
              price={car.price}
              id={car._id}
            />
          );
        })}
      </div>
    );
  }
}
