import React from "react";
import "./companylogo.css";
import Slider from "react-slick";

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
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slideDivSection">
          <div>
            <img src="Images/companiesLogo/aws-partner.svg" alt="" />
          </div>
        </div>
        <div className="slideDivSection">
          <div>
            <img src="Images/companiesLogo/sap-partner.svg" alt="" />
          </div>
        </div>
        <div className="slideDivSection">
          <div>
            <img
              src="Images/companiesLogo/google-agency-dev-partner.svg"
              alt=""
            />
          </div>
        </div>
        <div className="slideDivSection">
          <div>
            <img src="Images/companiesLogo/cloudare-partner.svg" alt="" />
          </div>
        </div>
        <div className="slideDivSection">
          <div>
            <img src="Images/companiesLogo/general-electric.svg" alt="" />
          </div>
        </div>
        <div className="slideDivSection">
          <div>
            <img src="Images/companiesLogo/squareLogo.svg" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CompanyLogo;
