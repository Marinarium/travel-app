import React, {Component} from "react";

import CountryCard from "../CountryCard/CountryCard";

import "./CountriesMenu.scss"

export default class CountriesMenu extends Component {

    state = {
        country: null,
        capital: null,
        cover: null
    }


    render() {
        const {onCountryChange} = this.props;

        const countriesInfo = [
            {id: 1, country: 'France', capital: 'name', cover: 'images/temp.jpg', iso:'FRA'},
            {id: 2, country: 'The Netherlands', capital: 'Amsterdam', cover: 'images/temp.jpg', iso:'NLD'},
            {id: 3, country: 'Germany', capital: 'Berlin', cover: 'images/temp.jpg', iso:'DEU'},
            {id: 4, country: 'Australia', capital: 'Canberra', cover: 'images/temp.jpg', iso:'AUS'},
            {id: 5, country: 'Morocco', capital: 'Rabat', cover: 'images/temp.jpg', iso:'MAR'},
            {id: 6, country: 'Japan', capital: 'Tokyo', cover: 'images/temp.jpg', iso:'JPN'},
            {id: 7, country: 'Brazil', capital: 'Brasília', cover: 'images/temp.jpg', iso:'BRA'},
            {id: 8, country: 'Canada', capital: 'Ottawa', cover: 'images/temp.jpg', iso:'CAN'}
        ];

        const allCards = countriesInfo.map(({id, country, capital, cover, iso}) => {
            return (
                <CountryCard
                    key={id}
                    country={country}
                    capital={capital}
                    cover={cover}
                    iso={iso}
                    onCountryChange={() => onCountryChange(country, iso)}
                />
            );
        });

        return (
            <section className="countries-menu">
                {allCards}
            </section>
        );
    }
}
