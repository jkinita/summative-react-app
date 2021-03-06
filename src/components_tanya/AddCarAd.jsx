import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import { IoIosArrowBack } from "react-icons/io";
import "../css/shared.css";
import "../css_tanya/style.css";
import "../css_tanya/addcar_form.css";

import "../css_tanya/my_profile.css";
import CarMakeDropdown from "./CarMakeDropdown";
import YearDropdown from "./YearDropdown";

export default class AddCarAd extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      id: Date.now(),
      selectedMake: "Select Make",
      selectedYear: "Select  Year",
    };
  }

  // MyCarDetails = (e) => {
  //   navigate(`/my-car-details/${this.data.id}`);
  // };

  selectMake = (evt) => {
    var make = evt.target.getAttribute("data-make");
    if (make == null) return;
    this.setState({ selectedMake: make });
  };

  selectYear = (evt) => {
    var year = evt.target.getAttribute("data-year");
    if (year == null) return;
    this.setState({ selectedYear: year });
  };

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

  // uploadToExpress = (e) => {
  //   e.preventDefault();
  //   // grab reference to the form data
  //   var formData = new FormData(this.formRef.current);
  //   var settings = { headers: { "Content-Type": "multipart/form-data" } };
  //   console.log(">>>+ FORMDATA ", formData);
  //   Axios.post(UTILS.add_car, formData, settings).then((res) => {
  //     console.log(res);
  //   });
  // };

  separateNumber = () => {
    var numberToCovert = document.querySelector(".odometer-input-t");
    var val = numberToCovert.value.replace(/,/g, "");

    var output = val.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    numberToCovert.value = output;
  };
  // separateNumber = () => {
  //   var numberToCovert = document.querySelector(".price-input-t");
  //   var val = numberToCovert.value.replace(/,/g, "");
  //   var output = val.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  //   numberToCovert.value = output;
  // };

  render() {
    return (
      <div className="main-content-t">
        <h1 className="header">Sell Your Car</h1>

        <div className="header-w-arrow">
          <h1>
            <IoIosArrowBack />
          </h1>
          <h1>Sell your car</h1>
          <h1 style={{ visibility: "hidden" }}>
            <IoIosArrowBack />
          </h1>
        </div>
        <h2 className="vehicle-details-title">Vehicle details</h2>
        {/* <h2 className="vehicle-details ">Vehicle Details</h2> */}
        <div className="card form-container-t">
          <div className="card-body   pt-0">
            <form onSubmit={this.addCar} ref={this.formRef}>
              <div className=" main-redline-input container-t year-container-t  ">
                {/* <label>Year</label> */}
                <input
                  id="year"
                  type="hidden"
                  value={this.state.selectedYear}
                  name="year"
                  placeholder="Year"
                />
                <YearDropdown
                  selectedYear={this.state.selectedYear}
                  selectYear={this.selectYear}
                />
              </div>

              <div className=" main-redline-input container-t">
                {/* <label>Make</label> */}
                <input
                  id="make"
                  type="hidden"
                  value={this.state.selectedMake}
                  name="make"
                  placeholder="Make"
                />
                <CarMakeDropdown
                  selectMake={this.selectMake}
                  selectedMake={this.state.selectedMake}
                />
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
                  className="odometer-input-t"
                  id="odometer"
                  name="odometer"
                  placeholder="Odometer"
                  onChange={this.separateNumber}
                />
              </div>
              <div className=" main-redline-input md-form">
                {/* <label>Price</label> */}
                <input
                  className="price-input-t"
                  id="price"
                  // type="number"
                  name="price"
                  placeholder="Price"
                  onChange={this.separateNumber}
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
                  // onChange={this.uploadToExpress}
                />
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
