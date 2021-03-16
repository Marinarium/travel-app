import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./SignIn.scss";

import { langTextSignIn as langText } from "../../services/langComponents";

export default class SignIp extends Component {
  state = {
    login: null,
    password: null,
  };

  onLoginChange(e) {
    this.setState({ login: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  async handleSubmit(event) {
    signInHandler.bind(this)();
  }

  render() {
    if (localStorage.getItem("user")) {
      return <Redirect from="/sign-in" to="/" />;
    }
    return (
      <form
        className="form form_sign-in"
        action="/"
        onSubmit={(event) => {
          event.preventDefault();
          this.handleSubmit(event);
        }}
      >
        {langText.title[this.props.language]}
        <div className="form__field">
          <label className="login-text form__label" htmlFor="login">
            {langText.login[this.props.language]}
          </label>
          <input
            className="login-input form__input"
            name="login"
            type="text"
            id="login"
            value={this.state.value}
            onChange={this.onLoginChange.bind(this)}
          />
          <div className="form__line"></div>
        </div>
        <div className="form__field">
          <label className="password-text form__label" htmlFor="password">
            {langText.password[this.props.language]}
          </label>
          <input
            className="password-input form__input"
            type="password"
            name="password"
            id="password"
            value={this.state.value}
            onChange={this.onPasswordChange.bind(this)}
          />
          <div className="form__line"></div>
        </div>
        <input
          type="submit"
          value={langText.send[this.props.language]}
          className="form__btn"
        />
      </form>
    );
  }
}

async function signInHandler() {
  const formData = new FormData();
  formData.append("login", this.state.login);
  formData.append("password", this.state.password);
  const signIn = await fetch(
    "http://travel-app-backend-rsschool.herokuapp.com/api/auth/signin",
    {
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: formData,
    }
  );
  const res = await signIn.json();
  if (res.accessToken) {
    localStorage.setItem("Token", res.accessToken);
    localStorage.setItem("user", JSON.stringify(res));
  }
  this.props.props.history.push("/");
  this.props.props.history.go("/");
}

export { signInHandler };
