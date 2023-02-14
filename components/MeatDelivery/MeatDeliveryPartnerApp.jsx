import Image from 'next/image';
import React from 'react';
import styles from "./MeatDeliveryPartnerApp.module.css";

export const MeatDeliveryPartnerApp = () => {

    const meatdeliverypartnerappdata = [

        {
            htxt: "Manage Offers & Discounts",
            stxt: "Partners can give special offers and discount to increase their customer base and earn their loyalty.",
        },

        {
            htxt: "Menu Category and Order Management",
            stxt: "The partners can manage menu items and orders to increase customer traffic and efficiency.",
        },


        {
            htxt: "Chat Support",
            stxt: "This Feature enables the partners to personally chat whit their customers as well as the admin and resolve their queries.",
        },


        {
            htxt: "Custom Alerts",
            stxt: "The partner will get a notification for every new activity related to them on the app which will make them stay updated.",
        },
    ]

    return (
        <div className={styles.meatdeliverypartnerappmainboxes}>
            <div className={styles.meatdeliverypartnerleftbox}>
                <div className={styles.meatdeliverypartnerleftboxmobilebox}>
                    <Image src={'/Images/meatdelieveryapp/Group 1331.png'}
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
                            <div className={styles.meatdeliveryflexingboxindivisually}>
                                <h4> {e.htxt} </h4>
                                <p> {e.stxt} </p>
                            </div>
                        )
                    })}</div>

            </div>
        </div>
    );
};

