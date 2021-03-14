import React from "react";

import "./LangSelect.scss";

export default function LangSelect(props) {
  return (
    <select
      className="select"
      size="1"
      onChange={(event) => props.onLanguageChange(event.target.value)}
    >
      <option value="eng" selected={props.language === "eng" ? true : false}>
        English
      </option>
      <option value="rus" selected={props.language === "rus" ? true : false}>
        Русский
      </option>
      <option value="bel" selected={props.language === "bel" ? true : false}>
        Беларуская
      </option>
    </select>
  );
}
