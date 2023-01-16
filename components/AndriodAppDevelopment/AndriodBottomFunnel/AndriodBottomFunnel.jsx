import React from "react";
import styles from "./AndriodBottomFunnel.module.css";

export const AndriodBottomFunnel = () => {

    return (
        <>
            <div className={styles.andriodBottomFunnelMainDiv}>
                <div className={styles.andriodBottomFunnelheading}>
                    <h1> Why Choose Bottom Funnel For Mobile App Development </h1>
                </div>

                <div className={styles.andriodBottomFunnelContainerDiv}>
                    <div className={styles.andriodBottomFunnelServiceBox}>
                        <div className={styles.andriodBottomFunnelContainerBoxes}>
                            <div className={styles.andriodBottomFunnelBoxIcon}>
                                <img className={styles.andriodBottomFunnelImage} src="Images/AndriodDevImages/icons/1lightbulb.png" alt="image"/>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxHeading}>
                                <h6>Watch Your App Idea Growing</h6>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxContent}>
                                <p>
                                    We offer comprehensive brand and app development services that will help you launch and grow your business online. From planning and launching your website to developing an app, we have you covered.
                                </p>
                            </div>
                        </div>

                        <div className={styles.andriodBottomFunnelContainerBoxes}>
                            <div className={styles.andriodBottomFunnelBoxIcon}>
                                <img className={styles.andriodBottomFunnelImage} src="Images/AndriodDevImages/icons/1best-employee.png" alt="image"/>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxHeading}>
                                <h6>Dedicated and Expert Team</h6>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxContent}>
                                <p>We understand what constitutes quality work and we've put our expertise to good use when building your app. We have an experienced team that has years of experience working on similar projects, meaning you get the best results possible.</p>
                            </div>
                        </div>

                        <div className={styles.andriodBottomFunnelContainerBoxes}>
                            <div className={styles.andriodBottomFunnelBoxIcon}>
                                <img className={styles.andriodBottomFunnelImage} src="Images/AndriodDevImages/icons/1security.png" alt="image"/>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxHeading}>
                                <h6>Security, Safety and Confidentiality</h6>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxContent}>
                                <p>We know how important it is to keep personal information confidential online. That's why we offer a top-notch level of security and privacy protection for your data every time you use our services.</p>
                            </div>
                        </div>

                    </div>

                    <div className={styles.andriodBottomFunnelServiceBox}>
                        <div className={styles.andriodBottomFunnelContainerBoxes}>
                            <div className={styles.andriodBottomFunnelBoxIcon}>
                                <img className={styles.andriodBottomFunnelImage} src="Images/AndriodDevImages/icons/1agile-team.png" alt="image"/>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxHeading}>
                                <h6>Agile Methodology</h6>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxContent}>
                                <p>
                                    Agile methodology is all about speed and efficiency. It helps organizations in delivering their products faster and with much less investment. Learn it, apply it, and reap the benefits of agile methods.
                                </p>
                            </div>
                        </div>

                        <div className={styles.andriodBottomFunnelContainerBoxes}>
                            <div className={styles.andriodBottomFunnelBoxIcon}>
                                <img className={styles.andriodBottomFunnelImage} src="Images/AndriodDevImages/icons/1worldwide.png" alt="image"/>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxHeading}>
                                <h6>Global Acceptance</h6>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxContent}>
                                <p>While gaining global acceptance for your brand isn't as tough as you think, there are certain things that can help boost the popularity of your logo everywhere. .</p>
                            </div>
                        </div>

                        <div className={styles.andriodBottomFunnelContainerBoxes}>
                            <div className={styles.andriodBottomFunnelBoxIcon}>
                                <img className={styles.andriodBottomFunnelImage} src="Images/AndriodDevImages/icons/1 solution.png" alt="image"/>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxHeading}>
                                <h6>Support And Maintenance</h6>
                            </div>
                            <div className={styles.andriodBottomFunnelBoxContent}>
                                <p>We provide free service and support subject to the terms set forth in the contract. We also offer other monthly or yearly packages depending on your needs.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
