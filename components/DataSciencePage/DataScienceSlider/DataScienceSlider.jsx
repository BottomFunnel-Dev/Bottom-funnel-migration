import React, { useState } from "react";
import styles from "./DataScienceSlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export const DataScienceSlider = () => {
  const data = [
    "/Images/DataSciencePhotos/slidericons/torch.webp",
    "/Images/DataSciencePhotos/slidericons/tensor.webp",
    "/Images/DataSciencePhotos/slidericons/scala.webp",
    "/Images/DataSciencePhotos/slidericons/python.webp",
    "/Images/DataSciencePhotos/slidericons/programming.webp",
    "/Images/DataSciencePhotos/slidericons/java.webp",
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.DataScienceSliderSliderArrow} ${styles.DataScienceSliderSliderNext}`}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.DataScienceSliderSliderArrow} ${styles.DataScienceSliderSliderPrev}`}
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
    <div className={styles.DataScienceSliderSliderDiv}>
      <h1>
        Our <span>Tech</span> Stack
      </h1>
      <div className={styles.DataScienceSliderHrLine}>
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
                  ? "DataScienceSlider-slide DataScienceSlider-slide-active"
                  : "DataScienceSlider-slide"
              }
              key={index}
            >
              <Image
                  src={elem}
                  alt={"images"}
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
