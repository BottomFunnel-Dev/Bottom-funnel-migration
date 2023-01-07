import React, { useState } from "react";
import styles from "./EnterpriseSlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const EnterpriseSlider = () => {
  const data = [
    "Images/enterpriseWebPhotos/ajax.png",
    "Images/enterpriseWebPhotos/angular-js.png",
    "Images/enterpriseWebPhotos/css.png",
    "Images/enterpriseWebPhotos/icon-html5.png",
    "Images/enterpriseWebPhotos/icon-jquery.png",
    "Images/enterpriseWebPhotos/icon-node-js.png",
    "Images/enterpriseWebPhotos/javascript.png",
    "Images/enterpriseWebPhotos/jquery-mobile.png",
    "Images/enterpriseWebPhotos/react-js.png",
    "Images/enterpriseWebPhotos/bootstrap.png",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.EnterpriseSliderSliderArrow} ${styles.EnterpriseSliderSliderNext}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.EnterpriseSliderSliderArrow} ${styles.EnterpriseSliderSliderPrev}`}
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
    <div className={styles.EnterpriseSliderSliderDiv}>
      <h1>Our <span>Tech</span> Stack</h1>
      <div className={styles.EnterpriseSliderHrLine}>
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
                  ? "EnterpriseSlider-slide EnterpriseSlider-slide-active"
                  : "EnterpriseSlider-slide"
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
