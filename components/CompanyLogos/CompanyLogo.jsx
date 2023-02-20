import React from "react";
import styles from "./companylogo.module.css";
import Slider from "react-slick";
import Image from "next/image";

function SampleNextArrow(props) {
  
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const CompanyLogo = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 9000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.settinghomebannerrotationalbox}>
      <div className={styles.mainslide}>
        <Slider {...settings}>
          <div className={styles.slideDivSection}>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d1krs40fxb67ye.cloudfront.net/Images/companiesLogo/aws-partner.svg"
                alt="companiesLogo/aws-partner.svg"
              />
            </div>
          </div>
          <div className={styles.slideDivSection}>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d1krs40fxb67ye.cloudfront.net/Images/companiesLogo/sap-partner.svg"
                alt="companiesLogo/sap-partner.svg"
              />
            </div>
          </div>
          <div className={styles.slideDivSection}>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d1krs40fxb67ye.cloudfront.net/Images/companiesLogo/google-agency-dev-partner.svg"
                alt="companiesLogo/google-agency-dev-partner.svg"
              />
            </div>
          </div>
          <div className={styles.slideDivSection}>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d1krs40fxb67ye.cloudfront.net/Images/companiesLogo/cloudare-partner.svg"
                alt="companiesLogo/cloudare-partner.svg"
              />
            </div>
          </div>
          <div className={styles.slideDivSection}>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d1krs40fxb67ye.cloudfront.net/Images/companiesLogo/general-electric.svg"
                alt="companiesLogo/general-electric.svg"
              />
            </div>
          </div>
          <div className={styles.slideDivSection}>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="https://d1krs40fxb67ye.cloudfront.net/Images/companiesLogo/squareLogo.svg"
                alt="companiesLogo/squareLogo.svg"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CompanyLogo;
