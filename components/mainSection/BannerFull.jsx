import React, { useState } from "react";
import styles from "./bannerFull.module.css";
import Slider from "react-slick";
import { MobileBanner } from "./BannerAnimations/MobileBanner";
import { SoftwareBanner } from "./BannerAnimations/SoftwareBanner";
import { DigitalMarketing } from "./BannerAnimations/DigitalMarketing";

import { PopupForm } from "../PopupForm/PopupForm";

export default function BannerFull() {
  const banner = [
    {
      title: "Mobile App Development",
      bannerImage:
        "https://d1krs40fxb67ye.cloudfront.net/Images/banner/app dev.gif",
      desc: "Connect to your customers in real time with the latest in mobile app development.",
      background:
        "https://d1krs40fxb67ye.cloudfront.net/Images/banner/mobilefull.webp",
    },
    {
      title: "Software Product Development",
      bannerImage:
        "https://d1krs40fxb67ye.cloudfront.net/Images/banner/customsde.gif",
      desc: "Turn your company's opportunities into realities with enterprise-level custom software development.",
      background:
        "https://d1krs40fxb67ye.cloudfront.net/Images/banner/softwarefull.webp",
    },
    {
      title: "Digital Marketing",
      bannerImage:
        "https://d1krs40fxb67ye.cloudfront.net/Images/banner/digitalmarketing.gif",
      desc: "Break through the noise and grow your business with the power of digital marketing",
      background:
        "https://d1krs40fxb67ye.cloudfront.net/Images/banner/dmfull.webp",
    },
    {
      title: "Web Development",
      bannerImage:
        "https://d1krs40fxb67ye.cloudfront.net/Images/banner/web dev.gif",
      desc: "Developing websites that develop your business",
      background:
        "https://d1krs40fxb67ye.cloudfront.net/Images/banner/webdevfull.webp",
    },
  ];

  var settings = {
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 300,
    swipeToSlide: true,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.bannerparentdivhomemodule}>
      <Slider {...settings}>
        {banner.map((item, i) => (
          <div key={i} style={{ background: "blue" }}>
            <div
              className={styles.bannerslidebackground}
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundRepeat: "no-repeat",
                // backgroundPosition: "center",
                backgroundSize: "100% 100%",
              }}
            >
              {item.title === "Mobile App Development" && <MobileBanner />}
              {item.title === "Web Development" && <SoftwareBanner />}

              {item.title === "Digital Marketing" && <DigitalMarketing />}

              <div className={styles.bannertextcontentfull}>
                <h1> {item.title} </h1>
                <p> {item.desc} </p>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  {" "}
                  Get Started{" "}
                </button>

                <div
                  className="modal fade"
                  id={`${item.title}`}
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div>
                        <PopupForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
