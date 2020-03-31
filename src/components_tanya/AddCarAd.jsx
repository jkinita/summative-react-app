import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import * as UTILS from "../utils";

import { navigate } from "@reach/router";

export default class AddCarAd extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { id: Date.now() };
  }

  addCar = e => {
    e.preventDefault();
    var formData = new FormData(this.formRef.current);
    console.log("FORMDATA", formData);
    Axios.post(UTILS.add_car, formData)
      .then(res => {
        console.log(res);
        navigate(`/my-car-details/${res.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.addCar} ref={this.formRef}>
          <label>Year</label>
          <input id="year" type="string" name="year" placeholder="year" />

          <label>Make</label>
          <input type="text" name="make" placeholder="make" />

          <label>Model</label>
          <input id="model" type="text" name="model" placeholder="model" />

          <label>Odometer</label>
          <input
            id="odometer"
            type="number"
            name="odometer"
            placeholder="odometer"
          />

          <label>Price</label>
          <input id="price" type="number" name="price" placeholder="price" />
          {/* 
          <label>Car image</label>
          <input type="file" name="car_image" id="car_image" /> */}
          <input id="id" type="hidden" name="id" value={this.state.id} />

          <Button type="submit">Next</Button>
        </form>
      </div>
    );
  }
}
