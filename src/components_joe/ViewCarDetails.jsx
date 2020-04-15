import React, { Component } from "react";
import "../css/shared.css";
import * as UTILS from "../utils";
import Axios from "axios";
import SingleCar from "../components_ella/SingleCar";
import Comments from "../components_ella/Comments";
import { IoIosArrowBack } from "react-icons/io";
// import BottomSingleCar from "./BottomSingleCar";

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
        <div className="header-w-arrow">
          <h1>
            <IoIosArrowBack />
          </h1>
          <h1>View Details</h1>
          <h1 style={{ visibility: "hidden" }}>
            <IoIosArrowBack />
          </h1>
        </div>
        {this.state.cars.map((car, i) => {
          return (
            <div key={Date.now()}>
              <SingleCar
                make={car.make}
                model={car.model}
                car_image={car.car_image}
                price={car.price}
                year={car.year}
                odometer={car.odometer}
                commentAdded={this.commentAdded}
              />

              <Comments comments={car.comments} />

              {/* <BottomSingleCar seller={car.seller_name} /> */}
            </div>
          );
        })}
      </div>
    );
  }
}
