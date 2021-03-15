import React from "react";
import Slider from "react-slick";

import "./SightsCarousel.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArrow from "./images/arrow-left.svg"
import rightArrow from "./images/arrow-right.svg"
import CarouselItem from "../CarouselItem/CarouselItem";
import {UpdateStringForPath} from "../../../helpers";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "block",
        backgroundColor: "rgba(38, 38, 38, 0.6)",
        transform: "scale(1.7)",
        transitionDuration: "300ms",
        borderRadius: "50%",
        padding: "5px 3.5px 2px 3.5px",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "block",
        backgroundColor: "rgba(38, 38, 38, 0.6)",
        transform: "scale(1.7)",
        transitionDuration: "300ms",
        borderRadius: "50%",
        padding: "5px 3.5px 2px 3.5px",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className="carousel">
        <Slider {...settings}>
          {allSightsImages}
        </Slider>
    </section>
  )
}
