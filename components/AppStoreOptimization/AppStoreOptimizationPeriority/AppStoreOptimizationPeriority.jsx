
import styles from "./AppStoreOptimizationPeriority.module.css";
import Image from "next/image";
export const AppStoreOptimizationPeriority = () => {
    return (
        <div className={styles.AppStoreOptimizationPeriorityParent}>
            <div className={styles.AppStoreOptimizationPeriorityParentFirstChild}>

                <div>
                    <h1> How to find high priority keywords
                    </h1>
                    <ul className={styles.AppStoreOptimizationPeriorityParentPionts}>
                        <li>Focus on keywords that you are already ranking for and compare
                            the performance with competitor rankings</li>
                        <li>Spot which competitor is most aggressive on certain keywords, or
                            detect your or competitors’ unique keywords</li>
                        <li>Get keyword inspiration with auto complete search suggestions</li>
                        <li>Discover keywords that are currently trending in a specific country.</li>
                        <li>Browse through App Radar’s comprehensive keyword database
                            and get AI-based keyword inspiration</li>
                    </ul>
                </div>
                <div>
                    <Image
                        src={"/Images/AppstoreOptimization/Priority1.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
            <div className={styles.AppStoreOptimizationPeriorityParentsecChild}>

                <div>
                    <h1>How to develop a high
                        performing app store listing
                    </h1>
                    <ul className={styles.AppStoreOptimizationPeriorityParentPionts}>
                        <li>B Discover how to optimize your app across different countries with a
                            personalized App Store Optimization Score</li>

                        <li>Benefit from AI-powered App Store Optimization recommendations
                            that will help you get more visibility</li>
                        <li> Know where to begin with suggestions from the lowest to the
                            highest priority</li>
                        <li>Get creatives inspiration from competitors across various countries</li>
                        <li>B Identify which updates impacted app growth and replicate
                            successful strategies</li>
                    </ul>
                </div>
                <div>
                    <Image
                        src={"/Images/AppstoreOptimization/Priority2.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
            <div className={styles.AppStoreOptimizationPeriorityParentthirdChild}>

                <div>
                    <h1>How to automate your App Store
                        Optimization workflow in Google Play
                        Store and Apple App Store</h1>
                    <ul className={styles.AppStoreOptimizationPeriorityParentPionts}>
                        <li>Edit and optimize your app store listings for various countries on
                            one page
                        </li>
                        <li>Update metadata directly in App Radar without login into Google
                            Play Console or App Store ConnectUpdate metadata directly in App Radar without login into Google
                            Play Console or App Store Connect</li>
                        <li>Get inspiration from competitor’s metadata textsGet inspiration
                            from competitor’s metadata texts</li>
                        <li>Preview your metadata changes before putting them live</li>
                        <li>B iOS special: create a new app version directly from App Radar
                            without logging into App Store Connect</li>
                    </ul>
                </div>
                <div>
                    <Image
                        src={"/Images/AppstoreOptimization/Priority3.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }} />
                </div>
            </div>
            <div className={styles.AppStoreOptimizationPeriorityParentFfourthChild}>

                <div>
                    <h1>How to analyze the impact of
                        your App Store Optimization
                        update
                    </h1>
                    <ul className={styles.AppStoreOptimizationPeriorityParentPionts}>
                        <li>Monitor how store views and installs evolve after an update</li>
                        <li>Analyze which impact your update had on keyword rankings</li>
                        <li>Keep track of the effect on conversion rates</li>
                        <li>Understand the correlation between organic and paid user
                            acquisition
                        </li>
                        <li>Take other impact factors such as crash rates into consideration
                            and see the bigger picture in one single tool</li>
                    </ul>
                </div>
                <div>
                    <Image
                        src={"/Images/AppstoreOptimization/Priority4.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }} />
                </div>
            </div>

        </div>
    )
}