import React from "react";

import "./WidgetWeather.scss"

export default function WidgetWeather() {
    return (
        <section className="wg-weather">
            <h3 className="wg-weather__title">Weather in Amsterdam</h3>
            <div className="wg-weather__temperature">☁ -1.05°C</div>
            <div className="wg-weather__humidity">humidity 93%</div>
            <div className="wg-weather__wind">wind 4 m/s</div>
        </section>
    )
}
