import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./EyeWearDeliveryDriverApp.module.css";

export const EyeWearDeliveryDriverApp = () => {

    const [imageChange, setImageChange] = useState("/Images/EyewearDeliveryapp/Driverappscreens/profilemanagement.webp")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const eyeweardriverappdata = [
        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/profilemanagement.webp",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-1.webp",
            htxt: "Profile Management",
            stxt: "A driver's app is a mobile application that helps users manage their profiles and driving information. It allows users to view and update their personal information, as well as track their driving history.",
        },

        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/earninganalytics.webp",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-8.webp",
            htxt: "Earning Analytics",
            stxt: "Earning analytics is a feature in the driver's app that allows you to see how much money you've earned over a certain period of time. This is a great feature for drivers who want to see how their earnings are progressing.",
        },

        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/dailyreports.webp",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-6.webp",
            htxt: "Daily Report's Dashboard",
            stxt: "As a driver, you want to be able to see your daily reports in one place. The Daily Report's Dashboard for driver's app gives you all the information you need to see how well you're doing. This includes a summary of your trips, earnings and Ratings.",
        },

        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/alertsetting.webp",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-7.webp",
            htxt: "Alerts Settings",
            stxt: "As a driver, it's important to be aware of your surroundings at all times. That's why the alerts settings on your driver's app are so important. By customizing the tone and volume of the alerts, you can ensure that you're always getting the information you need.",
        },
    ]


    return (
        <div className={styles.eyeweardeliverydrivermainbox}>
            <div className={styles.eyeweardeliverydriverappboxfortxt}>
                <h2> Driver App </h2>
            </div>

            <div className={styles.eyeweardeliverydriverappflexingintonew}>
                <div className={styles.eyeweardeliverydriverappflexingintonewleft}>
                    <div className={styles.eyeweardeliverydriverappflexingintonewleftinsiderboxformobile}>
                        <Image src={imageChange}
                            alt={"imagemobile"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%", }}
                        />
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
                                    <Image src={e.icon}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "20%" , objectFit:"contain" }}
                                    />
                                </div>

                                <div className={styles.txteyeweardriver}>
                                    <h5> {e.htxt} </h5>
                                    <p> {e.stxt} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

