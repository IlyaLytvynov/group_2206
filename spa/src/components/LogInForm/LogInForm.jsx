import React, { Component } from "react";
import { ApiRequest } from "../../utils/ApiRequest";
import "./LogInForm.scss";

export class LogInForm extends Component {
  state = {
    email: "a@a.a",
    password: "123"
  };
  submitHandler = e => {
    e.preventDefault();
    const url = "https://bloggers-crm-dev.herokuapp.com/signin";

    ApiRequest.create(url).post(
      this.state,
      (response) => {
        this.props.onSuccessLogin(response.data.accessToken);
      },
      e => {
        console.log(e);
      }
    );
  };

  changeEmailHandler = e => {
    const email = e.target.value;
    console.log(email);
    this.setState({ email });
  };

  changePasswordHandler = e => {
    const password = e.target.value;
    console.log(password);
    this.setState({ password });
  };

  render() {
    return (
      <form className={"login-form"} onSubmit={this.submitHandler}>
        <h2>{this.props.title}</h2>
        <input
          className={"login-form__input"}
          onChange={this.changeEmailHandler}
          value={this.state.email}
          type="text"
        />
        <input
          className={"login-form__input"}
          type="password"
          value={this.state.password}
          onChange={this.changePasswordHandler}
        />
        <button className={"login-form__btn"}>Login</button>
        {this.state.email}
      </form>
    );
  }
}
