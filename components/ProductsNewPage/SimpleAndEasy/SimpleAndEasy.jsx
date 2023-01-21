import React from 'react';
import styles from "./SimpleAndEasy.module.css";

export const SimpleAndEasy = () => {
    const simpleAndEasyCardsData = [
        {
            title: "Get up and running with no barriers",
            body: "Try or purchase our system directly from our website, and onboard in a matter of days, not months.",
            image: "/Images/ProductsPage/SimpleAndEasyImage1.png",
            buttondetails: "start free trial",
        },
        {
            title: "Choosing your pricing plan",
            body: "Our pricing plans are for modern business use cases and affordable for organizations of all sizes.",
            image: "/Images/ProductsPage/SimpleAndEasyImage2.png",
            buttondetails: "See pricing",
        },
        {
            title: "Build and customize as you go",
            body: `Extend and tailor experience to meet your unique business needs, with low-code development and over
            1,100 custom apps made available on our marketplace.`,
            image: "/Images/ProductsPage/SimpleAndEasyImage3.png",
            buttondetails: "Visit marketplace",
        },
        {
            title: "Create value, fast",
            body: `Accelerate your team's productivity and efficiency with modern automation and collaboraiton tools,
            to get tangible results in no time.`,
            image: "/Images/ProductsPage/SimpleAndEasyImage4.png",
            buttondetails: "Learn now",
        },
        // {
        //     title: "Better ROI",
        //     body: "Meter per second recruits best in class German Car Technicians with a minimum of 8+ years of experience and train them. After enabling them with garage Nation's Standards they are assigned for Services/Reapirs.",
        //     image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage5.png",
        // },
        // {
        //     title: "Promote Your Business Effectively",
        //     body: "Meter per second provied 100% Transparent Service which means all parts are opened right in front of you while performing service and no more surprised or extra spares or costs.",
        //     image: "/Images/PlantBasedMeat/banners & backgrounds/ServicesOfferImage6.png",
        // }
    ];


    return (
        <div className={styles.simpleAndEasyParentDiv}>
            <div className={styles.simpleAndEasyHeadingDiv}>
                <h1>
                    Frictionless,simple, easy
                    {/* <span> SERVICES </span> */}
                </h1>

                <p>
                    Bottom Funnel makes it fast and easy for businesses to delight their customers and employees.
                </p>

                <p>
                    We take a fresh approach to how businesses discover, engage with, and realize value from software
                    throughout their journey.
                </p>
            </div>

            {/* <div className='plantBasedServicesBackImageDiv'>
                <img src='/Images/PlantBasedMeat/banners & backgrounds/PlantBasedMeatBackground.png' alt='image' />
            </div> */}

            <div className={styles.simpleAndEasyContentDiv}>
                {simpleAndEasyCardsData.map(({ title, body, image, buttondetails }, idx) => (
                    <div key={idx}>
                        <div>
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <p>{body}</p>
                        <p className={styles.simpleAndEasyContentButton}>
                            {buttondetails}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
