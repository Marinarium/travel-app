import React from "react";

import "./SightsCarousel.scss"

import image01 from "./images/01.jpg"
import image02 from "./images/02.jpg"
import image03 from "./images/03.jpg"
import leftArrow from "./images/arrow-left.svg"
import rightArrow from "./images/arrow-right.svg"

export default function SightsCarousel() {
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
                <li className="carousel__item">
                    <img src={image01} alt="sight" className="carousel__img"/>
                </li>
                <li className="carousel__item carousel__item_active">
                    <img src={image02} alt="sight" className="carousel__img"/>
                </li>
                <li className="carousel__item">
                    <img src={image03} alt="sight" className="carousel__img"/>
                </li>
                <li className="carousel__item">
                    <img src={image01} alt="sight" className="carousel__img"/>
                </li>
                <li className="carousel__item">
                    <img src={image02} alt="sight" className="carousel__img"/>
                </li>
                <li className="carousel__item">
                    <img src={image03} alt="sight" className="carousel__img"/>
                </li>
            </ul>
        </section>
    )
}