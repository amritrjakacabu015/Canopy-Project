import React, { Component } from "react";
class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <h1>Search Employee</h1>

          <input type="text" placeholder="Search" />

          <select>
            <option value="SSN">By SSN</option>
            <option value="EID">By Employee Number</option>
          </select>

          <button>Search</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
