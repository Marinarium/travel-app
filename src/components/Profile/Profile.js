import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getAvatar } from "../../services/user-services";

import "./Profile.scss";
import { langTextProfile as langText } from "../../services/langComponents";

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
      this.setState({ avatar: avatarUrl });
    }
  }

  async onSubmit(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const { username } = user;
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
      return <Redirect from="/profile" to="/" />;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const { name } = user;
    return (
      <section className="profile">
        {langText.title[this.props.language]}
        <div>
          <h3 className="profile__subtitle">
            {langText.name[this.props.language]} {name}
          </h3>
          <img
            src={this.state.avatar}
            alt="avatar"
            className="profile__avatar"
          />

          <form onSubmit={this.onSubmit.bind(this)}>
            <label className="profile__change-avatar">
              {langText.changeAvatar[this.props.language]}
            </label>
            <input
              className="profile__avatar-input avatar-input form__input"
              accept=".jpg, .jpeg, .png"
              type="file"
              ref={(input) => {
                this.fileInput = input;
              }}
              placeholder="Change avatar"
            />
            <button
              className="change-avatar profile__change-btn"
              type="submit"
            >
              {langText.changeAvatar[this.props.language]}
            </button>
            <p className="profile__advice">
              {langText.info[this.props.language]}
            </p>
          </form>
        </div>
        <button
          className="profile__logout-btn"
          onClick={() => {
            logOutHandler(this.props);
          }}
        >
          {langText.log[this.props.language]}
        </button>
      </section>
    );
  }
}

const logOutHandler = (props) => {
  localStorage.removeItem("user");
  localStorage.removeItem("Token");
  props.props.history.push("/");
  props.props.history.block();
  props.props.history.go("/");
};
