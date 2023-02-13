import styles from "./Seotrusted.module.css";
import React from "react";
import Slider from "react-slick";

import Image from "next/image";

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
  };

  return (
    <div className={styles.SeoTrusted}>
      <div className={styles.SeoTrustedtext} style={partnerLogo.bgcolors}>
        <h2 className={styles.globalbrands}> Trusted By Global Brands </h2>
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
                        style={{ width: "100%", height: "100%"}}
                        /> 
              </div>
            </div>
          ))}

        </Slider>
      </div>
    </div>
  );
};
export default Trusted;
