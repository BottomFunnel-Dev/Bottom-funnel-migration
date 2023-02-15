import React from "react";
import styles from "./Cannabissolution.module.css";

export default function Cannabissolution() {
    const cannabisSolution = [
        {
            p: " Social media Integration",
        },
        {
            img: "/Images/cannabisPhotos/payment.png",
            p: "Documents sharing",
        },
        {
            img: "/Images/cannabisPhotos/reportsanalytics.png",
            p: "Sign up/log in",
        },
        {
            img: "/Images/cannabisPhotos/option.png",
            p: "Ratings",
        },
        {
            img: "/Images/cannabisPhotos/CoininHand.png",
            p: " Parental control",
        },
        {
            img: "/Images/cannabisPhotos/Speaker.png",
            p: "Live Streaming",
        },
    ];

    return (
        <div className={styles.szmedicalsolution}>
            <div className={styles.szmedicalheading}>
                <h2>
                    Medical Cannabis Delivery Solution
                </h2>
                <p>
                    Deliver Medical Cannabis to users all around the world and make
                    Millions !
                </p>
            </div>

            <div className={styles.szmedicalsub}>
                <div>
                    <div className={styles.greybg}>
                        <div className={styles.szlocation}>
                            <img src="/Images/newcannabispage/icons/Location.png" />{" "}
                        </div>

                        <h5>
                            Real-Time Tracking
                        </h5>
                    </div>
                    <p>
                        Track your drivers in real-time, analyze their performance, and improve your business processes to streamline deliveries using a robust admin panel.{" "}
                    </p>
                </div>

                <div>
                    <div className={styles.greybg}>
                        <div className={styles.szlocation}>
                            <img src="/Images/newcannabispage/icons/Debit Card.png" />{" "}
                        </div>
                        <h5>Multiple Payment Option</h5>
                    </div>
                    <p>
                        Less time spent in the ordering process means better user experience. Let your app users pay easily multiple payment improve their overall app experience.{" "}
                    </p>
                </div>

                <div>
                    <div className={styles.greybg}>
                        <div className={styles.szlocation}>
                            <img src="/Images/newcannabispage/icons/Conclusion Contract.png" />{" "}
                        </div>
                        <h5> Reports and Analytics</h5>
                    </div>
                    <p>
                        Use the app's in-built advanced analytics to see and analyze how your business is performing. Identify problems and make informed decisions to grow your sales.{" "}
                    </p>
                </div>

                <div>
                    <div className={styles.greybg}>
                        <div className={styles.szlocation}>
                            <img src="/Images/newcannabispage/icons/List.png" />{" "}
                        </div>

                        <h5>
                            Manage Orders
                        </h5>

                    </div>
                    <p>
                        Avoid messy ordering processes and long queues with our Pizza Delivery service app. Manage everything
                        while sitting at your home with a robust Admin Panel.{" "}
                    </p>
                </div>

                <div>
                    <div className={styles.greybg}>
                        <div className={styles.szlocation}>
                            <img src="/Images/newcannabispage/icons/Coin in Hand.png" />{" "}
                        </div>
                        <h5> Better ROI </h5>
                    </div>
                    <p>
                        Make effective strategies by using features like Push Notifications and provide real-time updates to your
                        customers about new deals to increase your ROI.{" "}
                    </p>
                </div>

                <div>
                    <div className={styles.greybg}>
                        <div className={styles.szlocation}>
                            <img src="/Images/newcannabispage/icons/Speaker.png" />{" "}
                        </div>
                        <h5> Promote Business Effectively </h5>
                    </div>
                    <p>
                        Provide your customer loyalty bonuses, introduce referrals and do a lot more to promote your business using
                        all-in-one robust admin panel.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};
