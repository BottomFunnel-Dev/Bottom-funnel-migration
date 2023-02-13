import React, { useState } from "react";
import clients from "./ClientSlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export const ClientSlider = ({ data }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${clients.clientSliderSliderArrow} ${clients.clientSliderSliderNext}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${clients.clientSliderSliderArrow} ${clients.clientSliderSliderPrev}`}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const [slideindex, setSlideindex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlideindex(next),
  };

  return (
    <div className={clients.clientSliderSliderDiv}>
      <Slider {...settings}>
        {data.map((elem, index) => {
          return (
            <div
              className={
                index === slideindex
                  ? "clientSliderSlide clientSliderSlide-active"
                  : clients.clientSliderSlide
              }
              key={index}
            >
              <Image
              src={elem}
              alt={"companyimage"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "fit-content" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
