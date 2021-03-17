import React from "react";

import "./AboutSights.scss";
import SightItem from "../SightItem/SightItem";

export default function AboutSights({ sights, language, carouselItem }) {
  const allSights = sights.map((item, i) => {
    return (
      <SightItem
        styleses={carouselItem === i ? { display: "block" } : { display: "none" }}
        key={i}
        title={item[`name_${language}`]}
        info={item[`info_${language}`]}
      />
    );
  });

  return <section className="about-sights">{allSights}</section>;
}
