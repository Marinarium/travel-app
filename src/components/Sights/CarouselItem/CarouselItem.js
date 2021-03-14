import React from "react";

export default function CarouselItem({img, title}) {
    return (
        <li className="carousel__item">
            <img src={img} alt={title} className="carousel__img"/>
        </li>
    );
}
