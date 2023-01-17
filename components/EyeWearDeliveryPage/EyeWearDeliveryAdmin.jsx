import React, { useState } from 'react';
import styles from "./EyeWearDeliveryAdmin.module.css";

export const EyeWearDeliveryAdmin = () => {

  const [imageChange, setImageChange] = useState("/Images/EyewearDeliveryapp/Adminpanelscreens/dashboard.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
  }

  const eyeweardeliveryadmindata = [
    {
      img: "/Images/EyewearDeliveryapp/Adminpanelscreens/dashboard.png",
      logo: "/Images/EyewearDeliveryapp/icons/prototyping.png",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
      htxt: "Dashboard"
    },

    {
      img: "/Images/EyewearDeliveryapp/Adminpanelscreens/reports&analytics.png",
      logo: "/Images/EyewearDeliveryapp/icons/prototyping-9.png",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
      htxt: "Reports & Analytics"
    },

    {
      img: "/Images/EyewearDeliveryapp/Adminpanelscreens/notification&alerts.png",
      logo: "/Images/EyewearDeliveryapp/icons/prototyping-11.png",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
      htxt: "Notifications & Alerts"
    },


    {
      img: "/Images/EyewearDeliveryapp/Adminpanelscreens/paymentmanagement.png",
      logo: "/Images/EyewearDeliveryapp/icons/prototyping-10.png",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
      htxt: "payments Management"
    },
  ]

  return (
    <div className={styles.eyeweardeliveryadminpannelmainbox}>
      <div className={styles.eyeweardeliveryadminpannelleftbox}>
        <div className={styles.eyeweardeliveryadmintextboxleftside}>
          <h1>Admin Pannel</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum</p>
          <div className={styles.eyeweardeliveryadminpannelwheremap}>
            {eyeweardeliveryadmindata.map((e) => {
              return (
                <div className={styles.eyewearmappingdataboxadminpannel}
                  key={e.htxt} onMouseEnter={() => {
                    handleImageChange(e.img)
                  }}
                >
                  <div className={styles.eyeadminlogo}>
                    <img src={e.logo} alt='logo' />
                  </div>

                  <div>
                    <h4>{e.htxt}</h4>
                    <p>{e.stxt}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className={styles.eyeweardeliveryadminpannelrightbox}>
        <img src={imageChange} alt="images" />
      </div>
    </div>
  );
};

