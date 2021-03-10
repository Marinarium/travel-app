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
        const{iso} = this.props;

        console.log(iso);

        return (
            <main className="main">
                <FirstScreenOfCountry/>
                <MainCountryInfo iso={iso}/>
                <SightsCarousel/>
                <SightsAndCurrency/>
                <Video/>
                <Map/>
            </main>
        )
    }
}