import React from "react";

import "./WidgetWeather.scss"

export default function WidgetWeather({capital, temperature, humidity, wind, icon}) {

  let img = '';
  if (icon) {
    img = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  return (
    <section className="wg-weather">
      <h3 className="wg-weather__title">Weather in {capital}</h3>
      <div className="wg-weather__temperature">
        <img src={img} alt=""/>
        {temperature}°C
      </div>
      <div className="wg-weather__humidity">humidity {humidity}%</div>
      <div className="wg-weather__wind">wind {wind}m/s</div>
    </section>
  )
}
