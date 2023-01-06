import styles from "./Seotrusted.module.css";
import React from "react";
import Slider from "react-slick";
// import tata from "../../ImageSection/Tata.jpg";
// import hdfc from "../../ImageSection/HDFC.jpg";
// import airtel from "../../ImageSection/Airtel.jpg";
// import { partnerData } from './SeopartnerData';

const Trusted = ({ partnerLogo }) => {
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
    <div className={styles._SeoTrusted}>
      <div className={styles._SeoTrustedtext} >
        <h2 className={styles.globalbrands}>Trusted By Global Brands</h2>
      </div>
      <div className={styles._SeoTrustedCarousel}>
        <Slider {...settings}>
          {partnerLogo.logo.map((item, index) => (
            <div className={styles.mainlogoDiv} key={index}>
              <div key={index} className={styles._Seobrandimg}>
                <img src={item.partnerImage} alt="image.jpg" />
              </div>
            </div>
          ))}

        </Slider>
      </div>
    </div>
  );
};
export default Trusted;
