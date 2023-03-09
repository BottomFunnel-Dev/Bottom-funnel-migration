import React from "react";
import styles from "./StoriesSection.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayCircle, BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Image from "next/image";

export default function StoriesSection() {
  const settings = {
    infinite: true,
    accessibility: false,
    autoplaySpeed: 0,
    speed: 10000,
    slidesToScroll: 1,
    initialSlide: 5,
    draggable: false,
    touchMove: false,
    slidesToShow: 5,
    pauseOnHover: false,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          draggable: true,
          touchMove: true,
        },
      },
    ],
  };

  const arr = [
    {
      BrandName: "ScaleForce",
      brandImage:
        "/Images/storiesSection/stories1.webp",
      name: "Venus Wills",
      role: "Senior Director of Demand Execution",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Incubeta",
      brandImage:
        "/Images/storiesSection/stories2.webp",
      name: "Linda Farr",
      role: "Chief of Staff",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Ranking Carolina",
      brandImage:
        "/Images/storiesSection/stories5.webp",
      name: "Tommy Sugishita",
      role: "interective Officer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Studio marche",
      brandImage:
        "/Images/storiesSection/stories4.webp",
      name: "Alisha Dunsford",
      role: "Graphic Designer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "HSE",
      brandImage:
        "/Images/storiesSection/stories5.webp",
      name: "Chani Thompson",
      role: "Nutrition and Health Coach",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "National Geographic",
      brandImage:
        "/Images/storiesSection/stories2.webp",
      name: "Susie murphy",
      role: "Senior Specialist,Audience Selection",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "ScaleForce",
      brandImage:
        "/Images/storiesSection/stories1.webp",
      name: "Venus Wills",
      role: "Senior Director of Demand Execution",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Incubeta",
      brandImage:
        "/Images/storiesSection/stories4.webp",
      name: "Linda Farr",
      role: "Chief of Staff",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Ranking Carolina",
      brandImage:
        "/Images/storiesSection/stories5.webp",
      name: "Tommy Sugishita",
      role: "interective Officer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Studio marche",
      brandImage:
        "/Images/storiesSection/stories1.webp",
      name: "Alisha Dunsford",
      role: "Graphic Designer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "HSE",
      brandImage:
        "/Images/storiesSection/stories2.webp",
      name: "Chani Thompson",
      role: "Nutrition and Health Coach",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "National Geographic",
      brandImage:
        "/Images/storiesSection/stories5.webp",
      name: "Susie murphy",
      role: "Senior Specialist,Audience Selection",
      video: "GEsw-rqC-Hk",
    },
  ];

  return (
    <div className={styles.storiesSection}>
      <h3>What Our clients says about us</h3>
      <Slider {...settings}>
        {arr.map((item, i) => (
          <div key={i} className={styles.mainContentDiv}>
            <IconContext.Provider value={{ className: styles.playIcon }}>
              <BsPlayCircle />
            </IconContext.Provider>
            <p className={styles.storiesBrandName}>{item.BrandName}</p>
            <p className={styles.storiesFloating}>{item.BrandName}</p>
            <div className={styles.storiesContentDiv}>
              <div className={styles.storiesImageDiv}>
                <Image
                  src={item.brandImage}
                  alt={"images"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className={styles.bylineContent}>
              <p>{item.name}</p>
              <p className={styles.roleFont}>{item.role}</p>
            </div>
          </div>
        ))}
      </Slider>
      <p className={styles.testimonial}>
        View more testimonials{" "}
        <IconContext.Provider value={{ className: styles.rightArrow }}>
          <BsArrowRight />
        </IconContext.Provider>
      </p>
    </div>
  );
}
