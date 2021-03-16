import React from "react";

import "./WidgetWeather.scss";

import {langTextWidgetWeather as langText} from "../../../services/langComponents";
import Loader from "../../Loader/Loader";

export default function WidgetWeather({temperature, humidity, wind, icon, capitalLang, language}) {

  let img = "";
  if (icon) {
    img = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  return (
    <section className="wg-weather">
      {
        !icon
          ? <Loader/>
          : <>
            <h3 className="wg-weather__title">
              {langText.weater[language]}
              {capitalLang}
            </h3>
            <div className="wg-weather__temperature">
              <img src={img} alt=""/>
              {temperature}°C
            </div>
            <div className="wg-weather__humidity">
              {" "}
              {langText.humidity[language]}
              {humidity}%
            </div>
            <div className="wg-weather__wind">
              {" "}
              {langText.wind[language]} {wind} {langText.speed[language]}
            </div>
          </>
      }
    </section>
  );
}
