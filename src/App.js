import React, { Component } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
export default class App extends Component {
  render() {
    return <div className="App">{<Home />}</div>;
  }
}
