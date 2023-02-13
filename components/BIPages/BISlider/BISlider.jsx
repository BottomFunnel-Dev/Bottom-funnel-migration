import React, { useState } from "react";
import styles from "./BISlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export const BISlider = () => {
  const data = [
    "/Images/BIPhotos/slidericons/anaconda.webp",
    "/Images/BIPhotos/slidericons/docker.webp",
    "/Images/BIPhotos/slidericons/jupyter.webp",
    "/Images/BIPhotos/slidericons/learn.webp",
    "/Images/BIPhotos/slidericons/matplotlib.webp",
    "/Images/BIPhotos/slidericons/pandas.webp",
    "/Images/BIPhotos/slidericons/python.webp",
    "/Images/BIPhotos/slidericons/pytorch.webp",
    "/Images/BIPhotos/slidericons/r-prgram.webp",
    "/Images/BIPhotos/slidericons/seaborn.webp",
    "/Images/BIPhotos/slidericons/tensor.webp",
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
            <div className={styles.BISliderImage}>
              <Image
                    src={elem}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
            </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
