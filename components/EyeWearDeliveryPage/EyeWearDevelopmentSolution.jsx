import React from 'react';
import styles from "./EyeWearDevelopmentSolution.module.css";

export const EyeWearDevelopmentSolution = () => {
  const EyeWeardeliverydata = [
    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/5860108 3.png",
      htxt: "Real-Time Traking",
      stxt: "Real-time tracking is an exciting technology that allows you to track the movement of objects in real time. This means that you can see where an object is at any given moment, and you can even track its movements over time. This can be useful for a variety of purposes, including security, surveillance, and even just keeping track of your own belongings."
    },

    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/Wavy_Tech-31_Single-01 2.png",
      htxt: "Multiple Payment Option",
      stxt: "As a business owner, you know that offering your customers multiple payment options is key to increasing sales and keeping them happy. But what are the best options out there? Well, it really depends on your business and what your customers are looking for. If you're a brick-and-mortar store, then accepting credit and debit cards is a must."
    },

    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/8454 3.png",
      htxt: "Reports and Analytics",
      stxt: "Reports and analytics are essential tools for understanding how your business is performing and where you can improve. By tracking key metrics and analyzing data, you can identify trends, optimize processes, and make more informed decisions."
    },

    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/8454 4.png",
      htxt: "Manage Orders",
      stxt: "Assuming you have a business with products or services to sell, you need a way to manage orders from customers. This is especially important if you have a large volume of orders, or if you sell online. There are a few different ways to manage orders, and the best method for your business will likely depend on your specific needs."
    },


    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/6240060 2.png",
      htxt: "Better ROI",
      stxt: "In its simplest form, a higher ROI means that you're getting more back for what you put in. But of course, it's not always quite that straightforward. A number of factors come into play when it comes to calculating ROI, including the type of investment being made, the timeframe involved and the expected return."
    },


    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/7630 2.png",
      htxt: "Promote Your Buisness Effectively",
      stxt: "There are many ways to promote your business effectively. One way is to create a strong online presence. This can be done by creating a website and using social media to reach potential customers. Another way to promote your business is through advertising. This can be done by placing ads in newspapers, magazines, or online."
    },
  ]

  return (
    <div className={styles.Eyeweardevelopmentmainbox}>
      <div className={styles.eyeweardeliveryservicetextbox}>
        <h1>Rideshare & Carpooling App Development Solutions We Provide</h1>
        <p>
        Looking for a cutting-edge rideshare or carpooling app development solution? Look no further than Bottom Funnel. We are a leading provider of innovative rideshare and carpooling app development solutions, and we are committed to helping our clients succeed.
        </p>
      </div>

      <div className={styles.eyeweardeliveryservicebackgroundimagebox}>{EyeWeardeliverydata.map((el) => {
        return (
          <div className={styles.eyeweardeliveryserviceboxesmap}>
            <div className={styles.eyedeliveryserviceinnerboximagebox}>
              <img src={el.icon} alt="icon image" />
            </div>

            <div><h5>{el.htxt}</h5>
              <p>{el.stxt}</p>
            </div>
          </div>
        )
      })}
      </div>

      <button className={styles.Eyeweardevelopmentsolutionbutton}>Get Started</button>
    </div>
  );
};
