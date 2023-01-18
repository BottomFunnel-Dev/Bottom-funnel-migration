import React from "react";
import styles from "./heroSection.module.css";
import Slider from "react-slick";

export const HeroSection = () => {
  var settings = {
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
    // vertical:true,
    // fade: true,
    arrows: true,
    infinite: true,
  };

  const banner = [
    {
      serviceName: "Web Development",
      banner: "/Images/banner/webdev.png",
      desc: "Innovation Starts with us: Get the Web Drilled Now",
      bannerPhone: "/Images/banner/webdev.png",

    },
    {
      serviceName: "Mobile App Development",
      banner: "/Images/banner/appdev.png",
      bannerPhone: "/Images/banner/appdev.png",
      desc: "Shift to small screens; get mobile app to explore more business",
    },
    {
      serviceName: "Software Development",
      banner: "/Images/banner/appdev.png",
      bannerPhone: "/Images/banner/softwaredev.png",
      desc: "Secure Development including BlockChain Development, NFT Development, Coin Development, branding and Crypto Exchange Solution Secured with Penetration Testing and Loading Testing ",
    },
    {
      serviceName: "Digital Marketing",
      banner: "/Images/banner/appdev.png",
      bannerPhone: "/Images/banner/digitalmarketing.png",
      desc: "Shift your business online and expand your business with us",
    },
    {
      serviceName: "Custom Software Development",
      banner: "/Images/banner/appdev.png",
      bannerPhone: "/Images/banner/customsoftware.png",
      desc: "Looking for customised developed enterprise-level solutions?",
    },
  ];

  return (
    <div className={styles.heroSection}>
      {/* <div className="heroCurveImage"></div> */}
      <div className={styles.bannerSlider}>
        <Slider {...settings}>
          {banner.map((item, i) => (
            <div key={i} className={styles.images}>
              <img className={styles.normalSize} src={item.banner} alt="image" />
              <img className={styles.phoneSize} src={item.bannerPhone} alt="image" />
              <div className={styles.bannerText}>
                <h1>{item.serviceName}</h1>
                <p>
                  {item.desc}
                </p>
                <button>Get Started</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


