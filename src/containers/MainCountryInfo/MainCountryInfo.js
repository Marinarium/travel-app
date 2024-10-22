import React, { useEffect, useState } from "react";

import AboutCountry from "../AboutCountry/AboutCountry";
import WidgetTime from "../../components/Widgets/WidgetTime/WidgetTime";
import WidgetWeather from "../../components/Widgets/WidgetWeather/WidgetWeather";

import "./MainCountryInfo.scss";
import { API_Weather } from "../../services/apiKeys";

export default function MainCountryInfo({description, capital, language, capitalLang}) {
  const [time, setTime] = useState(new Date());
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [icon, setIcon] = useState();
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    if (capital) {
      setFetching(() => false);
      let timerID = setInterval(() => setTime(() => new Date()), 1000);
      return () => clearInterval(timerID);
    }
  }, [capital]);

  useEffect(() => {
    if (capital) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_Weather}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          setTemperature(() => data.main.temp.toFixed(0));
          setHumidity(() => data.main.humidity);
          setWind(() => data.wind.speed.toFixed(0));
          setIcon(() => data.weather[0].icon);
          setFetching(() => false);
        });
    }
  }, [capital]);

  return (
    <div className="main-info">
      <AboutCountry
        description={description}
        language={language}
      />
      <aside className="widgets">
        <WidgetTime
          capital={capital}
          capitalLang={capitalLang}
          time={time}
          language={language}
          isFetching={isFetching}
        />
        <WidgetWeather
          capitalLang={capitalLang}
          language={language}
          capital={capital}
          temperature={temperature}
          humidity={humidity}
          wind={wind}
          icon={icon}
          isFetching={isFetching}
        />
      </aside>
    </div>
  );
}
