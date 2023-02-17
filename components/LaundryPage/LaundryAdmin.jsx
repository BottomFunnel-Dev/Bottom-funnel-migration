import React, { useState } from 'react';
import styles from "./LaundryAdmin.module.css";
import Image from "next/image";

const LaundryAdmin = () => {
    const [imageChange, setImageChange] = useState("/Images/Laundrypage/switchscreens/Admin interface.webp")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const LaundryAdminrData = [
        {
            img: "/Images/Laundrypage/icons/dashboard1.png",
            Htxt: "Easy to use Super Admin Interface",
            stxt: "All your logistics and transportation data in one place? That's what Unique Logistics is offering. We've built a dashboard to make it easy for you to see all your data at a glance, so you can stay on top of your laundry business. ",
            tablet: "/Images/Laundrypage/switchscreens/Admin interface.webp"
        },

        {
            img: "/Images/Laundrypage/icons/group.png",
            Htxt: "Manage multiple users",
            stxt: "We have developed an end-to-end solution for tracking your products, both online and offline, including dispatching and receiving. Our database keeps track of every product, from a forklift to a truckload of goods.",
            tablet: "/Images/Laundrypage/switchscreens/Multiple users.webp"
        },

        {
            img: "/Images/Laundrypage/icons/sales.png",
            Htxt: "Generate earnings & Sales Report",
            stxt: "Our logistics and transportation web development services are reliable, fast, and easy to work with. Our team of professionals will take care of everything for you so that you can focus on more important things in your life.",
            tablet: "/Images/Laundrypage/switchscreens/Earnings & sales report.webp"
        },

        {
            img: "/Images/Laundrypage/icons/tag.png",
            Htxt: "Manage Discount Coupons and Pomos",
            stxt: "Our team has years of experience in web development, marketing strategies, and more. We know what it takes to build a successful business online, so let us help you take your company forward.",
            tablet: "/Images/Laundrypage/switchscreens/Discounts & promos.webp"
        }

    ]
    return (
        <div className={styles.laundrypageadminmainbox}>
            <div className={styles.laundryadminleftbox}>
                <div className={styles.laundryadminheadingtxt}>
                    <h1> Admin Pannel </h1>
                    <p>
                        By using it, providers can view their statistics and know how many users they have, their earnings, and their commissions.
                    </p>

                    <div className={styles.laundryadminmappingbox}>
                        {LaundryAdminrData.map((e, i) => {
                            return (
                                <div className={styles.laundryadmindatamappingindi}
                                    key={i} onMouseEnter={() => {
                                        handleImageChange(e.tablet)
                                    }}
                                >
                                    <div>
                                        <Image src={e.img}
                                            alt={'images'}
                                            width={"0"}
                                            height={"0"}
                                            sizes={"100vw"}
                                            style={{ width: "15%", height: "20%" }}
                                        />
                                    </div>

                                    <h4> {e.Htxt} </h4>
                                    <p> {e.stxt} </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


            <div className={styles.laundryadminrightbox}>
                <div className={styles.laundryadminImageDiv}>
                    <Image src={imageChange}
                        alt={"images"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "90%", height: "80%" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LaundryAdmin;

