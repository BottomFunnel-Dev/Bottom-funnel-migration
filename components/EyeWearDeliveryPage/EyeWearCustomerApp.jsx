import React, { useState } from 'react';
import styles from "./EyeWearCustomerApp.module.css";

export const EyeWearCustomerApp = () => {
    const [imageChange, setImageChange] = useState("/Images/EyewearDeliveryapp/customerappscreens/onboarding.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)

    }

    const eyewearcustomerappdata = [
        {
            img: "/Images/EyewearDeliveryapp/customerappscreens/onboarding.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-2.png",
            htxt: "Easy App On-Boarding",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
        },


        {
            img: "/Images/EyewearDeliveryapp/customerappscreens/shoppingbag.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-5.png",
            htxt: "Shoping Bag",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
        },


        {
            img: "/Images/EyewearDeliveryapp/customerappscreens/specialoffers.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-3.png",
            htxt: "Special Offers & Discounts",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
        },


        {
            img: "/Images/EyewearDeliveryapp/customerappscreens/cart.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-4.png",
            htxt: "Cart For Your Favourites",
            stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",
        },
    ]

    return (
        <div className={styles.eyewearcustomerappmainboxes}>
            <div className={styles.eyewearcustomerappuppertextbox}>
                <h1>An Overview of Our Eyewear Delivery App</h1>
                <p>
                    A Complete scope of carpoling and ridesharing app development solution for coordinating and moving travellers together
                </p>
            </div>

            <div className={styles.eyewearappcustomerappboxflextype}>
                <div className={styles.eyewearappcustomerappboxflextypeleftbox}>
                    <div className={styles.eyewearappcustomerappboxflextypeleftboxinsidertext} >
                        <h1>Customer App</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum
                        </p>
                    </div>

                    <div className={styles.eyewearcustomermappingdatabox}>
                        {eyewearcustomerappdata.map((e) => {
                            return (
                                <div className={styles.eyewearcustomeraftermap1box}
                                    key={e.htxt} onMouseEnter={() => {
                                        handleImageChange(e.img)
                                    }}

                                >
                                    <div className={styles.flexingeyewearcustomerforlogo}>
                                        <img src={e.icon} alt="image" />
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

                <div className={styles.eyewearappcustomerappboxflextyperightbox}>
                    <div className={styles.eyewearmobileforcustomerappdelivery}>
                        <img src={imageChange} alt="mobile image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

