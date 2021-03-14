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
    countryEng: null,
    country: null,
    countryLang: null,
    capital: null,
    capitalLang: null,
    description: null,
    coordinates: null,
    lat: null,
    long: null,
    currencyCode: null,
    sights: [],
    iso: null,
  };

  constructor() {
    super();
    this.updateCountry();
  }

  updateCountry() {
    this.countryService.getCountry(this.currentISOfromPath).then((country) => {
      this.setState({
        countryEng: country[0].country.country_eng,
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
        sights: country[0].sights,
        iso: country[0].iso,
      });
    });
  }

  componentDidUpdate() {
    this.updateCountry();
  }

  render() {
    const {
      countryEng,
      country,
      capital,
      countryLang,
      capitalLang,
      description,
      coordinates,
      lat,
      long,
      currencyCode,
      sights,
      iso,
    } = this.state;


    return (
      <main className="main">
        <FirstScreenOfCountry
          countryEng={countryEng}
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
        <SightsCarousel
            countryEng={countryEng}
            sights={sights}
            language={this.props.language}
        />
        <SightsAndCurrency
          iso={iso}
          capital={capital}
          capitalLang={capitalLang}
          currencyCode={currencyCode}
          sights={sights}
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
