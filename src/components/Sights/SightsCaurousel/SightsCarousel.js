import React from "react";

import "./SightsCarousel.scss"

import leftArrow from "./images/arrow-left.svg"
import rightArrow from "./images/arrow-right.svg"
import CarouselItem from "../CarouselItem/CarouselItem";
import {UpdateStringForPath} from "../../../helpers";

export default function SightsCarousel({sights, countryEng}) {

    const allSightsImages = sights.map(
        (item, i) => {
            return (
                <CarouselItem
                    key={i}
                    img={`images/${UpdateStringForPath(countryEng)}/${item.img}`}
                    title={item.name_eng}
                    country={countryEng}
                />
            );
        }
    );

    return (
        <section className="carousel">
            <div className="arrows">
                <button className="arrows__btn arrows__btn_left" type="button">
                    <img src={leftArrow} alt="left" className="arrows__img"/>
                </button>
                <button className="arrows__btn arrows__btn_right" type="button">
                    <img src={rightArrow} alt="right" className="arrows__img"/>
                </button>
            </div>
            <ul className="carousel__list">
                {allSightsImages}
            </ul>
        </section>
    )
}
