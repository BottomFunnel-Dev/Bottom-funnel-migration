import React, { useState } from "react";
import styles from "./VRSlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export const VRSlider = () => {
  const data = [
    "/Images/VRPhotos/cryengine.webp",
    "/Images/VRPhotos/havok.webp",
    "/Images/VRPhotos/maya.webp",
    "/Images/VRPhotos/nividia.webp",
    "/Images/VRPhotos/photoshop.webp",
    "/Images/VRPhotos/substance.webp",
    "/Images/VRPhotos/unity.webp",
    "/Images/VRPhotos/unreal-engine.webp",
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
            <div className={styles.VRSliderImages}>
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
