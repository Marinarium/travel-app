import React, {useEffect, useState} from "react";
import AboutSights from "../../components/Sights/AboutSights/AboutSights";
import WidgetCurrency from "../../components/Widgets/WidgetCurrency/WidgetCurrency";

import "./SightsAndCurrency.scss"

const CURR_API = 'https://www.nbrb.by/api/exrates/rates?periodicity=0';

export default function SightsAndCurrency() {

  const [currency, setCurrency] = useState([]);
  console.log(currency);

  useEffect(() => {
    fetch(CURR_API)
      .then(res => res.json())
      .then(data => {
        setCurrency([...data])
      })
  }, []);


  return (
    <div className="sights-and-currency">
      <AboutSights/>
      <aside className="widgets">
        <WidgetCurrency/>
      </aside>
    </div>
  )
}
