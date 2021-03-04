import React from "react";

import './Search.scss';
import icon from "./images/icon-search.svg";


export default function Search() {
    return (
        <form className="search header__search">
            <input placeholder="Search" className="search__input" />
            <div className="search__line"></div>
                <button className="search__button" type="button">
                    <img src={icon} alt="Click" className="search__img" />
                </button>
        </form>
    )
}