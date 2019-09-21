import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasons";
import Spinner from "./spinner";

class App extends React.Component {
  //initialize state as an object with property lat and value null for now.
  state = { lat: null, errMessage: "" };

  //move any function out of Render method so it doesn't get called repeatedly every time Render is called
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //update state with setState method once the current position is returned from the callback
        this.setState({ lat: position.coords.latitude });
        // console.log(position);
      },
      err => {
        //update errMessage state once there is an error and call render to display the message to the user
        this.setState({ errMessage: err.message });
        console.log(err);
        //doing a test for github
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errMessage) {
      return <div>{this.state.errMessage}</div>;
    }
    return <Spinner message="Allow access to location" />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
