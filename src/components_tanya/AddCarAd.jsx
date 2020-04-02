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

  MyCarDetails = e => {
    navigate(`/my-car-details/${this.data.id}`);
  };

  addCar = e => {
    e.preventDefault();
    var formData = new FormData(this.formRef.current);
    // FYI: form still works even if there is no image included
    // forms with images look a bit different - we need to add this line.
    var settings = {
      headers: { "Content-Type": "multipart/form-data" }
    };

    console.log(">>> FORMDATA ", formData);
    Axios.post(UTILS.add_car, formData, settings)
      .then(res => {
        console.log(res);
        navigate(`/my-car-details/${res.data.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadToExpress = e => {
    e.preventDefault();
    // grab reference to the form data
    var formData = new FormData(this.formRef.current);
    var settings = { headers: { "Content-Type": "multipart/form-data" } };
    console.log(">>>+ FORMDATA ", formData);
    Axios.post(UTILS.add_car, formData, settings).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="main-content-t">
        {/* <h2 className="vehicle-details ">Vehicle Details</h2> */}

        {/* <form onSubmit={this.addCar} ref={this.formRef}></form> */}
        <form>
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

        <div style={{ width: "40%", margin: "1% auto" }}>
          <form onSubmit={this.uploadToExpress} ref={this.formRef}>
            {/* <label className="choose-file-label">Upload Photo</label> */}
            <input type="file" name="car_image" id="car_image" />
            <button type="submit" className="add-button">
              Update details
            </button>
          </form>
        </div>
      </div>
    );
  }
}
