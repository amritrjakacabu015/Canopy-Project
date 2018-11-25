import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Authentication from "./components/Authentication";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Authentication />
      </div>
    );
  }
}

export default App;
