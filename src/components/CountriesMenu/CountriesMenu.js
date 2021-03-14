import React, { Component } from "react";

import CountryCard from "../CountryCard/CountryCard";

import "./CountriesMenu.scss";

export default class CountriesMenu extends Component {
  state = {
    country: null,
    capital: null,
    cover: null,
  };

  render() {
    const { onCountryChange, countriesInfo, language } = this.props;

    const allCards = countriesInfo.map(
      ({ id, country, capital, cover, iso }) => {
        return (
          <CountryCard
            key={id}
            country={country[`country_eng`]}
            countryName={country[`country_${language}`]}
            capital={capital[`capital_${language}`]}
            cover={cover}
            iso={iso}
            onCountryChange={() => onCountryChange(country["country_eng"], iso)}
          />
        );
      }
    );

    return <section className="countries-menu">{allCards}</section>;
  }
}
