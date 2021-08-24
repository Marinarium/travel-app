import React, { useEffect, useState } from "react";
import AboutSights from "../../components/Sights/AboutSights/AboutSights";
import WidgetCurrency from "../../components/Widgets/WidgetCurrency/WidgetCurrency";

import "./SightsAndCurrency.scss";
import { API_Currency } from "../../services/apiKeys";

export default function SightsAndCurrency({
  iso,
  currencyCode,
  language,
  sights,
  carouselItem,
}) {
  const [currency, setCurrency] = useState([]);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_Currency}/latest/BYN`)
      .then((res) => res.json())
      .then((data) => {
        setCurrency(() => data.conversion_rates);
        setFetching(() => false);
      });
  }, []);

  return (
    <div className="sights-and-currency">
      <AboutSights
        sights={sights}
        language={language}
        carouselItem={carouselItem}
      />
      <aside className="widgets">
        <WidgetCurrency
          iso={iso}
          currency={currency}
          currencyCode={currencyCode}
          language={language}
          isFetching={isFetching}
        />
      </aside>
    </div>
  );
}
