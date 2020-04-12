import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import "../css/shared.css";
import "../css_tanya/style.css";
import "../css_tanya/addcar_form.css";

import "../css_tanya/my_profile.css";

export default class AddCarAd extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { id: Date.now() };
  }

  // MyCarDetails = (e) => {
  //   navigate(`/my-car-details/${this.data.id}`);
  // };

  addCar = (e) => {
    e.preventDefault();
    var formData = new FormData(this.formRef.current);
    // FYI: form still works even if there is no image included
    // forms with images look a bit different - we need to add this line.
    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    console.log(">>> FORMDATA ", formData);
    Axios.post(UTILS.add_car, formData, settings)
      .then((res) => {
        console.log(res);
        navigate(`/my-car-details/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  uploadToExpress = (e) => {
    e.preventDefault();
    // grab reference to the form data
    var formData = new FormData(this.formRef.current);
    var settings = { headers: { "Content-Type": "multipart/form-data" } };
    console.log(">>>+ FORMDATA ", formData);
    Axios.post(UTILS.add_car, formData, settings).then((res) => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="main-content-t">
        <h2 className="vehicle-details-title">Vehicle details</h2>
        {/* <h2 className="vehicle-details ">Vehicle Details</h2> */}
        <div className="card form-container-t">
          <div className="card-body   pt-0">
            <form onSubmit={this.addCar} ref={this.formRef}>
              <div className=" main-redline-input  ">
                {/* <label>Year</label> */}
                <input id="year" type="string" name="year" placeholder="Year" />
              </div>

              <div className=" main-redline-input md-form">
                {/* <label>Make</label> */}
                <input type="text" name="make" placeholder="Make" />
              </div>

              <div className=" main-redline-input md-form">
                {/* <label>Model</label> */}
                <input
                  id="model"
                  type="text"
                  name="model"
                  placeholder="Model"
                />
              </div>
              <div className="main-redline-input md-form">
                {/* <label>Odometer</label> */}
                <input
                  id="odometer"
                  type="number"
                  name="odometer"
                  placeholder="Odometer"
                />
              </div>

              <div className=" main-redline-input md-form">
                {/* <label>Price</label> */}
                <input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Price"
                />
              </div>
              <div className="  md-form">
                <input
                  id="seller_name"
                  type="hidden"
                  name="seller_name"
                  value="user"
                />
              </div>
              <input id="id" type="hidden" name="id" value={this.state.id} />
              <div className=" main-redline-input md-form image-upload-container-t">
                <input
                  type="file"
                  name="car_image"
                  id="car_image"
                  onChange={this.uploadToExpress}
                />
                {/* <button onClick={this.uploadToExpress} className="add-button">
                  Upload picture
                </button> */}
              </div>
              <Button className=" red-btn-t  btn-next-t" type="submit">
                Next
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
