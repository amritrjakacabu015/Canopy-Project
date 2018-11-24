import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import EmployeeList from "./components/EmployeeList";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <EmployeeList />
      </div>
    );
  }
}

export default App;
