import React, { Component } from "react";

import FirstScreenOfCountry from "../FirstScreenOfCountry/FirstScreenOfCountry";
import MainCountryInfo from "../../containers/MainCountryInfo/MainCountryInfo";
import SightsCarousel from "../Sights/SightsCaurousel/SightsCarousel";
import SightsAndCurrency from "../../containers/SightsAndCurrency/SightsAndCurrency";
import Video from "../Video/Video";
import Map from "../Map/Map";
import CountryService from "../../services/country-service";
import { getISObyPath } from "../../helpers";
import "./CountryPage.scss";

export default class CountriesPage extends Component {
  countryService = new CountryService();
  currentISOfromPath = getISObyPath();

  state = {
    country: null,
    countryLang: null,
    capital: null,
    capitalLang: null,
    description: null,
    coordinates: null,
    lat: null,
    long: null,
    currencyCode: null,
    iso: null,
  };

  constructor() {
    super();
    this.updateCountry();
  }

  updateCountry() {
    this.countryService.getCountry(this.currentISOfromPath).then((country) => {
      this.setState({
        country: country[0].country[`country_eng`],
        capital: country[0].capital[`capital_eng`],
        countryLang: country[0].country[`country_${this.props.language}`],
        capitalLang: country[0].capital[`capital_${this.props.language}`],
        description:
          country[0].description[`description_${this.props.language}`],
        coordinates: country[0].capital.coordinates,
        lat: country[0].capital.coordinates.lat,
        long: country[0].capital.coordinates.long,
        currencyCode: country[0].currency_code,
        iso: country[0].iso,
      });
    });
  }

  componentDidUpdate() {
    this.updateCountry();
  }

  render() {
    const {
      country,
      capital,
      countryLang,
      capitalLang,
      description,
      coordinates,
      lat,
      long,
      currencyCode,
      iso,
    } = this.state;

    return (
      <main className="main">
        <FirstScreenOfCountry
          country={country}
          capital={capital}
          countryLang={countryLang}
          capitalLang={capitalLang}
          language={this.props.language}
        />
        <MainCountryInfo
          iso={iso}
          description={description}
          capital={capital}
          capitalLang={capitalLang}
          language={this.props.language}
        />
        <SightsCarousel language={this.props.language} />
        <SightsAndCurrency
          iso={iso}
          capital={capital}
          capitalLang={capitalLang}
          currencyCode={currencyCode}
          language={this.props.language}
        />
        <Video language={this.props.language} />
        <Map
          coordinates={coordinates}
          lat={lat}
          long={long}
          country={country}
          capital={capital}
          countryLang={countryLang}
          capitalLang={capitalLang}
          iso={iso}
        />
      </main>
    );
  }
}
