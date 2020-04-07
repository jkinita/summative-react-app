import React, { Component } from "react";
import Axios from "axios";
import "../css/shared.css";
import "../css_ella/view_car_details.css";
import * as UTILS from "../utils";
import { FiShare2 } from "react-icons/fi";

export default class SingleCar extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();

    console.table(this.props);
  }

  submitComment = (e) => {
    var formData = new FormData(this.formRef.current);

    Axios.post(UTILS.add_comment, formData).then(
      (res) => {
        console.log("force reload");
        this.props.commentAdded();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    var carImage = this.props.car_image;
    if (carImage !== undefined && !carImage.startsWith("http"))
      carImage = `http://localhost:4000/assets/${carImage}`;
    return (
      <div className="view-cardetails-container">
        <img src={carImage} alt="carimage" />

        <h1>
          {this.props.make} {this.props.model} ${this.props.price}
        </h1>

        <h1>
          <FiShare2 />
        </h1>

        <div>
          <p className="my-car-sign-red">Leave a comment</p>
          <form action="" ref={this.formRef}>
            <textarea
              name="comment"
              cols="35"
              rows="3"
              placeholder="Your Comment"
            ></textarea>
            <input
              type="hidden"
              name="user_name"
              value={this.props.user_name}
            />
          </form>

          <button className="submit-btn" onClick={this.submitComment}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
