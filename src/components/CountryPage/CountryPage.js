import React from "react";

import FirstScreenOfCountry from "../FirstScreenOfCountry/FirstScreenOfCountry";
import MainCountryInfo from "../../containers/MainCountryInfo/MainCountryInfo";
import SightsCarousel from "../Sights/SightsCaurousel/SightsCarousel";
import SightsAndCurrency from "../../containers/SightsAndCurrency/SightsAndCurrency";
import Video from "../Video/Video";
import Map from "../Map/Map";

import "./CountryPage.scss"

export default function CountryPage() {
    return (
        <main className="main">
            <FirstScreenOfCountry/>
            <MainCountryInfo/>
            <SightsCarousel/>
            <SightsAndCurrency/>
            <Video/>
            <Map/>
        </main>
    )
}