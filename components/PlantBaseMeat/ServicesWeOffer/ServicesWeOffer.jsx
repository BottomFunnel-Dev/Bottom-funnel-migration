import Image from 'next/image';
import React from 'react';
import styles from "./ServicesWeOffer.module.css";

export const ServicesWeOffer = () => {
    const servicesWeOfferCardsData = [
        {
            title: "Real-Time Tracking",
            body: "Experience Quick Service which completes in just 90 minutes, which will help you save your precious time and efforts of Visiting workshops to get your car serviced.",
            image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage1.png",
        },
        {
            title: "Multiple Payment Options",
            body: "Meter per second recruits best in class German Car Technicians with a minimum of 8+ years of experience and train them. After enabling them with garage Nation's Standards they are assigned for Services/Reapirs.",
            image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage2.png",
        },
        {
            title: "Reports and Analytics",
            body: "Meter per second provied 100% Transparent Service which means all parts are opened right in front of you while performing service and no more surprised or extra spares or costs.",
            image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage3.png",
        },
        {
            title: "Manage Orders",
            body: "Experience Quick Service which completes in just 90 minutes, which will help you save your precious time and efforts of Visiting workshops to get your car serviced.",
            image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage4.png",
        },
        {
            title: "Better ROI",
            body: "Meter per second recruits best in class German Car Technicians with a minimum of 8+ years of experience and train them. After enabling them with garage Nation's Standards they are assigned for Services/Reapirs.",
            image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage5.png",
        },
        {
            title: "Promote Your Business Effectively",
            body: "Meter per second provied 100% Transparent Service which means all parts are opened right in front of you while performing service and no more surprised or extra spares or costs.",
            image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage6.png",
        },
    ];


    return (
        <div className={styles.plantBasedServiesWeOfferParentDiv}>
            <div className={styles.plantBasedServiesWeOfferHeadingDiv}>
                <h1>
                    PLANT BASED MEAT DELIVERY APP
                    <span> SERVICES </span>
                </h1>
            </div>


            <div className={styles.plantBasedServicesWeOffers}>
                {servicesWeOfferCardsData.map(({ title, body, image }, idx) => (
                    <div key={idx}>
                        <div>
                            <Image src={image}
                                alt={title}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>

                        <h3> {title} </h3>
                        <p> {body} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
