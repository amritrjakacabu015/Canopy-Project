import React, { Component } from "react";
import "../App.css";
class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Search-Div">
          <form>
            <h1>
              <center>Search Employee</center>
            </h1>

            <center>
              <input
                className="Search-Box"
                type="text"
                placeholder="Search Employee"
              />

              <select className="Search-Select">
                <option value="SSN">By SSN</option>
                <option value="EID">By Employee Number</option>
              </select>

              <button className="btn btn-primary">Search</button>
            </center>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
