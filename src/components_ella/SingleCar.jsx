import React, { Component } from "react";
import Axios from "axios";
import "../css/shared.css";
import * as UTILS from "../utils";

export default class SingleCar extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();

    console.table(this.props);
  }

  submitComment = (e) => {
    var formData = new FormData(this.formRef.current);

    Axios.post(UTILS.add_comment, formData).then((res) => {
      console.log("force reload");
      this.props.commentAdded();
    });
  };

  render() {
    return <div>dd</div>;
  }
}
