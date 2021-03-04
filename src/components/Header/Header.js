import React from "react";

import logo from "./images/logo.svg";
import Search from "../Search/Search";
import LangSelect from "../LangSelect/LangSelect";

import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="logo header__logo">
                <a href="#" className="logo__link">
                    <img src={logo} alt="Logo TravelApp" className="logo__img"/>
                </a>
            </div>
            <Search/>
            <LangSelect/>
        </header>
    )
}