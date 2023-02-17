import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./MeatDeliveryPartnerApp.module.css";

export const MeatDeliveryPartnerApp = () => {

    const [imageChange, setImageChange] = useState("/Images/meatdelieveryapp/signup.webp")

    const handleImageChange = (imagepath) =>{
        setImageChange(() => imagepath)
    }

    const meatdeliverypartnerappdata = [

        {
            img:"/Images/meatdelieveryapp/signup.webp",
            htxt: "Signup",
            stxt: "Partners can give special offers and discount to increase their customer base and earn their loyalty.",
        },

        {
            img:"/Images/meatdelieveryapp/search.webp",
            htxt: "Menu Category and Order Management",
            stxt: "The partners can manage menu items and orders to increase customer traffic and efficiency.",
        },


        {
            img:"/Images/meatdelieveryapp/communicate on orders.webp",
            htxt: "Language Support",
            stxt: "This Feature enables the partners to personally chat whit their customers as well as the admin and resolve their queries.",
        },


        {
            img:"/Images/meatdelieveryapp/Multilingual Support.webp",
            htxt: "Multi Language support ",
            stxt: "The partner will get a notification for every new activity related to them on the app which will make them stay updated.",
        },
    ]

    return (
        <div className={styles.meatdeliverypartnerappmainboxes}>
            <div className={styles.meatdeliverypartnerleftbox}>
                <div className={styles.meatdeliverypartnerleftboxmobilebox}>
                    <Image src={imageChange}
                        alt={'mobile'}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>

            <div className={styles.meatdeliverypartnerrightbox}>
                <div className={styles.meatdeliverypartnerboxfortextright}>
                    <h2 className={styles.specialcolor}>Partner Application</h2>
                </div>

                <div className={styles.meatdeliverypartnerappmaiingbox}>
                    {meatdeliverypartnerappdata.map((e) => {
                        return (
                            <div className={styles.meatdeliveryflexingboxindivisually}
                            key={e.htxt} onMouseEnter={() =>{
                                handleImageChange(e.img)
                            }}
                            >
                                <h5> {e.htxt} </h5>
                                <p> {e.stxt} </p>
                            </div>
                        )
                    })}</div>

            </div>
        </div>
    );
};

