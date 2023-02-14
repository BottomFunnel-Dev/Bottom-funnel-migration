import Image from 'next/image';
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
            stxt: "On-boarding new users to your app doesn't have to be a pain! With our App, you can easily add new users and get them up-to-speed quickly. We makes it simple to assign tasks, give feedback, and track progress - so you can focus on more important things. Plus, our app has easy interface means that new users will be able to hit the ground running.",
        },

        {
            img: "/Images/EyewearDeliveryapp/customerappscreens/shoppingbag.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-5.png",
            htxt: "Shoping Bag",
            stxt: "With the Shoping Bag feature in apps, you can now shop for your favourite items easily and conveniently! This feature allows you to keep track of all the items you want to purchase in one place, so you can easily check out and pay for them later.",
        },

        {
            img: "/Images/EyewearDeliveryapp/customerappscreens/specialoffers.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-3.png",
            htxt: "Special Offers & Discounts",
            stxt: "Looking for ways to save on your next purchase? Check out our special offers and discounts page! Here you'll find a variety of deals and promotions that can help you save big on your next order. Whether you're looking for a percentage off your total purchase, free shipping, or a special gift with purchase, we've got you covered.",
        },

        {
            img: "/Images/EyewearDeliveryapp/customerappscreens/cart.png",
            icon: "/Images/EyewearDeliveryapp/icons/prototyping-4.png",
            htxt: "Cart For Your Favourites",
            stxt: "Looking for ways to save on your next purchase? Check out our special offers and discounts page! Here you'll find a variety of deals and promotions that can help you save big on your next order. Whether you're looking for a percentage off your total purchase, free shipping, or a special gift with purchase, we've got you covered.",
        },
    ]

    return (
        <div className={styles.eyewearcustomerappmainboxes}>
            <div className={styles.eyewearcustomerappuppertextbox}>
                <h1> An Overview of Our Eyewear Delivery App </h1>
                <p>
                    A Complete scope of carpoling and ridesharing app development solution for coordinating and moving travellers
                    together.
                </p>
            </div>

            <div className={styles.eyewearappcustomerappboxflextype}>
                <div className={styles.eyewearappcustomerappboxflextypeleftbox}>
                    <div className={styles.eyewearappcustomerappboxflextypeleftboxinsidertext} >
                        <h1> Customer App </h1>
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
                                        <Image src={e.icon}
                                            alt={"image"}
                                            width={"0"}
                                            height={"0"}
                                            sizes={"100vw"}
                                            style={{ width: "100%", height: "15%" }}
                                        />
                                    </div>

                                    <div>
                                        <h4> {e.htxt} </h4>
                                        <p> {e.stxt} </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.eyewearappcustomerappboxflextyperightbox}>
                    <div className={styles.eyewearmobileforcustomerappdelivery}>
                        <Image src={imageChange}
                            alt={"mobile image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

