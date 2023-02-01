import React from 'react';
import styles from "./OnlinePaymentWhyChoose.module.css";

export const OnlinePaymentWhyChoose = () => {
    const paymentwhychoosedata = [
        {
            icon: "/Images/onlinepaymentpage/customer satisfaction.png",
            htxt: "Customer Satisfaction ",
            stxt: "Upload in bulk,organise content in categories, add custom filters & upload extras.",
        },

        {
            icon: "/Images/onlinepaymentpage/flexibility.png",
            htxt: "Flexibility",
            stxt: "Showcase your content in a beautiful on-demand video catalog.",
        },

        {
            icon: "/Images/onlinepaymentpage/on time delivery.png",
            htxt: "Delivery On Time",
            stxt: "Offer Subscriptions or one-time purchases.Accept credit cards & PayPal",
        },

        {
            icon: "/Images/onlinepaymentpage/quality assurance.png",
            htxt: "Quality Assurance",
            stxt: "Know what your audience likes & how your content is performing.",
        },
    ]

    return (
        <div className={styles.onlinepaymentwhychoosemainbox}>
            <div className={styles.onlinepaymentwhychooseleftbox}>
                <h1> Why Choose Us </h1>
                <p>
                    You take care of the video quality and we take care of everything else that you require
                </p>
            </div>

            <div className={styles.onlinepaymentwhychooserightbox}>
                {paymentwhychoosedata.map((e) => {
                    return (
                        <div className={styles.onlinepaymentwhychoosemappingdata}>
                            <div className={styles.onlinepaymentwhychooseusmappingdatalogo}>
                                <img src={e.icon} alt="images" />
                            </div>

                            <div className={styles.onlinepaymentwhychoosemappingdatatxt}>
                                <h3>{e.htxt}</h3>
                                <p>{e.stxt}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
