import React, {Component} from "react";
import {Redirect} from "react-router-dom";

import "./SignIn.scss";

export default class SignUp extends Component {
    state = {
        login: null,
        password: null,
    };

    onLoginChange(e) {
        this.setState({login: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    async handleSubmit(event) {
        signInHandler.bind(this)();
    }

    render() {
        if (localStorage.getItem("user")) {
            return <Redirect from='/sign-in' to='/'/>;
        }
        return (
            <form
                className='form form_sign-in'
                action='/'
                onSubmit={(event) => {
                    event.preventDefault();
                    this.handleSubmit(event);
                }}
            >
                <h2 className='form__title'><span className='accent'>Sign</span> in</h2>

                <div className='form__field'>
                    <label className='login-text form__label' htmlFor='login'>L<span className="accent">o</span>gin</label>
                    <input
                        className='login-input form__input'
                        name='login'
                        type='text'
                        id='login'
                        value={this.state.value}
                        onChange={this.onLoginChange.bind(this)}
                    />
                    <div className="form__line"></div>
                </div>

                <div className='form__field'>
                    <label className='password-text form__label' htmlFor='password'>Passw<span className="accent">o</span>rd</label>
                    <input
                        className='password-input form__input'
                        type='password'
                        name='password'
                        id='password'
                        value={this.state.value}
                        onChange={this.onPasswordChange.bind(this)}
                    />
                    <div className="form__line"></div>
                </div>
                <input type='submit' value='Отправить' className="form__btn"/>
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

export {signInHandler};
