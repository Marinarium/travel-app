import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class SignUp extends Component {
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
      return <Redirect from='/sign-in' to='/' />;
    }
    return (
      <form
        action='/'
        onSubmit={(event) => {
          event.preventDefault();
          this.handleSubmit(event);
        }}
      >
        <span className='login-text'>Login:</span>
        <input
          className='login-input'
          name='login'
          type='text'
          value={this.state.value}
          onChange={this.onLoginChange.bind(this)}
        />

        <span className='password-text'>Password:</span>
        <input
          type='text'
          name='password'
          value={this.state.value}
          onChange={this.onPasswordChange.bind(this)}
        />

        <input type='submit' value='Отправить' />
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
  this.props.history.push("/");
  this.props.history.go("/");
}

export { signInHandler };
