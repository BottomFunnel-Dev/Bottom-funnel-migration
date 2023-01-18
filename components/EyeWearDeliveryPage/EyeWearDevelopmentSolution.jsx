import React from 'react';
import styles from "./EyeWearDevelopmentSolution.module.css";

export const EyeWearDevelopmentSolution = () => {
  const EyeWeardeliverydata = [
    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/5860108 3.png",
      htxt: "Real-Time Traking",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
    },

    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/Wavy_Tech-31_Single-01 2.png",
      htxt: "Multiple Payment Option",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
    },

    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/8454 3.png",
      htxt: "Reports and Analytics",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
    },

    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/8454 4.png",
      htxt: "Manage Orders",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
    },


    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/6240060 2.png",
      htxt: "Better Roi",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
    },


    {
      icon: "/Images/EyewearDeliveryapp/bannersBackgrounds/7630 2.png",
      htxt: "Promote Your Buisness Effectively",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
    },
  ]

  return (
    <div className={styles.Eyeweardevelopmentmainbox}>
      <div className={styles.eyeweardeliveryservicetextbox}>
        <h1>Rideshare & Carpooling App Development Solutions We Provide</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales odio sit amet quam varius, id interdum nibh auctor.
          Donec quis nisl a nibh elementum laoreet. Vivamus ultrices
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
