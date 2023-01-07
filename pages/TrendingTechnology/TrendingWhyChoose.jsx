import React from 'react';
import styles from "./TrendingWhyChoose.module.css";

export const TrendingWhyChoose = () => {
    const trendingwhychoosedata = [
        {
            no: 1,
            htxt: "cost savings",
            stxt: "Apps that are developed using xamarin underpin standard native UI cintrols create apps that look and work native and thus making it one of the most preferred platforms by xamarin dvelopers.",
        },

        {
            no: 2,
            htxt: "culture fitment",
            stxt: "Xamarin intef grates a spectrum of functionalities meant for platform  native APIs empoering Zamarin developers to  ",
        },

        {
            no: 3,
            htxt: "Hire experts",
            stxt: "xamarin  complied codes that are both dynamic and high performing.Its complied code accesses the native APIs empoering Zamarin developers to build apps without .",
        },

        {
            no: 4,
            htxt: "Diligent developers",
            stxt: "Xamarin caters to the needs of Z tform libraries UI controls and third-party web app development services along with the previlege to pick components as per price tag.",
        },

        {
            no: 5,
            htxt: "Tech consultancy",
            stxt: "Adding to xamarin's importance as a cross platform is facilitated with app logic that can be shared later.The added feature thus helps zamarin developers to get the ease of highly intutive tools.",
        },

        {
            no: 6,
            htxt: "Accountable developers",
            stxt: "Xamarin the cross-platform framework helps Xamarin's developers keep the insights track of the app's exceptions and crashes resulting in the application's performance improvisation.",
        },
    ]
    return (
        <div className={styles.trendingtechnologywhychoosemainboxes}>
            <h1>Why Choose Bottom Funnel ? </h1>
            <p>We at Bottom Funnel provide be spoke mobility solutions as one of the leading mobile application development company in UK & India. Whether you are looking for a multi-platform mobile app development company or a professional and be spoke mobile application creation service, you have come to the right place.you can rely on our talented team of mobile app developers to help you achieve your business goals and convey your message directly to your customers.We offer our customers a transformative digital experience with our web and mobile app development services.</p>
            <div className={styles.trendingtechnologywhychoosemainboxesmapperspecialbox}>
                <div className={styles.trendingtexhwhychooseflexbox}>{trendingwhychoosedata.map((e) => {
                    return (
                        <div className={styles.indivisuallytrendingwhychooseus}>
                            <div className={styles.numberandhtxtindtrentech}>

                                <div className={styles.numberindtrentech}>
                                    <h1>{e.no}.</h1>
                                </div>

                                <div className={styles.textindtrentech}>
                                    <h4>{e.htxt}</h4>
                                    <p>{e.stxt}</p>
                                </div>
                            </div>
                            

                        </div>
                    )
                })}</div>

            </div>

        </div>
    )
}
