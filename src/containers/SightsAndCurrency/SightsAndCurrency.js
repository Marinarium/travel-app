import React from "react";
import AboutSights from "../../components/Sights/AboutSights/AboutSights";
import WidgetCurrency from "../../components/Widgets/WidgetCurrency/WidgetCurrency";

import "./SightsAndCurrency.scss"

export default function SightsAndCurrency({iso, currencyCode}) {
    return (
        <div className="sights-and-currency">
            <AboutSights/>
            <aside className="widgets">
                <WidgetCurrency iso={iso} currencyCode={currencyCode}/>
            </aside>
        </div>
    )
}