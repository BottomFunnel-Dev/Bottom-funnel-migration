import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./CarServiceCustomer.module.css";

export default function CarServiceCustomer ()  {

    const [imageChange, setImageChange] = useState("/Images/CarService/Customerappscreens/Component 93.webp")
    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
    }

    const icreacreamcustomerappdata = [
        {
            image: "/Images/CarService/Customerappscreens/Component 93.webp",
            icon: "/Images/CarService/icons/prototyping-8.webp",
            headertext: "Easy app onboarding",
            paragraph: "Customize this Car service App however you see fit with our powerful online app builder. You don’t need any design or coding experience fit with our powerful online app builder fit with our powerful online app builder",
        },

        {
            image: "/Images/CarService/Customerappscreens/Component 88.webp",
            icon: "/Images/CarService/icons/prototyping-10.webp",
            headertext: " Order Services",
            paragraph: "car Service is important to many people. They use it for many purpose when they need. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
        },

        {
            image: "/Images/CarService/Customerappscreens/Component 87.webp",
            icon: "/Images/CarService/icons/prototyping-9.webp",
            headertext: "Multiple Payment Option",
            paragraph: "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience fit with our powerful online app builder fit with our  app.",
        },

        {
            image: "/Images/CarService/Customerappscreens/Component 86.webp",
            icon: "/Images/CarService/icons/prototyping-11.webp",
            headertext: "Track Your Order",
            paragraph: "Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line."
        },
    ]


    return (
        <div className={styles.carservicecustomerappmain}>
            <h2> Customer App </h2>

            <div className={styles.carserviceappbox}>
                <div className={styles.carserviceappboxleft}>
                    <div className={styles.carserviceappleftboximage}>
                        <Image src={imageChange}
                            alt={'image'}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
                <div className={styles.carserviceappboxright}>
                    {icreacreamcustomerappdata.map((e) => {
                        return (
                            <div className={styles.carserviceappindivisualbox}
                                key={e.htxt} onMouseEnter={() => {
                                    handleImageChange(e.image)
                                }}

                            >
                                <div className={styles.carserviceappindivisualboxforlogo}>
                                    <Image src={e.icon}
                                        alt={'image'}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </div>

                                <div className={styles.carserviceappindivisualboxfortext}>
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
