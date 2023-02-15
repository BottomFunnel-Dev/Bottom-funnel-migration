import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./IcecreamCustomerApp.module.css";

export const IcecreamCustomerApp = () => {

    const [imageChange, setImageChange] = useState("/Images/icecreamchanges/customer app/Component 57.webp")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const icreacreamcustomerappdata = [
        {
            image: "/Images/icecreamchanges/customer app/Component 57.webp",
            icon: "/Images/icecreamchanges/icons/prototyping-8.webp",
            headertext: "Easy app onboarding",
            paragraph: "Customize this Ice Cream Delivery App however you see fit with our powerful online app builder. You don’t need any design or coding experience fit with our powerful online app builder fit with our powerful online app builder",
        },

        {
            image: "/Images/icecreamchanges/customer app/Component 58.webp",
            icon: "/Images/icecreamchanges/icons/prototyping-10.webp",
            headertext: " Order Services",
            paragraph: "Ice cream is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
        },

        {
            image: "/Images/icecreamchanges/customer app/Multiple payment option.webp",
            icon: "/Images/icecreamchanges/icons/prototyping-9.webp",
            headertext: "Multiple Payment Option",
            paragraph: "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience fit with our powerful online app builder fit with our  app.",
        },

        {
            image: "/Images/icecreamchanges/customer app/Component 56.webp",
            icon: "/Images/icecreamchanges/icons/prototyping-11.webp",
            headertext: " Offers & Discounts",
            paragraph: "Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line."
        },
    ]


    return (
        <div className={styles.icecreamcustomerappmainboxes}>
            <h1> An overview of our online Ice-cream Delivery App Solution </h1>
            <h2> Customer App </h2>

            <div className={styles.icecreamdeliveryappflexingbox}>
                <div className={styles.icecreamdeliveryappflexingboxleftbox}>
                    <div className={styles.icecreamdeliveryappleftboxinsiderupperimage}>
                        <Image src={imageChange}
                            alt={'image'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
                <div className={styles.icecreamdeliveryappflexingboxrightbox}>
                    {icreacreamcustomerappdata.map((e) => {
                        return (
                            <div className={styles.icecreamdeliveryappindivisualbox}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.image)
                                }}

                            >
                                <div className={styles.icecreamdeliveryappindivisualboxforlogo}>
                                    <Image src={e.icon}
                                        alt={'image'}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </div>

                                <div className={styles.icecreamdeliveryappindivisualboxfortext}>
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
