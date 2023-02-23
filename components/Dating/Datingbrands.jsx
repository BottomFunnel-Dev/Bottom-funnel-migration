import React from "react";
import Slider from "react-slick";
import styles from "./Datingbrand.module.css";
import Image from "next/image";

export default function Datingbrands() {
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
      serviceimage: "/Images/ondemandHome/carpenter.webp",
      serviceDescription:
        "Get more business with customized on-demand carpenter services. Carpenters across the city are waiting for you!",
      serviceName: "Carpenter",
    },
    {
      serviceimage: "/Images/ondemandHome/cleaning.webp",
      serviceDescription:
        "Increase profits and grow your business with customizable, on-demand home services of cleaning through an App",
      serviceName: " Cleaning",
    },
    {
      serviceimage: "/Images/ondemandHome/washing.webp",
      serviceDescription:
        "Beautify your customer relationships by providing your customers a wide range of on demand beauty and care services.",
      serviceName: "Beauty & Salon",
    },
    {
      serviceimage: "/Images/ondemandHome/cleaning.webp",
      serviceDescription:
        "Show your care for your customers by covering their child care problems with an on-demand home service application",
      serviceName: "Child Care",
    },
    {
      serviceimage: "/Images/ondemandHome/carpenter.webp",
      serviceDescription:
        "Provide your customers quick, easy and affordable electrician services through our on-demand electrical service .",
      serviceName: "Electrical service",
    },
    {
      serviceimage: "/Images/ondemandHome/washing.webp",
      serviceDescription:
        "Transform your business with customized on demand home services by your painters through this.",
      serviceName: "Painting service",
    },
    {
      serviceimage: "/Images/ondemandHome/washing.webp",
      serviceDescription:
        "Get the plumbing service your business needs, all through our easy-touse platform of on-demand home service .",
      serviceName: "Plumbing services",
    },
  ];

  return (
    <div className={styles.szdatingbrand}>
      <h1>Brand</h1>
      <div>
        <Slider {...settings}>
          {homeService.map((item, i) => (
            <div key={i} className={styles.datingbrandhomeServices}>
              <div>
                <Image
                  src={item.serviceimage}
                  alt="image"
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                <h5>{item.serviceName}</h5>
                <p>{item.serviceDescription}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
