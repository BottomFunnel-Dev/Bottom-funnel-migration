import React from "react";
import styles from "./IonicServices.module.css";
import Image from "next/image";

export const IonicServices = () => {

    return (
        <>
            <div className={styles.ionicServicesContainer}>
                <h1>Services That We Offer</h1>
                <div className={styles.ionicServicesMainDiv}>
                    <div className={styles.ionicServicesBox}>
                        <div className={styles.ionicServicesaving}>
                          <div className={styles.ionicServicesImage}>
                                <Image
                                    src={"/Images/IonicAppDevelopment/icons/check.webp"}
                                    alt={"image"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h5> Open-source </h5>
                            <p>
                                One significant advantage of choosing Ionic is that it is an open-source framework that is available to use for free. It takes pride in being a very stable platform.
                            </p>
                        </div>

                        <div className={styles.ionicServicesaving}>
                           <div className={styles.ionicServicesImage}>
                                <Image
                                    src={"/Images/IonicAppDevelopment/icons/check.webp"}
                                    alt={"image"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h5> One App, Multiple Platforms </h5>
                            <p>
                                The Ionic framework gives your app an opportunity to work seamlessly across multiple operating systems with a native-like experience for app users.
                            </p>
                        </div>

                        <div className={styles.ionicServicesaving}>
                        <div className={styles.ionicServicesImage}>
                            <Image
                                src={"/Images/IonicAppDevelopment/icons/check.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                            <h5> Angular Base </h5>
                            <p>
                                The use of AngularJS in Ionic by default for developing robust applications offers benefits like extending the syntax of HTML to include components of your app.
                            </p>
                        </div>
                        <div className={styles.ionicServicesaving}>

                            <div className={styles.ionicServicesImage}>
                                <Image
                                    src={"/Images/IonicAppDevelopment/icons/check.webp"}
                                    alt={"image"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h5> Impressive UI </h5>
                            <p>
                                Ionic framework has high standards regarding the UI and offers a lot of options to build an interactive UI as they know that the user is attracted to great-looking apps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
