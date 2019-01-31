import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //initialize state with cunstructor function
  constructor(props) {
    super(props);

    //initialize state as an object with property lat and value null for now.
    this.state = { lat: null, errMessage: "" };

    //move any function out of Render method so it doesn't get called repeatedly every time Render is called
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
      }
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
