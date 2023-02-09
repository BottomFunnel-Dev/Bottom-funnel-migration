import React, { useState } from "react";
import styles from "./CryptoDevSlider.module.css";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const CryptoDevSlider = () => {
  const data = [
    "/Images/CryptoDevPhotos/slidericons/angular.webp",
    "/Images/CryptoDevPhotos/slidericons/bitcoin.webp",
    "/Images/CryptoDevPhotos/slidericons/dadsa.webp",
    "/Images/CryptoDevPhotos/slidericons/dynamo.webp",
    "/Images/CryptoDevPhotos/slidericons/etherum.webp",
    "/Images/CryptoDevPhotos/slidericons/fabric.webp",
    "/Images/CryptoDevPhotos/slidericons/go.webp",
    "/Images/CryptoDevPhotos/slidericons/hbase.webp",
    "/Images/CryptoDevPhotos/slidericons/java.webp",
    "/Images/CryptoDevPhotos/slidericons/keras.webp",
    "/Images/CryptoDevPhotos/slidericons/react.webp",
    "/Images/CryptoDevPhotos/slidericons/ripple.webp",
    "/Images/CryptoDevPhotos/slidericons/stanford.webp",
    "/Images/CryptoDevPhotos/slidericons/tensor.webp",
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
              <Image
                  src={elem}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
