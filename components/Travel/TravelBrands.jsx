import React from "react";
import styles from "./Travelbrand.module.css";
import Slider from "react-slick";


export default function TravelBrands() {
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

  const homeServices = [
    {
      serviceimage: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/ondemandHome/carpenter.png",
      serviceDescription:
        "Get more business with customized on-demand carpenter services. Carpenters across the city are waiting for you!",
      serviceName: "Carpenter",
    },
    {
      serviceimage: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/ondemandHome/cleaning.png",
      serviceDescription:
        "Increase profits and grow your business with customizable, on-demand home services of cleaning through an App",
      serviceName: " Cleaning",
    },
    {
      serviceimage: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/ondemandHome/washing.png",
      serviceDescription:
        "Beautify your customer relationships by providing your customers a wide range of on demand beauty and care services.",
      serviceName: "Beauty & Salon",
    },
    {
      serviceimage: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/ondemandHome/cleaning.png",
      serviceDescription:
        "Show your care for your customers by covering their child care problems with an on-demand home service application",
      serviceName: "Child Care",
    },
    {
      serviceimage: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/ondemandHome/carpenter.png",
      serviceDescription:
        "Provide your customers quick, easy and affordable electrician services through our on-demand electrical service .",
      serviceName: "Electrical service",
    },
    {
      serviceimage: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/ondemandHome/washing.png",
      serviceDescription:
        "Transform your business with customized on demand home services by your painters through this.",
      serviceName: "Painting service",
    },
  ];

  return (
    <div className={styles.travelServices}>
      <div className={styles.travelbrandheading}>
        <h1>Brands</h1>
        <p>
          Bottom Funnel is a mobile app company that has been in the market for
          more than three years. We have helped many companies build their
          user-friendly travel apps and have received prizes for our work.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {homeServices.map((item, i) => (
            <div key={i} className={styles.travelhomeServices}>
              <div>
                <img src={item.serviceimage} alt="image" />
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
