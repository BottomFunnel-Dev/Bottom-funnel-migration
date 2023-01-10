import React from "react";
import styles from "./eventsprovicedservices.module.css";
export const EventsProvidedServices = () => {
  const providedservices = [
    {
      serviceName: "Corporate Events",
      serviceImage: "/Images/Eventpage/serviceImage1.png",
      serviceDescription:
        "Our team of event app developers makes sure that your employees have access to timely and relevant information about upcoming events.We are responsible for monitoring the crowd and making sure that everything goes according to plan.",
    },
    {
      serviceName: "Conferences",
      serviceImage: "/Images/Eventpage/serviceImage2.png",
      serviceDescription:
        "From providing personalized assistance to participants and speakers to keeping visitors up-to-date on the latest happenings during the conference and keeping the brand image of our company in tact.",
    },
    {
      serviceName: "Trade shows",
      serviceImage: "/Images/Eventpage/serviceImage3.png",
      serviceDescription:
        "We offer a mobile app development solution that is perfect for events and conferences. By using our event marketing solution, you will be able to showcase your products and services, and keep your visitors engaged!",
    },
    {
      serviceName: "Sports and entertainment",
      serviceImage: "/Images/Eventpage/serviceImage4.png",
      serviceDescription:
        "if you're looking for a way to engage with your audience no matter where they are standing, we've got you covered there too! Our apps are easy to use and fun to navigate, so everyone is sure to have an amazing time with their favorite stars. ",
    },
    {
      serviceName: "Custom event schedule app development",
      serviceImage: "/Images/Eventpage/serviceImage5.png",
      serviceDescription:
        "You can never have too many ways to stay informed, especially when it comes to events! That's why we're proud to offer our customers a range of options for keeping track of all your favorite happenings. ",
    },
  ];

  return (
    <div className={styles.providedservices}>
      {providedservices.map((item, index) => (
        <div key={index} className={styles.providedservicesCard}>
          <div className={styles.providedImage}>
            <img src={item.serviceImage} alt="images" />
          </div>
          <div className={styles.providedText}>
            <h5>{item.serviceName}</h5>
            <p>{item.serviceDescription}</p>
          </div>
        </div>
      ))}
      <div className={styles.extraadiv}></div>
    </div>
  );
};
