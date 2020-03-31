import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
// import EditButton from "./EditButton";
import "bootstrap/dist/css/bootstrap.css";

export default class MyCarDetails extends Component {
  // removeData = evt => {
  //     // var index = evt.target.getAttribute("data-uuid");
  //     Axios.delete(`http://localhost:4000/api/cars/${this.props._id}`).then(
  //       res => {
  //         console.log(res.data);

  //       }
  //     );
  //   };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     book: {}
  //   };
  // }
  // //we getting info from jason through server
  // componentDidMount() {
  //   Axios.get(`${UTILS.cars_url}/${this.props._id}`).then(
  //     res => {
  //       this.setState({ car: res.data });
  //     },
  //     error => {
  //       console.log("error = ", error);
  //     }
  //   );
  // }

  // gotoEditCar = e => {
  //   navigate(`/edit/:id`);
  //   console.log("go to edit");
  // };

  render() {
    return (
      <div>
        <h3> Sell your car</h3>
        <div>
          <div className="my-car-image-container"></div>
          <div className="my-car-row">{this.state.car.make}</div>
          <div className="my-car-row">{this.state.car.model}</div>
          <div className="my-car-row">{this.state.car.price}</div>
          <div className="my-car-row">{this.state.car.year}</div>

          <div className="my-car-row">Odometer{this.state.car.odometer}</div>
          <div className="my-car-row">{this.state.car._id}</div>

          <div className="my-car-row">Jane Doe</div>

          <div className="button-container">
            <Button onClick={this.gotoEditCar}>Edit</Button>
            <Button
            // onClick={this.removeCar}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div>
<EditButton writer_id={this.props.uuid} />
<button
  className="add-button btn btn-outline-danger"
  uuid={this.props.uuid}
  onClick={this.removeEvent}
>
  Delete
</button>
</div> */
}
