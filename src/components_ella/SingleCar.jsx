import React, { Component } from "react";
import Axios from "axios";
import "../css/shared.css";
import "../css_ella/view_car_details.css";
import * as UTILS from "../utils";

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
    if (carImage !== undefined && !carImage.startsWith("http")) {
      carImage = `${UTILS.assets_url}${carImage}`;
    }

    return (
      <div className="view-cardetails-container-e">
        <img src={carImage} alt="carimage" />

        <div>
          <div className="view-cardetails-text-e">
            <h1>
              {this.props.make} {this.props.model}
            </h1>
            <h1>${this.props.price}</h1>
          </div>

          <div>
            <p className="my-car-sign-red">Leave a comment</p>
            <div className="comment-container-e">
              <form action="" ref={this.formRef}>
                <textarea
                  name="comment"
                  cols="35"
                  rows="3"
                  placeholder="Your Comment"
                ></textarea>
                <input type="hidden" name="car_name" value={this.props.model} />
              </form>

              <button className="submit-btn-e" onClick={this.submitComment}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
