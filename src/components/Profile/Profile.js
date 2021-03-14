import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getAvatar } from "../../services/user-services";

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
      return <Redirect from='/profile' to='/' />;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const { name } = user;
    return (
      <>
        <h1>Profile Settings</h1>
        <div>
          <h2>Name: {name}</h2>
          <img src={this.state.avatar} alt='avatar' />

          <form onSubmit={this.onSubmit.bind(this)}>
            <span>Change avatar</span>
            <input
              accept='.jpg, .jpeg, .png'
              type='file'
              ref={(input) => {
                this.fileInput = input;
              }}
              placeholder='Change avatar'
            />
            <button className='change-avatar' type='submit'>
              Change Avatar
            </button>
          </form>
        </div>
        <button
          className='logout-btn'
          onClick={() => {
            logOutHandler(this.props);
          }}
        >
          Log Out
        </button>
      </>
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
