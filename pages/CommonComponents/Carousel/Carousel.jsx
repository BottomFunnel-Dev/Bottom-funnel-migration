import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function MultipleItems() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(false);
  const [show5, setshow5] = useState(false);
  const [show6, setshow6] = useState(false);
  const [show7, setshow7] = useState(false);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false, 
  };

 
  return (
    <div className="_maincarouseldiv">
      <Slider {...settings}>
        <div
          className="_carouseldiv1"
          // onMouseEnter={toggleSlide1}
          // onMouseLeave={toggleSlide1}
        >
          <div className="contentDivOndemand"></div>
          <div className="contentDivOndemand">
            <div className="imageDivPart">
              <img src="Images/ondemandimg1.png" alt="" />
            </div>
            <h3>Web Solutions</h3>
          </div>
        </div>
        <div
          className="_carouseldiv1"
          // onMouseEnter={toggleSlide2}
          // onMouseLeave={toggleSlide2}
        >
          <div className="contentDivOndemand"></div>
          <div className="contentDivOndemand">
            <div className="imageDivPart">
              <img src="Images/ondemandimg2.png" alt="" />
            </div>
            <h3>Mobile App Solution</h3>
          </div>
        </div>
        <div
          className="_carouseldiv1"
          // onMouseEnter={toggleSlide3}
          // onMouseLeave={toggleSlide3}
        >
          <div className="contentDivOndemand"></div>
          <div className="contentDivOndemand">
            <div className="imageDivPart">
              <img src="Images/ondemandimg3.png" alt="" />
            </div>
            <h3>Trending Technology Solution</h3>
          </div>
        </div>
        <div
          className="_carouseldiv1"
          // onMouseEnter={toggleSlide4}
          // onMouseLeave={toggleSlide4}
        >
          <div className="contentDivOndemand"></div>
          <div className="contentDivOndemand">
            <div className="imageDivPart">
              <img src="Images/ondemandimg1.png" alt="" />
            </div>
            <h3>UI UX Designing</h3>
          </div>
        </div>
        <div
          className="_carouseldiv1"
          // onMouseEnter={toggleSlide4}
          // onMouseLeave={toggleSlide4}
        >
          <div className="contentDivOndemand"></div>
          <div className="contentDivOndemand">
            <div className="imageDivPart">
              <img src="Images/ondemandimg1.png" alt="" />
            </div>
            <h3>Food Delivery App</h3>
          </div>
        </div>
        <div
          className="_carouseldiv1"
          // onMouseEnter={toggleSlide4}
          // onMouseLeave={toggleSlide4}
        >
          <div className="contentDivOndemand"></div>
          <div className="contentDivOndemand">
            <div className="imageDivPart">
              <img src="Images/ondemandimg1.png" alt="" />
            </div>
            <h3>CRM Solutions</h3>
          </div>
        </div>
        <div
          className="_carouseldiv1"
          // onMouseEnter={toggleSlide4}
          // onMouseLeave={toggleSlide4}
        >
          <div className="contentDivOndemand"></div>
          <div className="contentDivOndemand">
            <div className="imageDivPart">
              <img src="Images/ondemandimg1.png" alt="" />
            </div>
            <h3>Beauti and Salon App</h3>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
