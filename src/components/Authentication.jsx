import React, { Component } from "react";
class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: {}
    };
  }

  componentDidMount() {
    fetch("https://api.webhris.com/auth/token/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:
        "username=CodeChallengeApiUser&password=CpLk0UMcy%5EG3ZU%23T8*J%23%40YfLTZyTZnzWi4%40U1ELn%5E3&grant_type=password"
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    const token = items.access_token;
    console.log(token);
    if (!isLoaded) {
      return <div>Checking Access... Please Wait...</div>;
    } else {
      return (
        <div>
          <b>Access Granted</b>
        </div>
      );
    }
  }
}

export default Authentication;
