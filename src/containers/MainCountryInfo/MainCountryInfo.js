import React from "react";

import AboutCountry from "../AboutCountry/AboutCountry";
import WidgetTime from "../../components/Widgets/WidgetTime/WidgetTime";
import WidgetWeather from "../../components/Widgets/WidgetWeather/WidgetWeather";

import "./MainCountryInfo.scss"

export default function MainCountryInfo({description}) {
    return (
        <div className="main-info">
            <AboutCountry description={description}/>
            <aside className="widgets">
                <WidgetTime/>
                <WidgetWeather/>
            </aside>
        </div>
    )
}
