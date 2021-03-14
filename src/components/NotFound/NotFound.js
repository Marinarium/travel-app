import { Link } from "react-router-dom";

import "./NotFound.scss";

import { langTextError as langText } from "../../services/langComponents";

export default function NotFound({ language }) {
  return (
    <main className="main">
      <div className="notFound">
        <h1 className="main-title">{langText.error[language]}</h1>
        <h3>{langText.info[language]}</h3>
        <Link to="/">{langText.back[language]}</Link>
      </div>
    </main>
  );
}
