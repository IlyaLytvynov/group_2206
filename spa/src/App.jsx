import React, { Component } from "react";
import logo from "./logo.svg";
import { LogInForm } from "./components/LogInForm/LogInForm";
import { Dashboard } from "./components/Dashboard/Dashboard";
import "./App.css";

class App extends Component {
  state = {
    accessToken: ""
  };

  onSuccessLogin = accessToken => {
    this.setState({ accessToken });
  };

  render() {
    return (
      <div className="App">
        {this.state.accessToken ? (
          <Dashboard accessToken={this.state.accessToken }/>
        ) : (
          <LogInForm
            title={"Hello world"}
            onSuccessLogin={this.onSuccessLogin}
          />
        )}
      </div>
    );
  }
}

export default App;
