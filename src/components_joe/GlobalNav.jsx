import React, { Component } from "react";
import { Link } from "@reach/router";

const menuStyle = {
  display: "flex",
  width: "30vw",
  margin: "0 auto",
  justifyContent: "space-evenly",
  alignItems: "center",
  listStyleType: "none"
};

const LinkStyle = { color: "grey" };

export default class GlobalNav extends Component {
  componentDidMount() {}

  render() {
    return (
      <nav>
        <ul style={menuStyle}>
          <li>
            <Link style={LinkStyle} to="/all-cars">
              Home
            </Link>
          </li>
          <li>
            <Link style={LinkStyle} to="/search-cars">
              Search
            </Link>
          </li>

          <li>
            <Link style={LinkStyle} to="/add-car">
              Sell your car
            </Link>
          </li>
          <li>
            <Link style={LinkStyle} to="/my-profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
