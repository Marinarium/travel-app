import React from "react";

import "./AboutCountry.scss";

const langText = {
  firstH1: { eng: "About ", bel: "Аб ", rus: "О " },
  secondH1: { eng: "Country  ", bel: "Краіне ", rus: "Стране " },
};

export default function AboutCountry({ description, language }) {
  return (
    <section className="about-country">
      <h2 className="about-country__title">
        <span className="accent">{langText.firstH1[language]}</span>{" "}
        {langText.secondH1[language]}
      </h2>
      <div className="about-country__desc">
        <p className="about-country__p">{description}</p>
      </div>
    </section>
  );
}
