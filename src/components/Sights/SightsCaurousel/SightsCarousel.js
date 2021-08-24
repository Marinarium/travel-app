import React from "react";
import Slider from "react-slick";
import { useRef, useEffect, useState } from "react";

import "./SightsCarousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselItem from "../CarouselItem/CarouselItem";
import { UpdateStringForPath } from "../../../helpers";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const [click, setClick] = useState(false);
  return (
    <div
      className={className}
      style={{
        ...style,
        pointerEvents: click ? "none" : "auto",
        display: "block",
        backgroundColor: "rgba(38, 38, 38, 0.6)",
        transform: "scale(1.7)",
        transitionDuration: "300ms",
        borderRadius: "50%",
        padding: "5px 3.5px 2px 3.5px",
        zIndex: "10",
        position: "absolute",
        right: "10px",
      }}
      onClick={() => {
        setClick(true);
        onClick();
        setTimeout(() => {
          props.setNumberEl((props.numberEl + 1) % props.sights);
          setClick(false);
        }, 500);
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const [click, setClick] = useState(false);
  return (
    <div
      className={className}
      style={{
        ...style,
        pointerEvents: click ? "none" : "auto",
        display: "block",
        backgroundColor: "rgba(38, 38, 38, 0.6)",
        transform: "scale(1.7)",
        transitionDuration: "300ms",
        borderRadius: "50%",
        padding: "5px 3.5px 2px 3.5px",
        zIndex: "10",
        position: "absolute",
        left: "10px",
      }}
      onClick={() => {
        setClick(true);
        onClick();
        setTimeout(() => {
          props.setNumberEl(
            props.numberEl === 0 ? props.sights - 1 : props.numberEl - 1
          );
          setClick(false);
        }, 500);
      }}
    />
  );
}

export default function SightsCarousel({
  sights,
  countryEng,
  slide,
  updateCarousel,
}) {
  const refSlider = useRef();
  const [numberEl, setNumberEl] = useState(0);
  const allSightsImages = sights.map((item, i) => {
    return (
      <CarouselItem
        key={i}
        img={`images/${UpdateStringForPath(countryEng)}/${item.img}`}
        title={item.name_eng}
        country={countryEng}
        slide={slide}
      />
    );
  });
  useEffect(() => {
    updateCarousel(numberEl);
  }, [numberEl, updateCarousel]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    swipe: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    nextArrow: (
      <SampleNextArrow
        updateCarousel={updateCarousel}
        numberEl={numberEl}
        setNumberEl={setNumberEl}
        sights={sights.length}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        updateCarousel={updateCarousel}
        numberEl={numberEl}
        setNumberEl={setNumberEl}
        sights={sights.length}
      />
    ),
  };

  return (
    <section className="carousel">
      <Slider {...settings} ref={refSlider}>
        {allSightsImages}
      </Slider>
    </section>
  );
}
