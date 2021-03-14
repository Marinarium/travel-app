import React, {useState, useEffect} from "react";

import "./WidgetTime.scss";

export default function WidgetTime({capital, time}) {

  const [continent, setContinent] = useState();

    useEffect(() => {
      if (capital === 'Berlin' || capital === 'Paris' || capital === 'Amsterdam' || capital === 'Rabat') {
        setContinent(() => 'CET')
      }
      if (capital === 'Canberra') setContinent(() => 'Australia/Canberra');
      if (capital === 'Tokyo') setContinent(() => 'Japan');
      if (capital === 'Brasilia') setContinent(() => 'Brazil/East');
      if (capital === 'Ottawa') setContinent(() => 'Canada/Eastern');
    }, [capital]);

  return (
    <section className="wg-time">
      <h3 className="wg-time__title">Time in {capital}</h3>
      <div className="wg-time__date">
        {time.toLocaleString('en-us', {
          timeZone: continent,
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        })}
      </div>
      <div className="wg-time__clock">{time.toLocaleString('en-us', {
        timeZone: continent,
        timeStyle: 'medium',
        hourCycle: 'h24',
      })}</div>
    </section>
  )
}
