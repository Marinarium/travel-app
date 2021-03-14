import React, { Component } from "react";
import { signInHandler } from "../SignIn/SignIn";
import { Redirect } from "react-router-dom";
export default class SignUp extends Component {
  state = {
    login: null,
    password: null,
    name: null,
    avatar: null,
  };
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  async signUpHandler() {
    const formData = new FormData();
    formData.append("login", this.state.login);
    formData.append("password", this.state.password);
    formData.append("name", this.state.name);
    formData.append("avatar", this.fileInput.files[0]);
    const signUp = await fetch(
      "http://travel-app-backend-rsschool.herokuapp.com/api/auth/signup",
      {
        method: "POST",
        body: formData,
      }
    );
    if (signUp.status === 200) {
      signInHandler.bind(this)();
    }
  }

  onLoginChange(e) {
    this.setState({ login: e.target.value });
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  async handleSubmit(event) {
    this.signUpHandler();
  }

  render() {
    if (localStorage.getItem("user")) {
      return <Redirect from='/sign-up' to='/' />;
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
          type='text'
          value={this.state.value}
          onChange={this.onLoginChange.bind(this)}
        />

        <span className='name-text'>Name:</span>
        <input
          type='text'
          value={this.state.value}
          onChange={this.onNameChange.bind(this)}
        />

        <span className='password-text'>Password:</span>
        <input
          type='text'
          value={this.state.value}
          onChange={this.onPasswordChange.bind(this)}
        />
        <span className='avatar-text'>Avatar:</span>
        <input
          className='avatar-input'
          accept='.jpg, .jpeg, .png'
          type='file'
          ref={(input) => {
            this.fileInput = input;
          }}
        />
        <input type='submit' value='Отправить' />
      </form>
    );
  }
}
