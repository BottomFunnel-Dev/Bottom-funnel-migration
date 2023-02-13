import React, { useState } from "react";
import styles from "./EnterpriseSlider.module.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export const EnterpriseSlider = () => {
  const data = [
    "/Images/enterpriseWebPhotos/ajax.webp",
    "/Images/enterpriseWebPhotos/angular-js.webp",
    "/Images/enterpriseWebPhotos/css.webp",
    "/Images/enterpriseWebPhotos/icon-html5.webp",
    "/Images/enterpriseWebPhotos/icon-jquery.webp",
    "/Images/enterpriseWebPhotos/icon-node-js.webp",
    "/Images/enterpriseWebPhotos/javascript.webp",
    "/Images/enterpriseWebPhotos/jquery-mobile.webp",
    "/Images/enterpriseWebPhotos/react-js.webp",
    "/Images/enterpriseWebPhotos/bootstrap.webp",
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
              <div className={styles.EnterpriseSliderImage}>
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
