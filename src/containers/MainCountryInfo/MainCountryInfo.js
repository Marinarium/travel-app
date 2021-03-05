import React from "react";

import AboutCountry from "../AboutCountry/AboutCountry";
import WidgetTime from "../../components/Widgets/WidgetTime/WidgetTime";
import WidgetWeather from "../../components/Widgets/WidgetWeather/WidgetWeather";

import "./MainCountryInfo.scss"

export default function MainCountryInfo() {
    return (
        <div className="main-info">
            <AboutCountry/>
            <aside className="widgets">
                <WidgetTime/>
                <WidgetWeather/>
            </aside>
        </div>
    )
}
