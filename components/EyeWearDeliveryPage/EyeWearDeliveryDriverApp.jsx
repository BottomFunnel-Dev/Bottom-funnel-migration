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
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

        },

        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/earninganalytics.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-8.png",
            htxt: "Earning Analytics",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

        },


        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/dailyreports.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-6.png",
            htxt: "Daily Report's Dashboard",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
        },


        {
            img: "/Images/EyewearDeliveryapp/Driverappscreens/alertsetting.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-7.png",
            htxt: "Alerts Settings",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
        },
    ]


    return (
        <div className={styles.eyeweardeliverydrivermainbox}>
            <div className={styles.eyeweardeliverydriverappboxfortxt}>
                <h1>Driver App</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum
                </p>
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

