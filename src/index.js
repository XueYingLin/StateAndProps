import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/MessageComponent";
import Name from "./components/NameComponent";
import Phone from "./components/PhoneComponent";
import Location from "./components/LocationComponent";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      name: "Ryan",
      phone: "(123)456-7890",
      location: "USA California Bay Area"
    };
  }

  handleChangeFunction = event => {
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <Message propsMessage={this.state.message} />
        <Name propsName={this.state.name} />
        <Phone propsPhone={this.state.phone} />
        <Location propsLocation={this.state.location} />
        <input onChange={this.handleChangeFunction} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
