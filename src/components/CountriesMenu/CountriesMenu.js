import React from "react";

import CountryCard from "../CountryCard/CountryCard";

import "./CountriesMenu.scss"

export default function CountriesMenu() {
    const countriesInfo = [
        {id: 1, country: 'France', capital: 'Paris', cover: 'images/temp.jpg'},
        {id: 2, country: 'The Netherlands', capital: 'Amsterdam', cover: 'images/temp.jpg'},
        {id: 3, country: 'Germany', capital: 'Berlin', cover: 'images/temp.jpg'},
        {id: 4, country: 'Australia', capital: 'Canberra', cover: 'images/temp.jpg'},
        {id: 5, country: 'Morocco', capital: 'Rabat', cover: 'images/temp.jpg'},
        {id: 6, country: 'Japan', capital: 'Tokyo', cover: 'images/temp.jpg'},
        {id: 7, country: 'Brazil', capital: 'Brasília', cover: 'images/temp.jpg'},
        {id: 8, country: 'Canada', capital: 'Ottawa', cover: 'images/temp.jpg'}
    ];

    const allCards = countriesInfo.map(({id, country, capital, cover}) => {
        return (
            <CountryCard
                key={id}
                country={country}
                capital={capital}
                cover={cover}
            />
        );
    });

    return (
        <section className="countries-menu">
            {allCards}
        </section>
    )
}