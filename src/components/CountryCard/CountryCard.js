import React from "react";
import {Link} from "react-router-dom";

import "./CountryCard.scss"

export default function CountryCard({id, country, capital, cover}) {

    return (

        <div className="card" key={id}>
            <Link  className="card__link" to={`/${country.toLowerCase().replace(/ /g, '-')}`}>
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