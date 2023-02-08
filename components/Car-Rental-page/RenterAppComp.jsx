import React, { useState } from 'react';
import styles from './renterAppComp.module.css';

export const RenterAppComp = () => {
    const [imageChange, setImageChange] = useState("/Images/Car-Rental-Page-Images/Component190.png")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const RGrenterAppData = [
        {
            img: "/Images/Car-Rental-Page-Images/signup.png",
            head: "Register and Signup within The Application",
            para: "The customer can sign up for the app to start booking cars.",
        },

        {
            img: "/Images/Car-Rental-Page-Images/Component190.png",
            head: "Find Nearby Available Cars",
            para: "Customers can easily find out which cars are available for rent in their area by looking online.",
        },

        {
            img: "/Images/Car-Rental-Page-Images/filter.png",
            head: "Search By Filters",
            para: "Customers can search for cars by different filters, such as fuel type or category.",
        },

        {
            img: "/Images/Car-Rental-Page-Images/cardetails.png",
            head: "Car Details",
            para: "Customers can inspect the details of the listed car, like the model, year of the car, images of the car, etc., through the app.",
        },

    ]
    return (
        <div className={styles.RGrenterAppContainer}>
            <div className={styles.RGrenterAppTextDiv}>
                <h1>
                    <span className={styles.RGrenterSpan}>Renter </span>App
                </h1>
            </div>

            <div className={styles.RGrenterAppMobileLeftDiv}>
                <div className={styles.RGrenterAppMobileLeftDivFrameForImages}>
                    <img src={imageChange} alt="images" />
                </div>
            </div>

            <div className={styles.RGrenterAppMobileRightDiv}>
                {RGrenterAppData.map((e) => {
                    return (
                        <div className={styles.RGrenterAppMobileRightDivBoxex}
                            key={e.head} onMouseEnter={() => {

                                handleImageChange(e.img)
                            }}
                        >
                            <div>
                                <h4>{e.head}</h4>
                                <p>{e.para}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};




