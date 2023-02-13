import React, { useState } from "react";
import "./VettingSlider.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const VettingSlider = () => {
  const data = [
    "Images/VettingPhotos/slidericons/email.webp",
    "Images/VettingPhotos/slidericons/pen.webp",
    "Images/VettingPhotos/slidericons/salesforce.webp",
    "Images/VettingPhotos/slidericons/screen.webp",
    "Images/VettingPhotos/slidericons/setting.webp",
    "Images/VettingPhotos/slidericons/salesforce.webp",
    "Images/VettingPhotos/slidericons/screen.webp",
    "Images/VettingPhotos/slidericons/setting.webp",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="VettingSlider-slider-arrow VettingSlider-slider-next"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="VettingSlider-slider-arrow VettingSlider-slider-prev"
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
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlideindex(next),
  };

  return (
    <div className="VettingSlider-sliderDiv">
      <h1>
        <span>Role</span> which have already been vetted through the above
        process
      </h1>
      <Slider {...settings}>
        {data.map((elem, index) => {
          return (
            <div
              className={
                index === slideindex
                  ? "VettingSlider-slide VettingSlider-slide-active"
                  : "VettingSlider-slide"
              }
              key={index}
            >
              <img src={elem} alt="Company logos" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
