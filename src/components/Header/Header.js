
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";
import Search from "../Search/Search";
import LangSelect from "../LangSelect/LangSelect";
import "./Header.scss";
import { getAvatar } from "../../services/user-services";

export default function Header(props) {
  const [isLogin, setLogin] = useState(false);
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setLogin(true);
       getAvatar(setAvatar);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <header className='header'>
      <div className='logo header__logo'>
        <Link to='/' className='logo__link'>
          <img src={logo} alt='Logo TravelApp' className='logo__img' />
        </Link>
      </div>
      <Search page={props.page}
        language={props.language}
        countriesInfo={props.countriesInfo}/>
      <LangSelect onLanguageChange={props.onLanguageChange}
        language={props.language}/>
      {isLogin ? setProfile(avatar) : setSigns()}
    </header>
  );
}
const setProfile = (avatar) => {
  return (
    <Link to='/profile'>
      <img src={avatar} width='40' height='40' alt='' />
      Profile
    </Link>
  );
};

const setSigns = () => {
  return (
    <div className='sign-wrapper'>
      <Link to='/sign-in'>Sign in</Link> /<Link to='/sign-up'>Sign Up</Link>
    </div>
  );
};

