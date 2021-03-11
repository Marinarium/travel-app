import React, {Component} from "react";

import FirstScreenOfCountry from "../FirstScreenOfCountry/FirstScreenOfCountry";
import MainCountryInfo from "../../containers/MainCountryInfo/MainCountryInfo";
import SightsCarousel from "../Sights/SightsCaurousel/SightsCarousel";
import SightsAndCurrency from "../../containers/SightsAndCurrency/SightsAndCurrency";
import Video from "../Video/Video";
import Map from "../Map/Map";
import CountryService from "../../services/country-service";
import {getISObyPath} from "../../helpers";

import "./CountryPage.scss"

export default class CountriesPage extends Component {

    countryService = new CountryService();

    currentISOfromPath = getISObyPath();

    state = {
        country: null,
        capital: null,
        description: null,
        coordinates: null,
        lat: null,
        long: null,
        currencyCode: null,
    };

    constructor() {
        super();
        this.updateCountry();
    }

    updateCountry() {
        this.countryService
            .getCountry(this.currentISOfromPath)
            .then((country) => {
                this.setState({
                    country: country[0].country.country_eng,
                    capital: country[0].capital.capital_eng,
                    description: country[0].description.description_eng,
                    coordinates: country[0].capital.coordinates,
                    lat: country[0].capital.coordinates.lat,
                    long: country[0].capital.coordinates.long,
                    currencyCode: country[0].currency_code,
                });
            });
    }

    render() {
        const {iso} = this.props;
        const {country, capital, description, coordinates, lat, long, currencyCode} = this.state;

        return (
            <main className="main">
                <FirstScreenOfCountry country={country} capital={capital}/>
                <MainCountryInfo iso={iso} description={description}/>
                <SightsCarousel/>
                <SightsAndCurrency iso={iso} currencyCode={currencyCode} />
                <Video/>
                <Map coordinates={coordinates} lat={lat} long={long} country={country} capital={capital} iso={iso}/>
            </main>
        )
    }
}
