import React from "react";

import "./CardOfCountry.scss"

export default function CardOfCountry({id, country, capital, cover}) {

    return (
        <div className="card" key={id}>
            <img src={cover} alt={country} className="card__img"/>
            <div className="card__box">
                <div className="card__content">
                    <h2 className="card__title">{country}</h2>
                    <h3 className="card__subtitle">{capital}</h3>
                </div>
            </div>
        </div>
    )
}