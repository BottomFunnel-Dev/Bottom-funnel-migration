import React from "react";
import styles from "./homeServices.module.css";
import Slider from "react-slick";

const HomeServices = () => {
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
      serviceimage: "/Images/ondemandHome/carpenter.png",
      serviceDescription:
        "Get more business with customized on-demand carpenter services. Carpenters across the city are waiting for you!",
      serviceName: "Carpenter",
    },
    {
      serviceimage: "/Images/ondemandHome/cleaning.png",
      serviceDescription:
        "Increase profits and grow your business with customizable, on-demand home services of cleaning through an App",
      serviceName: "Cleaning",
    },
    {
      serviceimage: "/Images/ondemandHome/washing.png",
      serviceDescription:
        "Beautify your customer relationships by providing your customers a wide range of on demand beauty and care services.",
      serviceName: "Beauty & Salon",
    },
    {
      serviceimage: "/Images/ondemandHome/childcare.png",
      serviceDescription:
        "Show your care for your customers by covering their child care problems with an on-demand home service application",
      serviceName: "Child Care",
    },
    {
      serviceimage: "/Images/ondemandHome/electrical.png",
      serviceDescription:
        "Provide your customers quick, easy and affordable electrician services through our on-demand electrical service solution.",
      serviceName: "Electrical service",
    },
    {
      serviceimage: "/Images/ondemandHome/painting.png",
      serviceDescription:
        "Transform your business with customized on demand home services by your painters through this app.",
      serviceName: "Painting service",
    },
    {
      serviceimage: "/Images/ondemandHome/plumbing.png",
      serviceDescription:
        "Get the plumbing service your business needs, all through our easy-touse platform of on-demand home service app.",
      serviceName: "Plumbing services",
    },
  ];

  return (
    <div className={styles.ondemandHomeServices}>
      <div>
        <Slider {...settings}>
          {homeService.map((item, i) => (
            <div key={i} className={styles.homeServices}>
              <div>
                <img src={item.serviceimage} alt="images" />
                <h5>{item.serviceName}</h5>
                <p>{item.serviceDescription}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeServices;
