import React, { useState, useEffect } from "react";
import CountryService from "../../services/country-service";
import { UpdateStringForPath } from "../../helpers";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./Search.scss";
import icon_search from "./images/icon-search.svg";
import icon_clear from "./images/icon-clear.svg";

export default function Search(props) {
  const [countries, setCountries] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [findElements, setFindElements] = useState([]);
  const [activeElements, setActiveElements] = useState(0);

  const history = useHistory();

  const changeInput = (event) => {
    setTextInput(event.target.value);
  };

  const setFocus = () => {
    document.querySelector(".search__input").focus();
  };

  const clearInput = () => {
    setTextInput("");
  };

  const historyPush = () => {
    history.push(
      UpdateStringForPath(
        findElements.length ? findElements[activeElements].country : ""
      )
    );
    clearInput();
    setActiveElements(0);
  };

  const onKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      e.preventDefault();
      historyPush();
    } else if (e.key === "ArrowDown") {
      setActiveElements(
        activeElements + 1 > findElements.length - 1 ? 0 : activeElements + 1
      );
    } else if (e.key === "ArrowUp") {
      setActiveElements(
        activeElements - 1 < 0 ? findElements.length - 1 : activeElements - 1
      );
    }
  };

  useEffect(() => {
    new CountryService().getAllCountries().then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    if (!textInput.length) {
      setFindElements([]);
    } else {
      const find = [];
      countries.map((el) => {
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
    setActiveElements(0);
  }, [textInput]);

  return (
    <div className={props.page === "country" ? "search_noVisibility" : ""}>
      <div>
        <form className="search header__search" onLoad={setFocus}>
          <input
            placeholder="Search"
            className="search__input"
            type="text"
            value={textInput}
            onChange={changeInput}
            autoFocus
            onKeyDown={onKeyDown}
          />
          <div className="search__line" />
          <div className="buttons">
            <button
              className="search__button"
              type="button"
              onClick={historyPush}
            >
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
          {findElements.map((el, index) => (
            <li
              key={el.id}
              className={activeElements === index ? "activeCoutrySearch" : ""}
            >
              <Link onClick={clearInput} to={UpdateStringForPath(el.country)}>
                {`${el.country} - ${el.capital}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
