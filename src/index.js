import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from state!"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
