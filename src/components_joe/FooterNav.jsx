import React, { Component } from "react";
import { Link } from "@reach/router";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCar,
  AiOutlineUser,
} from "react-icons/ai";
import "../css_joe/globalnav.css";

export default class GlobalNav extends Component {
  componentDidMount() {}

  render() {
    return (
      <nav className="fixed-container">
        <ul className="nav-options">
          <li>
            <Link to="/all-cars">
              <AiOutlineHome size={33} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search-cars">
              <AiOutlineSearch size={32} />
              <span>Search</span>
            </Link>
          </li>

          <li>
            <Link to="/add-car">
              <AiOutlineCar size={32} />
              <span>Sell</span>
            </Link>
          </li>
          <li>
            <Link to="/my-profile">
              <AiOutlineUser size={32} />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
