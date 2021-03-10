import React, {useEffect, useState} from "react";
import AboutSights from "../../components/Sights/AboutSights/AboutSights";
import WidgetCurrency from "../../components/Widgets/WidgetCurrency/WidgetCurrency";

import "./SightsAndCurrency.scss"

const CURR_API = 'https://v6.exchangerate-api.com/v6/0b3adebd155aed780b095eb2/latest/BYN';

export default function SightsAndCurrency({iso}) {

  const [currency, setCurrency] = useState([]);
  console.log(currency);

  useEffect(() => {
    fetch(CURR_API)
      .then(res => res.json())
      .then(data => {
        setCurrency(data.conversion_rates)
      })
  }, []);


  return (
    <div className="sights-and-currency">
      <AboutSights/>
      <aside className="widgets">
        <WidgetCurrency iso={iso} currency={currency}/>
      </aside>
    </div>
  )
}

