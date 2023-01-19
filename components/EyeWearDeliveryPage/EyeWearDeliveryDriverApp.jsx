import React, { useState } from 'react';
import styles from "./EyeWearDeliveryDriverApp.module.css";

export const EyeWearDeliveryDriverApp = () => {

    const [imageChange, setImageChange] = useState("/Images/EyewearDeliveryapp/Driverappscreens/profilemanagement.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)

    }

    const eyeweardriverappdata = [
        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/profilemanagement.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-1.png",
            htxt: "Profile Management",
            stxt: "A driver's app is a mobile application that helps users manage their profiles and driving information. It allows users to view and update their personal information, as well as track their driving history.",

        },

        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/earninganalytics.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-8.png",
            htxt: "Earning Analytics",
            stxt: "Earning analytics is a feature in the driver's app that allows you to see how much money you've earned over a certain period of time. This is a great feature for drivers who want to see how their earnings are progressing.",

        },


        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/dailyreports.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-6.png",
            htxt: "Daily Report's Dashboard",
            stxt: "As a driver, you want to be able to see your daily reports in one place. The Daily Report's Dashboard for driver's app gives you all the information you need to see how well you're doing. This includes a summary of your trips, earnings and Ratings.",
        },


        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/alertsetting.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-7.png",
            htxt: "Alerts Settings",
            stxt: "As a driver, it's important to be aware of your surroundings at all times. That's why the alerts settings on your driver's app are so important. By customizing the tone and volume of the alerts, you can ensure that you're always getting the information you need.",
        },
    ]


    return (
        <div className={styles.eyeweardeliverydrivermainbox}>
            <div className={styles.eyeweardeliverydriverappboxfortxt}>
                <h1>Driver App</h1>
                
            </div>

            <div className={styles.eyeweardeliverydriverappflexingintonew}>
                <div className={styles.eyeweardeliverydriverappflexingintonewleft}>
                    <div className={styles.eyeweardeliverydriverappflexingintonewleftinsiderboxformobile}>
                        <img src={imageChange} alt="imagemobile" />
                    </div>
                </div>

                <div className={styles.eyeweardeliverydriverappflexingintonewright}>
                    {eyeweardriverappdata.map((e) => {
                        return (
                            <div className={styles.eyeweardriveraftermappingnewboxes}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.img)
                                }}
                            >
                                <div className={styles.logoeyeweardriver}>
                                    <img src={e.icon} alt="image" />
                                </div>

                                <div className={styles.txteyeweardriver}>
                                    <h4>{e.htxt}</h4>
                                    <p>{e.stxt}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

