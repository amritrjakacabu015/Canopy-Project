import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Authentication from "./components/Authentication";
import Employee from "./components/Employee";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Search} exact />
            <Route path="/Employee" component={Employee} exact />
            <Route component={Error} />
            <Search />
            <Authentication />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
