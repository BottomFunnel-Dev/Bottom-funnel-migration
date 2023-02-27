import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./CarServiceAdmin.module.css";

export default function CarServiceAdmin () {

    const [imageChange, setImageChange] = useState("/Images/CarService/Adminpanelscreens/Dashboard  1601.webp")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const carserviceadmindata = [
        {
            image: "/Images/CarService/Adminpanelscreens/Dashboard  1601.webp",
            icon: "/Images/CarService/icons/prototyping-5.webp",
            headertext: "Dashboard",
            paragraph: "Build an admin panel for your web app or backend panel with Ready Dashboard.It’s built sophisticatedly with a clean and colorful user interface and modern web building methods and technology. ",
        },

        {
            image: "/Images/CarService/Adminpanelscreens/Dashboard 3  1600.webp",
            icon: "/Images/CarService/icons/prototyping-7.webp",
            headertext: "Reports & Analytics",
            paragraph: "A report allows you to summarize and chart record data. A dashboard can present summary reports on a single page. It is a collection of Reports.Here is my next exploration of Mersy. Hope you guys like it Cheers! ",
        },

        {
            image: "/Images/CarService/Adminpanelscreens/Realtime Overview  1600.webp",
            icon: "/Images/CarService/icons/prototyping-6.webp",
            headertext: "Review Dashboard",
            paragraph: "This design is about managing customer reviews. The business owner can see all reviews, and average ratings and give any customer instant feedback using this dashboard. ",
        },

        {
            image: "/Images/CarService/Adminpanelscreens/Dashboard 2  1600.webp",
            icon: "/Images/CarService/icons/prototyping-10.webp",
            headertext: "Order Management",
            paragraph: "Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers.",
        },
    ]

    return (
        <div className={styles.carserviceadminpannelmain}>
            <div className={styles.carserviceadminpanneltext}>
                <h2> Admin Pannel </h2>
            </div>

            <div className={styles.carserviceadminpannelbox}>
                <div className={styles.carserviceadminpannelleftbox}>
                    {carserviceadmindata.map((e) => {
                        return (
                            <div className={styles.carserviceadminpannelindivisual}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.image)
                                }}

                            >
                                <div className={styles.carserviceadminpannelindivisualicon}>
                                    <Image src={e.icon}
                                        alt={"image"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </div>

                                <div className={styles.carserviceadminpannelindivisualtxt}>
                                    <h4> {e.headertext} </h4>
                                    <p> {e.paragraph} </p>
                                </div>
                            </div>
                        )
                    })}</div>

                <div className={styles.carserviceadminpannelrightbox}>
                    <div className={styles.carserviceadminpannelrightboximg}>
                        <Image src={imageChange}
                            alt={'image'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
