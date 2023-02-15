import React from 'react'
import styles from "./OnlinePaymentApplications.module.css"

export const OnlinePaymentApplications = () => {

    const onlinepaymentmobilesoulutiondata = [
        {
            xtt: "Contactless Mobile Payments",
        },

        {
            xtt: "Mobile Wallet Apps",
        },

        {
            xtt: "E-Commerce Payment",
        },

    ]

    return (
        <div className={styles.onlinepaymentmobileapplicationmainbox}>
            <div className={styles.onlinepaymentmobileapplicationleftbox}>

                <div className={styles.onlinepaymentmobileapplicationleftboxformobileimage}>
                    <img src='/Images/onlinepaymentpage/contactless mobile payments.webp' alt='images' />
                </div>
            </div>

            <div className={styles.onlinepaymentmobileapplicationrightbox}>
                <div className={styles.onlinepaymentmobileapplicationtetxtupperheadline}>
                    <h1>
                        <span className={styles.specialcolor}>Payment</span> Application Features
                    </h1>
                </div>

                {onlinepaymentmobilesoulutiondata.map((e) => {
                    return (
                        <div className={styles.onlinepaymentmobileapplicationmappingbox}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>

                            <h4>{e.xtt}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
