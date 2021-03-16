import React from "react";

import "./FirstScreenOfCountry.scss";

import { langTextFirstScreenOfCountry as langText } from "../../services/langComponents";

export default function FirstScreenOfCountry({ countryLang, capitalLang, language, gettingData}) {

  return (
    <section className="first-screen-country"
             style={{backgroundImage: `url(images/${document.location.pathname.slice(1)}/cover.jpg)`}}>
      <div className="first-screen-country__box">
        <div className="first-screen-country__content">
          <div className="first-screen-country__frame">
            <h1 className="first-screen-country__title">{!countryLang ? 'Loading...' : countryLang}</h1>
            <h2 className="first-screen-country__subtitle">
              {langText.firstH1[language]}
            </h2>
            <p className="first-screen-country__capital">{!capitalLang ? 'Loading...' : capitalLang}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
