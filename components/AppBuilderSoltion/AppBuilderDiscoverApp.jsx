import React from 'react';
import styles from "./AppBuilderDiscoverApp.module.css";

export const AppBuilderDiscoverApp = () => {

    const appbilderdiscoverdata = [
        {
            xtt: "Create push notification and see how push notifications will be displayed to your app users",
        },

        {
            xtt: "Play a radio,publish an image in the social wall,listen to your favorite podcast and more",
        },

        {
            xtt: "Take screenshots for the app,store and much more",
        }
    ]

    return (
        <div className={styles.appbuilderdiscoverappmainboxes}>

            <div className={styles.appbuilderdiscoverleftbox}>
                <img src='/Images/Appbuildersolutions/Screens/Group 340125.png' alt='images' />
            </div>

            <div className={styles.appbuilderdiscoverrightbox}>
                <h1>
                    Discover Your App by Bottom Funnel!
                </h1>
                <p>
                    Get an exclusive experience with Disclose mobile app try, preview and test your app before
                    submitting it to the app stores.
                </p>

                <div className={styles.appbuildermappingdatasome}>{appbilderdiscoverdata.map((e) => {
                    return (
                        <div className={styles.xttmapperdatafromappbuilder}>
                            <div className={styles.svgimages}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                                </svg>
                            </div>
                            
                            <div className={styles.leftboxfortextappbuilder}>
                                <h5>{e.xtt}</h5>
                            </div>
                        </div>
                    )
                })}</div>


                <div className={styles.lowerbuttonandsomeiconsappbuilderdiscover}>
                    <div>
                        <button className={styles.appbuilderdiscoversomeimageandbutton}>Take a look!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
