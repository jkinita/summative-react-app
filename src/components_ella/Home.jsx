import * as React from "react";
// import "../App.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/cars`).then(
      res => {
        if (res.data.result === false) {
          this.setState({ result: false });
        } else {
          this.setState({ cars: res.data, result: true });
        }
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Featured cars</h1>
        {this.state.result === false ? <p>no users returned</p> : null}
        <li>{this.props.car_image}</li>
      </div>
    );
  }
}
