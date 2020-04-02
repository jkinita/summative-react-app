import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import { Button } from "reactstrap";

export default class EditCarAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
      id: Date.now()
    };
  }

  componentDidMount() {
    var carid = this.props.id;
    this.formRef = React.createRef();
    Axios.get(`${UTILS.cars_url}/${carid}`).then(res => {
      console.log(res.data);
      this.setState({ car: res.data[0] });
    });
  }

  saveEdit = e => {
    e.preventDefault();
    alert("edit");
    var formData = new FormData(this.formRef.current);
  };

  render() {
    return (
      <div className="main-content-t">
        <h2 className="vehicle-details "> Edit Vehicle Details</h2>
        <form ref={this.formRef} onSubmit={this.saveEdit}>
          <label>Year</label>
          <input
            id="year"
            type="string"
            name="year"
            placeholder="year"
            value={this.state.car.year}
          />

          <label>Make</label>
          <input
            type="text"
            name="make"
            placeholder="make"
            value={this.state.car.make}
          />

          <label>Model</label>
          <input
            id="model"
            type="text"
            name="model"
            placeholder="model"
            value={this.state.car.model}
          />

          <label>Odometer</label>
          <input
            id="odometer"
            name="odometer"
            placeholder="odometer"
            value={this.state.car.odometer}
          />

          <label>Price</label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="price"
            value={this.state.car.price}
          />
          <input id="id" type="hidden" name="id" value={this.state.id} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
