import React, { useState } from "react";
import styles from "./VRSlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const VRSlider = () => {
  const data = [
    "Images/VRPhotos/cryengine.png",
    "Images/VRPhotos/havok.png",
    "Images/VRPhotos/maya.png",
    "Images/VRPhotos/nividia.png",
    "Images/VRPhotos/photoshop.png",
    "Images/VRPhotos/substance.png",
    "Images/VRPhotos/unity.png",
    "Images/VRPhotos/unreal-engine.png",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.VRSliderSliderArrow} ${styles.VRSliderSliderNext}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.VRSliderSliderArrow} ${styles.VRSliderSliderPrev}`}
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
    <div className={styles.VRSliderSliderDiv}>
      <h1>All VR Software We Use</h1>
      <div className={styles.VRSliderHrLine}>
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
                  ? "VRSlider-slide VRSlider-slide-active"
                  : "VRSlider-slide"
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
