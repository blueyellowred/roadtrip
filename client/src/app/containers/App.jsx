import React, { Component } from "react";

import Splash from "../components/Splash";
import MapPage from "./MapPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  login() {
    this.setState({ isLoggedIn: true });
  }

  logout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;
    let logButton;
    console.log(this.state);
    if (isLoggedIn) {
      logButton = (
        <a href="/api/logout">
          <button onClick={this.logout}> Logout</button>
        </a>
      );
    } else {
      logButton = (
        <a href="/auth/google">
          <button onClick={() => this.login}> Login With Google</button>
        </a>
      );
    }
    return (
      <div>
        <h2>Road</h2>
        {logButton}
      </div>
    );
  }
}

export default App;
