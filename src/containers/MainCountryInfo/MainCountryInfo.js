import React, {useEffect} from "react";

import AboutCountry from "../AboutCountry/AboutCountry";
import WidgetTime from "../../components/Widgets/WidgetTime/WidgetTime";
import WidgetWeather from "../../components/Widgets/WidgetWeather/WidgetWeather";

import "./MainCountryInfo.scss"


export default function MainCountryInfo({iso, description, capital}) {

  // const [time, setTime] = useState('');
  // const [date, setDate] = useState('');

  useEffect(() => {
    fetch(`http://api.timezonedb.com/v2.1/list-time-zone`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [iso, capital]);

  return (
    <div className="main-info">
      <AboutCountry description={description}/>
      <aside className="widgets">
        <WidgetTime capital={capital}/>
        <WidgetWeather capital={capital}/>
      </aside>
    </div>
  )
}
