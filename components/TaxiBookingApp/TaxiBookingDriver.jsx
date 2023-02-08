import React, { useState } from 'react';
import styles from "./TaxiBookingDriver.module.css";

export const TaxiBookingDriver = () => {
    const [imageChange, setImageChange] = useState("/Images/Taxibooking/driverscreen/My Wallet.png")

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        // console.log(imagepath)
    }

    const taxibookingcustomerdata = [
        {
            images: "/Images/Taxibooking/driverscreen/Settings.png",
            icon: "/Images/Taxibooking/icons/Component 135.png",
            htxt: "Driver's Profile",
            stxt: "Our professionals clarify requirements, prepare the estimations and conquer every required formality",
        },

        {
            images: "/Images/Taxibooking/driverscreen/Frame 2453.png",
            icon: "/Images/Taxibooking/icons/Component 136.png",
            htxt: "Daily Earning Reports",
            stxt: "We get those professionals involved in your projects who have the precise skills to meet your project requirements.",
        },

        {
            images: "/Images/Taxibooking/driverscreen/My Wallet.png",
            icon: "/Images/Taxibooking/icons/Component 138.png",
            htxt: "Wallet Management",
            stxt: "With our holistic and optimistic approach we go for improving processes so that your development is consistent with no bugs.",
        },

        {
            images: "/Images/Taxibooking/driverscreen/Pickup location.png",
            icon: "/Images/Taxibooking/icons/Component 137.png",
            htxt: "Pickup Details",
            stxt: "Once the needed requirements are fulfilled we get going with your product development and shape the scope of your project.",
        },
    ]

    return (

        <div className={styles.driverapptaxibookingboxfortxt}>
            <h1>
                <span className={styles.specialcolor}> Driver Application </span>
            </h1>

            <div className={styles.taxibookingdriverappmainboxes}>
                <div className={styles.taxibookingappdriverappleftbox}>
                    {taxibookingcustomerdata.map((e) => {
                        return (
                            <div className={styles.taxibookingdriverflexingboxesindi}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.images)
                                }}

                            >
                                <div className={styles.taxibookingflexingboxesdriverindiforlogo}>
                                    <img src={e.icon} alt='images' />
                                </div>

                                <div className={styles.taxibookingflexingboxesindifortxt}>
                                    <h4> {e.htxt} </h4>
                                    <p> {e.stxt} </p>
                                </div>

                            </div>
                        )
                    })}</div>


                <div className={styles.taxibookingappdriverapprightbox}>
                    <div className={styles.taxibookingappdriverrightboxinnermobile}>
                        <img src={imageChange} alt='mobile' />
                    </div>
                </div>
            </div>

        </div>

    )
}
