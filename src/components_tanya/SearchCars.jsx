import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as UTILS from "../utils";
import { navigate } from "@reach/router";
// import React, { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import "../css/shared.css";
import "../css_tanya/style.css";
import "../css_tanya/addcar_form.css";
import "../css_tanya/search.css";

export default class SearchCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      selectedMake: "Select Make",
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

  selectMake = (evt) => {
    var make = evt.target.getAttribute("data-make");
    if (make == null) return;
    this.setState({ selectedMake: make });
    console.log(make);
  };

  render() {
    return (
      <div className="main-content-t">
        <div className="card form-container-t">
          <div className="card-body   pt-0">
            <form onSubmit={this.gotoFilterdCars}>
              <div className=" main-redline-input container">
                <input
                  id="make"
                  type="hidden"
                  value={this.state.selectedMake}
                  name="make"
                  placeholder="Make"
                />

                <UncontrolledDropdown onClick={this.selectMake}>
                  <DropdownToggle caret>
                    {this.state.selectedMake}
                  </DropdownToggle>
                  <DropdownMenu className="select-t">
                    <DropdownItem data-make="Audi">Audi</DropdownItem>
                    <DropdownItem data-make="BMW">BMW</DropdownItem>
                    <DropdownItem data-make="Chevrolet">Chevrolet</DropdownItem>
                    <DropdownItem data-make="Citroen">Citroen</DropdownItem>
                    <DropdownItem data-make="Daihatsu">Daihatsu</DropdownItem>
                    <DropdownItem data-make="Fiat">Fiat</DropdownItem>
                    <DropdownItem data-make="Ford">Ford</DropdownItem>
                    <DropdownItem data-make="Honda">Honda</DropdownItem>
                    <DropdownItem data-make="Jeep">Jeep</DropdownItem>
                    <DropdownItem data-make="Land Rover">
                      Land Rover
                    </DropdownItem>
                    <DropdownItem data-make="Lexus">Lexus</DropdownItem>
                    <DropdownItem data-make="Kia">Kia</DropdownItem>
                    <DropdownItem data-make="Mazda">Mazda</DropdownItem>
                    <DropdownItem data-make="Mercedes-Benz">
                      Mercedes-Benz
                    </DropdownItem>
                    <DropdownItem data-make="Mini">Mini</DropdownItem>
                    <DropdownItem data-make="Mazda">Mazda</DropdownItem>
                    <DropdownItem data-make="Nissan">Nissan</DropdownItem>
                    <DropdownItem data-make="Renault">Renault</DropdownItem>
                    <DropdownItem data-make="Subaru">Subaru</DropdownItem>
                    <DropdownItem data-make="Suzuki">Suzuki</DropdownItem>
                    <DropdownItem data-make="Mazda">Mazda</DropdownItem>
                    <DropdownItem data-make="Toyota">Toyota</DropdownItem>
                    <DropdownItem data-make="Volkswagen">
                      Volkswagen
                    </DropdownItem>
                    <DropdownItem data-make="Volvo">Volvo</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                {/* <select>
                  <option value="0">Select make</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Chevrolet</option>
                  <option value="4">Chrysler</option>
                  <option value="5">Citroen</option>
                  <option value="6">Daihatsu</option>
                  <option value="7">Fiat</option>
                  <option value="8">Ford</option>
                  <option value="9">Honda</option>
                  <option value="10">Jeep</option>
                  <option value="11">Land Rover</option>
                  <option value="12">Lexus</option>
                  <option value="13">Kia</option>
                  <option value="14">Mazda</option>
                  <option value="15">Mercedes-Benz</option>
                  <option value="16">Mini</option>
                  <option value="17">Mitsubishi</option>
                  <option value="18">Nissan</option>
                  <option value="19">Renault</option>
                  <option value="20">Subaru</option>
                  <option value="21">Suzuki</option>
                  <option value="22">Toyota</option>
                  <option value="23"> Volkswagen</option>
                  <option value="24">Volvo</option>
                </select> */}
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
