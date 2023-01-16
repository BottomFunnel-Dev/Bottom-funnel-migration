import React from "react";
import styles from "./StoriesSection.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayCircle, BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import YoutubeLink from "./YoutubeLink";

const StoriesSection = () => {
  const [videoString, setVideoString] = useState();
  const [toggle, setToggle] = useState(false);
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
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const arr = [
    {
      BrandName: "ScaleForce",
      brandImage: "Images/storiesSection/stories1.png",
      name: "Venus Wills",
      role: "Senior Director of Demand Execution",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Incubeta",
      brandImage: "Images/storiesSection/stories2.png",
      name: "Linda Farr",
      role: "Chief of Staff",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Ranking Carolina",
      brandImage: "Images/storiesSection/stories5.png",
      name: "Tommy Sugishita",
      role: "interective Officer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Studio marche",
      brandImage: "Images/storiesSection/stories4.png",
      name: "Alisha Dunsford",
      role: "Graphic Designer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "HSE",
      brandImage: "Images/storiesSection/stories5.png",
      name: "Chani Thompson",
      role: "Nutrition and Health Coach",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "National Geographic",
      brandImage: "Images/storiesSection/stories2.png",
      name: "Susie murphy",
      role: "Senior Specialist,Audience Selection",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "ScaleForce",
      brandImage: "Images/storiesSection/stories1.png",
      name: "Venus Wills",
      role: "Senior Director of Demand Execution",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Incubeta",
      brandImage: "Images/storiesSection/stories4.png",
      name: "Linda Farr",
      role: "Chief of Staff",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Ranking Carolina",
      brandImage: "Images/storiesSection/stories5.png",
      name: "Tommy Sugishita",
      role: "interective Officer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "Studio marche",
      brandImage: "Images/storiesSection/stories1.png",
      name: "Alisha Dunsford",
      role: "Graphic Designer",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "HSE",
      brandImage: "Images/storiesSection/stories2.png",
      name: "Chani Thompson",
      role: "Nutrition and Health Coach",
      video: "GEsw-rqC-Hk",
    },
    {
      BrandName: "National Geographic",
      brandImage: "Images/storiesSection/stories5.png",
      name: "Susie murphy",
      role: "Senior Specialist,Audience Selection",
      video: "GEsw-rqC-Hk",
    },
  ];

  const handleModal = (item) => {
    console.log(item);
    setVideoString(item.video);
    setToggle(true);
  };
  const handleModalOut = () => {
    setToggle(false);
  };
  return (
    <div className={styles.storiesSection}>
      <h3>What Our clients says about us</h3>
      <Slider {...settings}>
        {arr.map((item, i) => (
          <div key={i} className={styles.mainContentDiv}>
            <IconContext.Provider value={{ className: "playIcon" }}>
              <BsPlayCircle />
            </IconContext.Provider>
            <p className={styles.storiesBrandName}>{item.BrandName}</p>
            <p className={styles.storiesFloating}>{item.BrandName}</p>
            <div className={styles.storiesContentDiv}>
              <div className={styles.storiesImageDiv}>
                <img src={item.brandImage} alt="image" />
              </div>
            </div>
            <div className={styles.bylineContent}>
              <p>{item.name}</p>
              <p className={styles.roleFont}>{item.role}</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div onClick={handleModalOut} className={toggle?"youtubeDiv":"none"}>
              {toggle && <YoutubeLink embedId={videoString} />}
            </div> */}
      <p className={styles.testimonial}>View more testimonials <IconContext.Provider value={{ className: "rightArrow" }}>
        <BsArrowRight />
      </IconContext.Provider></p>

    </div>
  );
};

export default StoriesSection;
