import React, { Component } from "react";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    // comments arrive as props, from parent component
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <p className="my-car-sign-red">
          Comments: {this.props.comments.length}
        </p>
        <div>
          {this.props.comments.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "grey",
                  borderBottomWidth: "4px",
                  borderBottom: "2px solid crimson",
                  padding: "5px",
                  margin: "20px",
                }}
              >
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
