import React, { useState } from "react";
import styles from "./CustomWebSlider.module.css";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function CustomWebSlider() {
  const data = [
    "/Images/customWebPhotos/sliderIcons/cake.webp",
    "/Images/customWebPhotos/sliderIcons/fly.webp",
    "/Images/customWebPhotos/sliderIcons/butterfly.webp",
    "/Images/customWebPhotos/sliderIcons/hotfire.webp",
    "/Images/customWebPhotos/sliderIcons/laravel.webp",
    "/Images/customWebPhotos/sliderIcons/sideface.webp",
    "/Images/customWebPhotos/sliderIcons/slim.webp",
    "/Images/customWebPhotos/sliderIcons/zee.webp",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.CustomWebSliderSliderArrow} ${styles.CustomWebSliderSliderNext}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.CustomWebSliderSliderArrow} ${styles.CustomWebSliderSliderPrev}`}
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
    slidesToShow: 6,
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
    <div className={styles.CustomWebSliderSliderDiv}>
      <h1>
        Our <span>Tech</span> Stack
      </h1>
      <div className={styles.CustomWebSliderHrLine}>
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
                  ? "CustomWebSlider-slide CustomWebSlider-slide-active"
                  : "CustomWebSlider-slide"
              }
              key={index}
            >
              <div className={styles.CustomSliderIcons}>
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
}
