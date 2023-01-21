import React, { useState } from "react";
import awards from "./NewsEventSlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const NewsEventSlider = () => {
  const cardsData = [
    {
      title: "Jaipur becoming Silicon Valley",
      image: "/Images/pressmediaPhotos/bbc-news.png",
      link: "",
    },
    {
      title: "Blueberry's New Sub Startup Bottom Funnel",
      image: "/Images/pressmediaPhotos/cnn-logo.png",
      link: "",
    },
    {
      title: "Bottom Funnel New Tech Solution Of Jaipur",
      image: "/Images/pressmediaPhotos/india-today.png",
      link: "",
    },
    {
      title: "Best Mobile App Development Companies 2022 by G2",
      image: "/Images/pressmediaPhotos/g2-crowd.png",
      link: "",
    },
    {
      title: "Bottom Funnel New Tech Solution Of Jaipur",
      image: "/Images/pressmediaPhotos/nbc-social.png",
      link: "",
    },
    {
      title: "Top Mobile App Development Companies India",
      image: "/Images/pressmediaPhotos/themanifest.png",
      link: "",
    },
    {
      title: "Jaipur Next New Silicon Valley Of India",
      image: "/Images/pressmediaPhotos/zee-business.png",
      link: "",
    },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${awards.newsEventSliderSliderArrow} ${awards.newsEventSliderSliderNext}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${awards.newsEventSliderSliderArrow} ${awards.newsEventSliderSliderPrev}`}
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
    <div className={awards.newsEventSliderSliderDiv}>
      <h1>Other Press And Media Releases</h1>
      <Slider {...settings}>
        {cardsData.map((elem, index) => {
          return (
            <div
              className={
                index === slideindex
                  ? "NewsEventSlider-slide NewsEventSlider-slide-active"
                  : "NewsEventSlider-slide"
              }
              key={index}
            >
              <img src={elem.image} alt={elem.title} />
              <h2>{elem.title}</h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
