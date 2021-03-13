import React, {useState, useEffect} from "react";

import "./WidgetTime.scss";

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function WidgetTime({capital, time, weekDay, numDate, month}) {

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
      <div className="wg-time__date">{dayNames[weekDay]}, {numDate} {months[month]}</div>
      <div className="wg-time__clock">{time.toLocaleString('eu-US', {
        timeZone: continent,
        timeStyle: 'medium',
        hourCycle: 'h24',
      })}</div>
    </section>
  )
}
