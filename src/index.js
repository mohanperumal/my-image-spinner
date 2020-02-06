import React, { Component } from 'react';
import { render } from "react-dom";
import BLImage from "./lib";

class App extends Component {

  render() {
    return (
      <>
        <BLImage />
      </>
    )
  }
}

render(<App />, document.getElementById("root"));
