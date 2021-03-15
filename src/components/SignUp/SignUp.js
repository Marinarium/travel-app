import React, {Component} from "react";
import {signInHandler} from "../SignIn/SignIn";
import {Redirect} from "react-router-dom";

import "./SignUp.scss";

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
        this.setState({login: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    onNameChange(e) {
        this.setState({name: e.target.value});
    }

    async handleSubmit(event) {
        this.signUpHandler();
    }

    render() {
        if (localStorage.getItem("user")) {
            return <Redirect from='/sign-up' to='/'/>;
        }
        return (
            <form
                className='form form_sign-up'
                action='/'
                onSubmit={(event) => {
                    event.preventDefault();
                    this.handleSubmit(event);
                }}
            >
                <h2 className='form__title'><span className='accent'>Sign</span> up</h2>

                <div className='form__field'>
                    <label className='login-text form__label' htmlFor='login'>L<span className="accent">o</span>gin</label>
                    <input
                        className='login-input form__input'
                        type='text'
                        id='login'
                        value={this.state.value}
                        onChange={this.onLoginChange.bind(this)}
                    />
                    <div className="form__line"></div>
                </div>


                <div className='form__field'>
                    <label className='name-text form__label' htmlFor='name'>N<span className="accent">a</span>me</label>
                    <input
                        className='password-input form__input'
                        type='text'
                        id='name'
                        value={this.state.value}
                        onChange={this.onNameChange.bind(this)}
                    />
                    <div className="form__line"></div>
                </div>

                <div className='form__field'>
                    <label className='password-text form__label' htmlFor='password'>Passw<span className="accent">o</span>rd</label>
                    <input
                        className='password-input form__input'
                        type='password'
                        id='password'
                        minLength='6'
                        value={this.state.value}
                        onChange={this.onPasswordChange.bind(this)}
                    />
                    <div className="form__line"></div>
                </div>

                <div className='form__field form__field_without-line'>
                    <label className='avatar-text form__label' htmlFor='avatar'>Av<span className="accent">a</span>tar</label>
                    <input
                        id='avatar'
                        className='avatar-input form__input'
                        accept='.jpg, .jpeg, .png'
                        type='file'
                        ref={(input) => {
                            this.fileInput = input;
                        }}
                    />
                </div>
                <input type='submit' value='Отправить' className='form__btn'/>
            </form>
        );
    }
}
