import React from "react";
import {Link} from "react-router-dom";

import {UpdateStringForPath} from "../../helpers";

import "./CountryCard.scss"

export default function CountryCard({id, country, capital, cover, onCountryChange, iso}) {

    return (

        <div className="card" key={id} onClick={onCountryChange} iso={iso}>
            <Link  className="card__link" to={UpdateStringForPath(country)}>
            <img src={cover} alt={country} className="card__img"/>
            <div className="card__box">
                <div className="card__content">
                    <h2 className="card__title">{country}</h2>
                    <h3 className="card__subtitle">{capital}</h3>
                </div>
            </div>
            </Link>
        </div>

    )
}