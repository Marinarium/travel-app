import React, {useEffect, useState} from "react";

import AboutCountry from "../AboutCountry/AboutCountry";
import WidgetTime from "../../components/Widgets/WidgetTime/WidgetTime";
import WidgetWeather from "../../components/Widgets/WidgetWeather/WidgetWeather";

import "./MainCountryInfo.scss"
import {API_Weather} from "../../services/apiKeys";

export default function MainCountryInfo({iso, description, capital}) {

  // const [time, setTime] = useState('');
  // const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [icon, setIcon] = useState();
/*
  useEffect(() => {
    if (capital) {
      fetch(`http://api.timezonedb.com/v2.1/list-time-zone`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
    }
  }, [iso, capital]);*/

  useEffect(() => {
    if (capital) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_Weather}&units=metric`)
        .then(res => res.json())
        .then(data => {
          setTemperature(() => (data.main.temp).toFixed(0));
          setHumidity(() => data.main.humidity);
          setWind(() => data.wind.speed);
          setIcon(() => data.weather[0].icon)
        })
    }
  }, [capital]);

  return (
    <div className="main-info">
      <AboutCountry description={description}/>
      <aside className="widgets">
        <WidgetTime capital={capital}/>
        <WidgetWeather
          capital={capital}
          temperature={temperature}
          humidity={humidity}
          wind={wind}
          icon={icon}
        />
      </aside>
    </div>
  )
}
