import React from "react";
import styles from "./Brand.module.css";
import Slider from "react-slick";

export default function Brand() {
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
      serviceimage: "Images/fitness/fitnesstracking.png",
      serviceDescription:
        "We provide you to keep track of your exercises and activities in an easy way. Through our apps keeps record of everything from sleep patterns to calories. ",
      serviceName: "Fitness Tracking Apps",
    },
    {
      serviceimage: "Images/fitness/nutrition.png",
      serviceDescription:
        "With our calorie-counting and nutrition apps, you'll be able to accurately track your meals and snacks so that you can make sure you're getting the right amount of nutrients in every bite.",
      serviceName: "Nutrition & Diet Apps",
    },
    {
      serviceimage: "Images/fitness/wearables.png",
      serviceDescription:
        "With our fitness app development services, you'll be able to track many more aspects of your health from an app that was built with you in mind.",
      serviceName: "Tracking & Wearable Apps",
    },
    {
      serviceimage: "Images/fitness/body.jpg",
      serviceDescription:
        "With Bodybuilding & Workout Apps, you can keep track of your progress and stay motivated while doing something you love.",
      serviceName: "Bodybuilding & Workout Apps",
    },
    {
      serviceimage: "Images/fitness/meditation.png",
      serviceDescription:
        "We are developing apps with great features and customer-centric approach. From meditation & yoga to weight loss & nutrition apps, we have covered them all.",
      serviceName: "Meditation & Yoga Apps",
    },
    {
      serviceimage: "Images/fitness/zymTracker.png",
      serviceDescription:
        "We offer additional features like real-time updates regarding your progress as well as turn-by-turn GPS directions for indoor exercises so that you can be at your best even when you're busy!",
      serviceName: "Exercise & Gym Tracker Apps",
    },

  ];

  return (
    <div className={styles.fitnessMain}>
      <h1>Create custom workout apps that are tailored to meet your specific needs</h1>
      <div className={styles.fitondemandHomeServices}>
        <div>
          <Slider {...settings}>
            {homeService.map((item, i) => (
              <div key={i} className={styles.fithomeServices}>
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
    </div>
  );
}
