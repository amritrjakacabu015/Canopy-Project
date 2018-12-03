import React, { Component } from "react";
import "../App.css";
class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <h1>
            <center>Search Employee</center>
          </h1>

          <center>
            <input className="Search-Box" type="text" placeholder="Search" />

            <select>
              <option value="SSN">By SSN</option>
              <option value="EID">By Employee Number</option>
            </select>

            <button>Search</button>
          </center>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
