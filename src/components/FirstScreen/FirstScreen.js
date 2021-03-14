import React from "react";
import "./FirstScreen.scss";

import { langTextFirstScreen as langText } from "../../services/langComponents";

export default function FirstScreen(props) {
  return (
    <section className="first-screen">
      <div className="first-screen__box">
        <div className="first-screen__content">
          <h1 className="main-title first-screen__title">
            {langText.firstH1[props.language]}
            <div className="accent">
              {langText.secondH1[props.language]}
            </div>{" "}
            {langText.thirdH1[props.language]}
          </h1>
          <p className="first-screen__moto">
            {langText.paragraph[props.language]}
          </p>
        </div>
      </div>
    </section>
  );
}
