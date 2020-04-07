import React, { Component } from "react";

export default class BottomSingleCar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.seller}</div>;
  }
}
