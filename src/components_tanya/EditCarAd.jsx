import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import { Button } from "reactstrap";
import CarMakeDropdown from "./CarMakeDropdown";
import YearDropdown from "./YearDropdown";
import "../css/shared.css";
import "../css_tanya/style.css";
import "../css_tanya/my_profile.css";
import "../css_tanya/addcar_form.css";

export default class EditCarAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Date.now(),
      car: {},
      isLoaded: false,
      selectedMake: "",
      selectedYear: "",
    };
    this.formRef = React.createRef();
  }

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

  componentDidMount() {
    console.log(`${UTILS.cars_url}/${this.props.id}`);
    Axios.get(`${UTILS.cars_url}/${this.props.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          car: res.data[0],
          isLoaded: true,
          selectedMake: res.data[0].make,
          selectedYear: res.data[0].year,
        });
      })
      .catch((err) => console.log(err));
  }

  EditCarAd = (e) => {
    e.preventDefault();
    var formData = new FormData(this.formRef.current);

    // FYI: form still works even if there is no image included
    // forms with images look a bit different - we need to add this line.
    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    Axios.put(`${UTILS.cars_url}/${this.props.id}`, formData, settings).then(
      (res) => {
        // do somenthing, update form for user again ?
        console.log(res);
        navigate(`/edited-car-details/${this.props.id}`);
      }
    );
  };

  render() {
    // make a local variable from the state.car
    const { car_image } = this.state.car;
    const image_path = UTILS.assets_url + car_image;
    console.log("hello ", this.state.isLoaded);

    return (
      //    {
      //   this.state.isLoaded === false && <span>loading</span>;
      // }
      <div className="main-content-t">
        <h2 className="vehicle-details-title">Edit vehicle details</h2>

        <div className="card form-container-t">
          <div className="card-body   pt-0">
            <form ref={this.formRef} onSubmit={this.EditCarAd}>
              <div className=" main-redline-input  ">
                {/* <label>Year</label> */}
                <input
                  id="year"
                  type="hidden"
                  name="year"
                  value={this.state.selectedYear}
                />
                <YearDropdown
                  selectedYear={this.state.selectedYear}
                  selectYear={this.selectYear}
                />
              </div>

              <div className=" main-redline-input md-form">
                <input
                  type="hidden"
                  name="make"
                  placeholder="Make"
                  value={this.state.selectedMake}
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
                  defaultValue={this.state.car.model}
                />
              </div>
              <div className="main-redline-input md-form">
                {/* <label>Odometer</label> */}
                <input
                  id="odometer"
                  type="number"
                  name="odometer"
                  placeholder="Odometer"
                  defaultValue={this.state.car.odometer}
                />
              </div>

              <div className=" main-redline-input md-form">
                {/* <label>Price</label> */}
                <input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Price"
                  defaultValue={this.state.car.price}
                />
              </div>
              <div className="  md-form">
                <input
                  id="seller_name"
                  type="hidden"
                  name="seller_name"
                  defaultValue="user"
                />
              </div>
              <input id="id" type="hidden" name="id" value={this.props.id} />
              <div className=" main-redline-input md-form image-upload-container-t">
                {/* <input
                  type="file"
                  name="car_image"
                  id="car_image"
                  onChange={this.uploadToExpress}
                /> */}
                {/*                 
                <input
                  type="hidden"
                  name="car_image"
                  id="car_image"
                  value={car_image}
                  onChange={this.uploadToExpress}
                /> */}

                {/* <button onClick={this.uploadToExpress} className="add-button">
                  Upload picture
                </button> */}
                <figure style={{ color: "snow" }}>
                  {/* <img className=""
                    src={image_path}
                    display="none"
                    width="100px"
                    height="100px"
                    alt="current car"
                  /> */}
                  <figcaption className="image-name-t">
                    {" "}
                    Current pic:{car_image}
                  </figcaption>
                </figure>
                <input
                  type="file"
                  id="car_image"
                  name="car_image"
                  defaultValue={car_image}
                ></input>
              </div>
              <Button
                className="red-btn-t"
                type="submit"
                data-id={this.state.car.id}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
