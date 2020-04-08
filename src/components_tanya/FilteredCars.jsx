import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import SingleCarAsCard from "../components_ella/SingleCarAsCard";
import "../css_ella/home.css";

export default class FilteredCars extends Component {
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
    var make = this.props.location.state.make;
    var sortHigh = this.props.location.state.sortHigh;
    // var sortLow = this.props.location.state.sortlow;
    return (
      <div className="main-content-t">
        {this.state.result === false ? <p>no cars returned</p> : null}
        {this.state.cars
          .filter((car) => car.make == make)
          .sort((car1, car2) =>
            sortHigh == true ? car2.price - car1.price : car1.price - car2.price
          )
          .map((car, i) => {
            return (
              <SingleCarAsCard
                key={i}
                car_image={car.car_image}
                make={car.make}
                model={car.model}
                odometer={car.odometer}
                year={car.year}
                price={car.price}
                uid={car._id}
              />
            );
          })}
      </div>
    );
  }
}
