import React from "react";
import AboutSights from "../../components/Sights/AboutSights/AboutSights";
import WidgetCurrency from "../../components/Widgets/WidgetCurrency/WidgetCurrency";

import "./SightsAndCurrency.scss"

export default function SightsAndCurrency() {
    return (
        <div className="sights-and-currency">
            <AboutSights/>
            <aside className="widgets">
                <WidgetCurrency/>
            </aside>
        </div>
    )
}