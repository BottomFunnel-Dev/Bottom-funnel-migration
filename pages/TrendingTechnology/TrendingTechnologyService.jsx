import React from 'react';
import styles from "./TrendingTechnologyService.module.css";

export const TrendingTechnologyService = () => {
    const trendingservicesdata = [
        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 67.png",
            htxt: "Big Data Services",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 66.png",
            htxt: "Blockchain Services",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 65.png",
            htxt: "Mechine Learning",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 64.png",
            htxt: "Artificial Intelligence",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 68.png",
            htxt: "Data Science",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 69.png",
            htxt: "Crypto Currency Development",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 70.png",
            htxt: "Customised web Development",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 71.png",
            htxt: "Virtual Reality Development",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 72.png",
            htxt: "Augmented Reality",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 73.png",
            htxt: "NFT Development",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 74.png",
            htxt: "IoT Development",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 75.png",
            htxt: "Startup Solution",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 77.png",
            htxt: "Enterprise solution",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },

        {
            image: "Images/TrendingTechnologies/Banners & backgounds/Component 78.png",
            htxt: "Metaverse Services",
            stxt: "we have on extensive experience crafting remarkable visual interfaces using style guides grid systems typography mood boards.",
        },
    ]

    return (
        <div className={styles.trendingtechnologyservicemainboxes}>
            <div className={styles.trendingtechservicehedertext}>
                <h1>Trending Technologies Services at Bottom Funnel</h1>
                <p>As a leading kotline mobile app development company in UK,India & USA,we put in our best efforts and skills to design and build your kotlin Mobile Apps that are market ready to deliver the best performance in every level.Our experienced team of kotlin developers holds expertise in building tailor-made and user-friendly solutions for our clients.</p>
                <p>Our team uses agile methodologies to offer scalable , robust and interactive solution to businesses organizations and enterprises to achieve their desired goals and requirements.Our clients across the globe perceive our flexible approach to delivering industry-driven technical solutions with our hands-on experience in kotline extension library and third-party app integrations.
                </p>
            </div>
            <div className={styles.trendingtechnologyservicedatamappingbox}>
                {trendingservicesdata.map((e) => {
                    return (
                        <div className={styles.trendingtechserindi}>
                            <div className={styles.trendingtechnologyboxforimages}>
                                <img src={e.image} alt='images' />
                                <div className={styles.trendingtechnolboximagetextbox}>
                                    <h4>{e.htxt}</h4>
                                </div>
                            </div>
                            <div className={styles.trendingtechnologyboxfortext}>
                                <p>{e.stxt}</p>
                            </div>
                        </div>
                    )
                })}</div>
        </div>
    )
}
