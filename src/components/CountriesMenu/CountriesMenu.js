import React, {Component} from "react";

import CountryCard from "../CountryCard/CountryCard";
import {UpdateStringForPath} from "../../helpers";
import Loader from "../../components/Loader/Loader";

import "./CountriesMenu.scss";

export default class CountriesMenu extends Component {
  state = {
    country: null,
    capital: null,
    cover: null
  };

  render() {
    const {onCountryChange, countriesInfo, language, countriesReceived} = this.props;

    if (!countriesReceived) {
      return <Loader/>
    } else {
      return <section className="countries-menu">{
        countriesInfo.map(
          ({country, capital, cover, iso}) => {
            return (
              <CountryCard
                key={iso}
                country={country[`country_eng`]}
                countryName={country[`country_${language}`]}
                capital={capital[`capital_${language}`]}
                cover={`images/${UpdateStringForPath(country.country_eng)}/${cover}`}
                iso={iso}
                onCountryChange={() => onCountryChange(country["country_eng"], iso)}
              />
            );
          }
        )}
      </section>
    }
  }
}
