import React, { Component } from "react"
import { findRenderedComponentWithType } from "react-dom/test-utils";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    // comments arrive as props, from parent component
    console.log(this.props);
  }

  //Joe's code -------------------------->
  render() {
    return (
      <div className="container">
        <h2 className="text-red">
          Comments: {this.props.comments.length}
        </h2>
        <div>
          {this.props.comments.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  color: "white",
                  borderBottomWidth: "3px",
                  borderBottom: "2px solid #D92546",
                  padding: "5px",
                }}

                className="container mb-4 mt-4 p-3"
              >
                <p>{item.comment}</p>
              </div>
            );
          })}
        </div>
        <div 
         style={{
          height: "8.1rem",
        }}
        className="footer-spacing"></div>
      </div>
      
    );
  }
}
