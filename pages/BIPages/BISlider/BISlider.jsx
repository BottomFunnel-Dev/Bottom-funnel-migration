import React, { useState } from "react";
import styles from "./BISlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const BISlider = () => {
  const data = [
    "Images/BIPhotos/slidericons/anaconda.png",
    "Images/BIPhotos/slidericons/docker.png",
    "Images/BIPhotos/slidericons/jupyter.png",
    "Images/BIPhotos/slidericons/learn.png",
    "Images/BIPhotos/slidericons/matplotlib.png",
    "Images/BIPhotos/slidericons/pandas.png",
    "Images/BIPhotos/slidericons/python.png",
    "Images/BIPhotos/slidericons/pytorch.png",
    "Images/BIPhotos/slidericons/r-prgram.png",
    "Images/BIPhotos/slidericons/seaborn.png",
    "Images/BIPhotos/slidericons/tensor.png",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.BISliderSliderArrow} ${styles.BISliderSliderNext}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.BISliderSliderArrow} ${styles.BISliderSliderPrev}`}
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
    <div className={styles.BISliderSliderDiv}>
      <h1>
        Our <span>Tech</span> Stack
      </h1>
      <div className={styles.BISliderHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <Slider {...settings}>
        {data.map((elem, index) => {
          return (
            <div
              className={
                index === slideindex
                  ? "BISlider-slide BISlider-slide-active"
                  : "BISlider-slide"
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
