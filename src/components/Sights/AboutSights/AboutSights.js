import React, {useState} from "react";

import "./AboutSights.scss";
import SightItem from "../SightItem/SightItem";
import Loader from "../../Loader/Loader";

export default function AboutSights({ sights, language, gettingData }) {

  const [allSights, setAllSights] = useState([]);

  if (gettingData) {
    return (
      <Loader />
    )
  } else {
    setAllSights(sights.map((item, i) => {
      return (
        <SightItem
          key={i}
          title={item[`name_${language}`]}
          info={item[`info_${language}`]}
        />
      );
    }))
  }

  return <section className="about-sights">{allSights}</section>;
}
