import React from "react";

import "./Video.scss";

import video from "./video/the-netherlands.mp4";

import { langTextVideo as langText } from "../../services/langComponents";

export default function Video({ language, countryEng }) {
  return (
    <section className="video">
      <h3 className="video__title">
        <span className="accent">{langText.firstH3[language]}</span>{" "}
        {langText.secondH3[language]}
      </h3>
      <div className="video__box">
        <video className="video__player" width="320" height="240" controls>
          <source
            src={`video/${document.location.pathname.slice(1)}.mp4`}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
      </div>
    </section>
  );
}
