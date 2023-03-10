import styles from "./Seotrusted.module.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Head from "next/head";

export const Trusted = ({ partnerLogo }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    initialSlide: 0,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>

      <div className={styles.SeoTrusted}>
        <div className={styles.SeoTrustedtext} style={partnerLogo.bgcolors}>
          <h2 className="globalbrands"> Trusted By Global Brands </h2>
        </div>

        <div className={styles.SeoTrustedCarousel}>
          <Slider {...settings}>
            {partnerLogo.logo.map((item, index) => (
              <div className={styles.mainlogoDiv} key={index}>
                <div key={index} className={styles.Seobrandimg}>
                  <Image
                    src={item.partnerImage}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Trusted;
