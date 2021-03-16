import React, {useState, useEffect} from "react";

import "./WidgetTime.scss";

import {langTextWidgetTime as langText} from "../../../services/langComponents";
import Loader from "../../Loader/Loader";

export default function WidgetTime({capital, time, language, capitalLang}) {
  const [continent, setContinent] = useState();
  const nowTime = time.toLocaleString("en-us", {
    timeZone: continent,
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  useEffect(() => {
    if (
      capital === "Berlin" ||
      capital === "Paris" ||
      capital === "Amsterdam" ||
      capital === "Rabat"
    ) {
      setContinent(() => "CET");
    }
    if (capital === "Canberra") setContinent(() => "Australia/Canberra");
    if (capital === "Tokyo") setContinent(() => "Japan");
    if (capital === "Brasilia") setContinent(() => "Brazil/East");
    if (capital === "Ottawa") setContinent(() => "Canada/Eastern");
  }, [capital]);

  return (
    <section className="wg-time">
      {
        !time
          ? <Loader/>
          : <>
            <h3 className="wg-time__title">
              {langText.timeH1[language]} {capitalLang}
            </h3>
            <div className="wg-time__date">
              {langText.weekDay[nowTime.split(",")[0]][language]},
              {time.toLocaleString("en-us", {
                timeZone: continent,
                day: "numeric",
              })}
              {langText.monthDay[nowTime.split(",")[1].split(" ")[1]][language]}
            </div>
            <div className="wg-time__clock">
              {time.toLocaleString("en-us", {
                timeZone: continent,
                timeStyle: "medium",
                hourCycle: "h24",
              })}
            </div>
          </>
      }
    </section>
  );
}
