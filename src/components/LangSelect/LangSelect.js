import React from "react";

import "./LangSelect.scss";

export default function LangSelect(props) {
  return (
    <select
      className="select"
      size="1"
      onChange={(event) => props.onLanguageChange(event.target.value)}
      defaultValue={props.language}
    >
      <option value="eng">English</option>
      <option value="rus">Русский</option>
      <option value="bel">Беларуская</option>
    </select>
  );
}
