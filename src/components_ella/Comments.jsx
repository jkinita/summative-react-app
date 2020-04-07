import React, { Component } from "react";

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { comments: [] };
  }
  render() {
    return (
      <div>
        <p className="my-car-sign-red">
          Comments: {this.state.comments.length}
        </p>
        <div>
          {this.state.comments.map((item, i) => {
            return (
              <div key={i}>
                <p>{item.comment}</p>
                <p>{item.user_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
