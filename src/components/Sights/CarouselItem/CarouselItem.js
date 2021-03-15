import React from "react";

export default function CarouselItem({img, title}) {
    return (
        <div
          className="carousel__item"
        >
            <img src={img} alt={title} className="carousel__img"/>
        </div>
    );
}
