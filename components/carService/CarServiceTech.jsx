import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./CarServiceTech.module.css";


export default function CarServiceTech () {
    const [imageChange, setImageChange] = useState("/Images/CarService/Technicianappscreen/profilemanagement.webp")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const carservicetechappdata = [
        {
            image: "/Images/CarService/Technicianappscreen/profilemanagement.webp",
            icon: "/Images/CarService/icons/prototyping-1.webp",
            headertext: " Profile Management",
            paragraph: "Customize this Ice Cream Delivery App however you see fit with our powerful online app builder. You don’t need any design or coding experience You don’t need any design or coding experience You don’t need any design or coding experience",
        },

        {
            image: "/Images/CarService/Technicianappscreen/earninganalytics.webp",
            icon: "/Images/CarService/icons/prototyping-2.webp",
            headertext: "Earnings Analytics",
            paragraph: "Ice cream is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
        },

        {
            image: "/Images/CarService/Technicianappscreen/Component 87.webp",
            icon: "/Images/CarService/icons/prototyping-4.webp",
            headertext: "Daily Work Status",
            paragraph: "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.You don’t need any design or coding experience You don’t.",
        },

        {
            image: "/Images/CarService/Technicianappscreen/alertsetting.webp",
            icon: "/Images/CarService/icons/prototyping-3.webp",
            headertext: " Alerts Settings",
            paragraph: "Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line."
        },
    ]

    return (
        <div className={styles.carservicetechappmainboxes}>

            <h2> Technician App </h2>
            <div className={styles.carservicetechappflexingbox}>
                <div className={styles.carservicetechappflexingboxleftbox}>
                    <div className={styles.carservicetechappleftboxinsiderupperimage}>
                        <Image src={imageChange}
                            alt={'image'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>

                <div className={styles.carservicetechappflexingboxrightbox}>
                    {carservicetechappdata.map((e) => {
                        return (
                            <div className={styles.carservicetechappindivisualbox}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.image)
                                }}
                            >
                                <div className={styles.carservicetechappindivisualboxforlogo}>
                                    <Image src={e.icon}
                                        alt={'image'}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </div>

                                <div className={styles.carservicetechappindivisualboxfortext}>
                                    <h4> {e.headertext} </h4>
                                    <p> {e.paragraph} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};
