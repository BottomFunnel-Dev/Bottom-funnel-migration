import React from "react";
import styles from "./WebsiteBuilderMiddleComp.module.css";

import Slider from "react-slick";
import Image from "next/image";

export default function WebsiteBuiulderMiddleComp() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const homeService = [
    {
      serviceimage: "/Images/WebsiteBuilderApp/MiddleCompImage1.webp",
      // serviceDescription:
      //   "Get more business with customized on-demand carpenter services. Carpenters across the city are waiting for you!",
      // serviceName: "Carpenter",
    },
    {
      serviceimage: "/Images/WebsiteBuilderApp/MiddleCompImage2.webp",
      // serviceDescription:
      //   "Increase profits and grow your business with customizable, on-demand home services of cleaning through an App",
      // serviceName: " Cleaning",
    },
    {
      serviceimage: "/Images/WebsiteBuilderApp/MiddleCompImage3.webp",
      // serviceDescription:
      //   "Beautify your customer relationships by providing your customers a wide range of on demand beauty and care services.",
      // serviceName: "Beauty & Salon",
    },
    {
      serviceimage: "/Images/WebsiteBuilderApp/MiddleCompImage4.webp",
      // serviceDescription:
      //   "Show your care for your customers by covering their child care problems with an on-demand home service application",
      // serviceName: "Child Care",
    },
    {
      serviceimage: "/Images/WebsiteBuilderApp/MiddleCompImage5.webp",
      // serviceDescription:
      //   "Provide your customers quick, easy and affordable electrician services through our on-demand electrical service solution.",
      // serviceName: "Electrical service",
    },
    {
      serviceimage: "/Images/WebsiteBuilderApp/MiddleCompImage6.webp",
      // serviceDescription:
      //   "Transform your business with customized on demand home services by your painters through this app.",
      // serviceName: "Painting service",
    },
    {
      serviceimage: "/Images/WebsiteBuilderApp/MiddleCompImage1.webp",
      // serviceDescription:
      //   "Get the plumbing service your business needs, all through our easy-touse platform of on-demand home service app.",
      // serviceName: "Plumbing services",
    },
  ];

  return (
    <div className={styles.middleCompParentDiv}>
      <div className={styles.middleCompHeadingOuterDiv}>
        <h1> Build a free website that grows with your business </h1>

        <p>
          {" "}
          Get access to customizable webpage designs and useful tools to build
          your website and grow your ideal business. Easily build a free website
          ti help you get discovered and grow your customer base in style. Start
          today with our powerfull free website builder.
        </p>

        <button className={styles.middleCompHeadingButton}>
          {" "}
          Get started{" "}
        </button>
      </div>

      <div className={styles.middleCompImageSliderOuterDiv}>
        <Slider {...settings}>
          {homeService.map((item, i) => (
            <div key={i} className={styles.middleCompWebsiteImageSlider}>
              <div className={styles.middlecompimageslicker}>
                <Image
                  src={item.serviceimage}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%", objectFit:"contain" }}
                />

                <h5> {item.serviceName} </h5>
                <p> {item.serviceDescription} </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
