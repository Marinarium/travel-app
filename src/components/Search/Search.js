import React, { useState, useEffect } from "react";
import CountryService from "../../services/country-service";
import { UpdateStringForPath } from "../../helpers";
import { Link } from "react-router-dom";

import "./Search.scss";
import icon_search from "./images/icon-search.svg";
import icon_clear from "./images/icon-clear.svg";

export default function Search() {
  const [countries, setCountries] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [findElements, setFindElements] = useState([]);

  const changeInput = (event) => {
    setTextInput(event.target.value);
  };

  const setFocus = () => {
    document.querySelector(".search__input").focus();
  };

  const clearInput = () => {
    setTextInput("");
  };

  useEffect(
    () =>
      new CountryService().getAllCountries().then((data) => setCountries(data)),
    []
  );

  useEffect(() => {
    if (!textInput.length) {
      setFindElements([]);
    } else {
      const find = [];
      countries.map((el, index) => {
        return el.country[`country_${"eng"}`]
          .toLowerCase()
          .indexOf(textInput.toLowerCase()) !== -1
          ? find.push({
              country: el.country[`country_${"eng"}`],
              id: el._id,
              capital: el.capital[`capital_${"eng"}`],
            })
          : "" ||
            el.capital[`capital_${"eng"}`]
              .toLowerCase()
              .indexOf(textInput.toLowerCase()) !== -1
          ? find.push({
              country: el.country[`country_${"eng"}`],
              id: el._id,
              capital: el.capital[`capital_${"eng"}`],
            })
          : "";
      });
      setFindElements(find);
    }
  }, [textInput]);

  return (
    <div>
      <div>
        <form className="search header__search" onLoad={setFocus}>
          <input
            placeholder="Search"
            className="search__input"
            type="text"
            value={textInput}
            onChange={changeInput}
            autoFocus
          />
          <div className="search__line" />
          <div className="buttons">
            <button className="search__button" type="button">
              <img src={icon_search} alt="Click" className="search__img" />
            </button>
            <button
              className="clear__button"
              type="button"
              onClick={clearInput}
            >
              <img src={icon_clear} alt="Click" className="clear__img" />
            </button>
          </div>
        </form>
      </div>
      <div>
        <ul>
          {findElements.map((el) => (
            <li key="el.id">
              <Link onClick={clearInput} to={UpdateStringForPath(el.country)}>
                {el.country}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
