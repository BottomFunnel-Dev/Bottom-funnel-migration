import React from "react";
import styles from "./IonicServices.module.css";

export const IonicServices = () => {

    return (
        <>
            <div className={styles.ionicServicesContainer}>
                <h1>Services That We Offer</h1>
                <div className={styles.ionicServicesMainDiv}>
                    <div className={styles.ionicServicesBox}>
                        <div className={styles.ionicServicesaving}>
                            <img className={styles.ionicServicesavingImage} src="Images/IonicAppDevelopment/icons/check.png" alt="image"/>
                            <h5> Open-source </h5>
                            <p>
                                One significant advantage of choosing Ionic is that it is an open-source framework that is available to use for free. It takes pride in being a very stable platform.
                            </p>
                        </div>

                        <div className={styles.ionicServicesaving}>
                            <img className={styles.ionicServicesavingImage} src="Images/IonicAppDevelopment/icons/check.png" alt="image"/>
                            <h5> One App, Multiple Platforms </h5>
                            <p>
                                The Ionic framework gives your app an opportunity to work seamlessly across multiple operating systems with a native-like experience for app users.
                            </p>
                        </div>

                        <div className={styles.ionicServicesaving}>
                            <img className={styles.ionicServicesavingImage} src="Images/IonicAppDevelopment/icons/check.png" />
                            <h5> Angular Base </h5>
                            <p>
                                The use of AngularJS in Ionic by default for developing robust applications offers benefits like extending the syntax of HTML to include components of your app.
                            </p>
                        </div>
                        <div className={styles.ionicServicesaving}>
                            <img className={styles.ionicServicesavingImage} src="Images/IonicAppDevelopment/icons/check.png" />
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
