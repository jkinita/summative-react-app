import React, { Component } from "react";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    // comments arrive as props, from parent component
    console.log(this.props);
  }
  render() {
    return (
      <div className="showing-comment-container-e">
        <p style={{ marginTop: "2rem" }} className="my-car-sign-red">
          Comments: {this.props.comments.length}
        </p>
        <div>
          {this.props.comments.map((item, i) => {
            return (
              <div className="showing-comment-e" key={i}>
                <p>{item.comment}</p>
                <p>model: {item.car_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
