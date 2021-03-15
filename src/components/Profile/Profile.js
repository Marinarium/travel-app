import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {getAvatar} from "../../services/user-services";

import "./Profile.scss";

export default class Profile extends Component {
    state = {
        username: null,
        avatar: null,
    };

    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    // async getAvatar() {
    //   const user = JSON.parse(localStorage.getItem("user"));
    //   const { username } = user;
    //   const req = await fetch(
    //     `http://localhost:3000/users/get-avatar/${username}`,
    //     {
    //       method: "GET",
    //     }
    //   );
    //   const res = await req.json();
    //   const avatarUrl = res[0].avatar;
    //   this.setState({ avatar: avatarUrl });
    // }
    async componentDidMount() {
        if (localStorage.getItem("user")) {
            const avatarUrl = await getAvatar.bind(this)();
            this.setState({avatar: avatarUrl});
        }
    }

    async onSubmit(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        const {username} = user;
        const formData = new FormData();
        formData.append("login", username);
        formData.append("avatar", this.fileInput.files[0]);
        await fetch(
            "http://travel-app-backend-rsschool.herokuapp.com/api/user/change-avatar",
            {
                method: "POST",
                body: formData,
            }
        );
    }

    render() {
        if (!localStorage.getItem("user")) {
            return <Redirect from='/profile' to='/'/>;
        }

        const user = JSON.parse(localStorage.getItem("user"));
        const {name} = user;
        return (
            <section className='profile'>
                <h2 className='profile__title'><span className="accent">Profile</span> Settings</h2>
                <div>
                    <h3 className='profile__subtitle'>Name: {name}</h3>
                    <img src={this.state.avatar} alt='avatar' className='profile__avatar'/>

                    <form onSubmit={this.onSubmit.bind(this)}>
                        <label className='profile__change-avatar'>Change avatar</label>
                        <input
                            className='profile__avatar-input avatar-input form__input'
                            accept='.jpg, .jpeg, .png'
                            type='file'
                            ref={(input) => {
                                this.fileInput = input;
                            }}
                            placeholder='Change avatar'
                        />
                        <button className='change-avatar' type='submit' className='profile__change-btn'>
                            Change Avatar
                        </button>
                        <p className="profile__advice">Please, reload this page to see your new avatar</p>
                    </form>
                </div>
                <button
                    className='profile__logout-btn'
                    onClick={() => {
                        logOutHandler(this.props);
                    }}
                >
                    Log Out
                </button>
            </section>
        );
    }
}

const logOutHandler = (props) => {
    localStorage.removeItem("user");
    localStorage.removeItem("Token");
    props.history.push("/");
    props.history.block();
    props.history.go("/");
};
