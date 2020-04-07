import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
// import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import "../css/shared.css";
import "../css_tanya/style.css";
import "../css_tanya/addcar_form.css";
import "../css_tanya/search.css";

export default class SearchCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  gotoFilterdCars = (evt) => {
    evt.preventDefault();
    // var carid = evt.target.getAttribute("data-id");
    var make = document.querySelector("#make").value;
    var sortHigh = document.querySelector("#sorthigh").checked;
    var sortLow = document.querySelector("#sortlow").unchecked;

    navigate(`/filtered-cars/`, {
      state: { make: make, sortHigh: sortHigh, sortLow: sortLow },
    });
  };

  componentDidMount() {
    var sortHigh = document.querySelector("#sorthigh");
    var sortLow = document.querySelector("#sortlow");
    sortHigh.addEventListener("change", function () {
      if (sortLow.checked) {
        sortLow.checked = false;
      }
      if ((sortLow.checked == false) & (sortHigh.checked == false)) {
        sortHigh.checked = true;
      }
    });
    sortLow.addEventListener("change", function () {
      if (sortHigh.checked) {
        sortHigh.checked = false;
      }
      if ((sortLow.checked == false) & (sortHigh.checked == false)) {
        sortLow.checked = true;
      }
    });
  }

  render() {
    return (
      <div className="main-content-t">
        <div className="card form-container-t">
          <div className="card-body   pt-0">
            <form onSubmit={this.gotoFilterdCars}>
              <div className=" main-redline-input  ">
                <input id="make" type="text" name="make" placeholder="Make" />
              </div>

              <div className=" main-redline-input md-form">
                <input
                  className="check-box-input-t"
                  id="sorthigh"
                  type="checkbox"
                />
                <label>Sort high to low</label>
              </div>
              <div className=" main-redline-input md-form">
                <input
                  className="check-box-input-t"
                  id="sortlow"
                  type="checkbox"
                  checked
                />{" "}
                <label>Sort low to high</label>
              </div>

              {/* <input id="id" type="hidden" name="id" value={this.state.id} /> */}

              <Button
                className=" search-btn red-btn-t"
                type="submit"
                //   data-id={cars.id}
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
