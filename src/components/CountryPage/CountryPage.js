import React, {Component} from "react";

import FirstScreenOfCountry from "../FirstScreenOfCountry/FirstScreenOfCountry";
import MainCountryInfo from "../../containers/MainCountryInfo/MainCountryInfo";
import SightsCarousel from "../Sights/SightsCaurousel/SightsCarousel";
import SightsAndCurrency from "../../containers/SightsAndCurrency/SightsAndCurrency";
import Video from "../Video/Video";
import Map from "../Map/Map";

import "./CountryPage.scss"

export default class CountriesPage extends Component {
    render() {
        const{iso, currency_code} = this.props;
        console.log(currency_code);

        return (
            <main className="main">
                <FirstScreenOfCountry/>
                <MainCountryInfo iso={iso} currency_code={currency_code} />
                <SightsCarousel/>
                <SightsAndCurrency iso={iso} currency_code={currency_code} />
                <Video/>
                <Map/>
            </main>
        )
    }
}
