import React from "react";
import styles from "./FlutterServices.module.css";

export const FlutterServices = () => {

    return (
        <>
            <div className={styles.flutterServicesMainDiv}>
                <div className={styles.flutterServicesheading}>
                    <h1> Flutter Application Development Services </h1>
                </div>

                <div className={styles.flutterServicesDescription}>
                    <p>
                        Bottom funnel flutter app development is all about the ease of use and an intuitive user experience. Flutter is a great option for both beginners and experts alike. It makes it easier to build apps that have a wide range of features, including support for rich animations and 3D effects.
                        With Flutter, you can be sure that your app will be responsive and highly scalable from day one. And as with all our services, we'll take care of everything from project setup to maintenance so you can focus on what matters most: your business! So let us help you bring your idea to life with efficiency and flair!
                    </p>
                </div>
                
                <div className={styles.flutterServicesContainerDiv}>
                    <div className={styles.flutterServiceBox}>
                        <div className={styles.flutterServicesContainerBoxes}>
                            <div className={styles.flutterServiceBoxIcon}>
                                <img src="Images/FlutterDevelopment/Icons/coding.png" />
                            </div>
                            <div className={styles.flutterServiceBoxHeading}>
                                <h6>Custom Flutter App Development</h6>
                            </div>
                            <div className={styles.flutterServiceBoxContent}>
                                <p>
                                    Flutter is designed to provide an alternative to other cross-platform development tools like Xamarin, React Native, and Swift. With its focus on performance, ease of use, and modern design principles, Fluter makes app development fun again!
                                </p>
                            </div>
                        </div>

                        <div className={styles.flutterServicesContainerBoxes}>
                            <div className={styles.flutterServiceBoxIcon}>
                                <img src="Images/FlutterDevelopment/Icons/wireframe (1).png" />
                            </div>
                            <div className={styles.flutterServiceBoxHeading}>
                                <h6>Prototype and wireframe Development</h6>
                            </div>
                            <div className={styles.flutterServiceBoxContent}>
                                <p>This framework helps in creating engaging, user-friendly experiences on both Android and iOS platforms. Flutter provides everything you need to build high-quality apps quickly. </p>
                            </div>
                        </div>

                        <div className={styles.flutterServicesContainerBoxes}>
                            <div className={styles.flutterServiceBoxIcon}>
                                <img src="Images/FlutterDevelopment/Icons/ux-interface.png" />
                            </div>
                            <div className={styles.flutterServiceBoxHeading}>
                                <h6>Flutter UI/UX Development</h6>
                            </div>
                            <div className={styles.flutterServiceBoxContent}>
                                <p>Flutter is the new kid on the block when it comes to mobile app development. Flutter apps offers users a choice of app development services for their needs in terms of UI/UX and functionality</p>
                            </div>
                        </div>

                        <div className={styles.flutterServicesContainerBoxes}>
                            <div className={styles.flutterServiceBoxIcon}>
                                <img src="Images/FlutterDevelopment/Icons/solution.png" />
                            </div>
                            <div className={styles.flutterServiceBoxHeading}>
                                <h6>Flutter Migration Solutions</h6>
                            </div>
                            <div className={styles.flutterServiceBoxContent}>
                                <p>With Flutter, you can target all major platforms including Android, iOS, and Windows with just a single codebase. Then make sure your app looks great on every device by using native UI components and animations!</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};
