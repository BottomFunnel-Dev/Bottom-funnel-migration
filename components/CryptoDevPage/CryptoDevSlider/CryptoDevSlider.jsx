import React, { useState } from "react";
import styles from "./CryptoDevSlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const CryptoDevSlider = () => {
  const data = [
    "Images/CryptoDevPhotos/slidericons/angular.png",
    "Images/CryptoDevPhotos/slidericons/bitcoin.png",
    "Images/CryptoDevPhotos/slidericons/dadsa.png",
    "Images/CryptoDevPhotos/slidericons/dynamo.png",
    "Images/CryptoDevPhotos/slidericons/etherum.png",
    "Images/CryptoDevPhotos/slidericons/fabric.png",
    "Images/CryptoDevPhotos/slidericons/go.png",
    "Images/CryptoDevPhotos/slidericons/hbase.png",
    "Images/CryptoDevPhotos/slidericons/java.png",
    "Images/CryptoDevPhotos/slidericons/keras.png",
    "Images/CryptoDevPhotos/slidericons/react.png",
    "Images/CryptoDevPhotos/slidericons/ripple.png",
    "Images/CryptoDevPhotos/slidericons/stanford.png",
    "Images/CryptoDevPhotos/slidericons/tensor.png",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.CryptoDevSliderSliderArrow} ${styles.CryptoDevSliderSliderNext}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.CryptoDevSliderSliderArrow} ${styles.CryptoDevSliderSliderPrev}`}
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
    <div className={styles.CryptoDevSliderSliderDiv}>
      <h1>
        Our <span>Tech</span> Stack
      </h1>
      <div className={styles.CryptoDevSliderHrLine}>
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
                  ? "CryptoDevSlider-slide CryptoDevSlider-slide-active"
                  : "CryptoDevSlider-slide"
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
