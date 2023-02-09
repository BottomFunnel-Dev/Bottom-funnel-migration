import React, { useState } from 'react';
import styles from "./TaxiBookingCustomerApp.module.css";

export const TaxiBookingCustomerApp = () => {

    const [imageChange, setImageChange] = useState("/Images/Taxibooking/Customerscreens/Component 117.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        // console.log(imagepath)
    }

    const taxibookingcustomerdata = [
        {
            images: "/Images/Taxibooking/Customerscreens/Component 117.png",
            icon: "/Images/Taxibooking/icons/Group 340238.png",
            htxt: "Easy To Choose Your Ride",
            stxt: "We always strive to deliver futuristic solutions that will help you take your business further from the existing ones business further from the existing ones . ",
        },

        {
            images: "/Images/Taxibooking/Customerscreens/Component 125.png",
            icon: "/Images/Taxibooking/icons/Group 340235.png",
            htxt: "Track Your Driver",
            stxt: "As a taxi app development company, we'll build white label ride sharing app that is user friendly for registration to booking with numerous features that is easy to use. ",
        },

        {
            images: "/Images/Taxibooking/Customerscreens/Component 126.png",
            icon: "/Images/Taxibooking/icons/Group 340236.png",
            htxt: " Easy Pick Up",
            stxt: "We Will follow the standard procedure to deliver the app on time to enjoy the benefits and meet your business growth goals.",
        },

        {
            images: "/Images/Taxibooking/Customerscreens/Component 127.png",
            icon: "/Images/Taxibooking/icons/Component 131.png",
            htxt: "Booking History",
            stxt: "The taxi app development solutions provided are tailored to your specific needs and objectives with rational taxi app development cost.",
        },
    ]

    return (
        <div className={styles.customerapptaxibookingboxfortxt}>
            <h1>
                <span className={styles.specialcolor}> Customer Application </span>
            </h1>
            <div className={styles.taxibookingcustomerappmainboxes}>

                <div className={styles.taxibookingappcustomerappleftbox}>
                    {taxibookingcustomerdata.map((e) => {
                        return (
                            <div className={styles.taxibookingflexingboxesindi}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.images)
                                }}

                            >
                                <div className={styles.taxibookingflexingboxesindiforlogo}>
                                    <img src={e.icon} alt='images' />
                                </div>

                                <div className={styles.taxibookingflexingboxesindifortxt}>
                                    <h4> {e.htxt} </h4>
                                    <p> {e.stxt} </p>
                                </div>
                            </div>
                        )
                    })}</div>


                <div className={styles.taxibookingappcustomerapprightbox}>
                    <div className={styles.taxibookingappcustomerrightboxinnermobile}>
                        <img src={imageChange} alt='mobile' />
                    </div>
                </div>
            </div>
        </div>
    );
};
