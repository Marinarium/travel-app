import React, {useEffect, useState} from "react";
import AboutSights from "../../components/Sights/AboutSights/AboutSights";
import WidgetCurrency from "../../components/Widgets/WidgetCurrency/WidgetCurrency";

import "./SightsAndCurrency.scss"
import {API_Currency} from "../../services/apiKeys";

export default function SightsAndCurrency({iso, currencyCode}) {

  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_Currency}/latest/BYN`)
      .then(res => res.json())
      .then(data => {
        setCurrency(data.conversion_rates)
      })
  }, []);

  return (
    <div className="sights-and-currency">
      <AboutSights/>
      <aside className="widgets">
        <WidgetCurrency
          iso={iso}
          currency={currency}
          currencyCode={currencyCode}
        />
      </aside>
    </div>
  )
}

