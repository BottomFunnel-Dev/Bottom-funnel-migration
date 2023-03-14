
import styles from "./AppStoreOptimizationFeature.module.css";
import Image from "next/image";
export const AppStoreOptimizationFeature = () => {
    return (
        <div className={styles.AppStoreOptimizationFeatureParent}>
            <h1>Exclusive Features</h1>

            <div className={styles.AppStoreOptimizationFeatureParentonlyChild}>
                <div className={styles.AppStoreOptimizationFeatureParentonlyChildFirstChild}>
                    <div>
                        <div> <Image
                            src={"/Images/AppStoreOptimization/Feature1.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} /></div>
                        <h4>Search Optimization</h4>
                        <p>Optimize your metadata to increase
                            organic impressions and drive more
                            organic downloads from the App
                            Store and Google Play. Let us optimize
                            your app store presence</p>
                    </div>
                    <div className={styles.AppStoreOptimizationFeatureParentborder}>
                        <div><Image
                            src={"/Images/AppStoreOptimization/Feature2.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} /></div>
                        <h4>Conversion Optimization
                        </h4>
                        <p>Optimize your creatives for better
                            conversion. Drive more organic
                            downloads, better rankings and lower
                            user acquisition costs for every
                            channel. Let us help you boost
                            conversion and revenue.</p>
                    </div>
                    <div>
                        <div><Image
                            src={"/Images/AppStoreOptimization/Feature3.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} /></div>
                        <h4>A/B Multivariate Testing</h4>
                        <p>Drive ROI with A/B Experimentation,
                            Multivariate, Split and Funnel Testing.
                            Let us help you stay on top of trends
                            and deliver what users want.</p>
                    </div>
                </div>
                <div className={styles.AppStoreOptimizationFeatureParentonlyChildSecChild}>
                    <div>
                        <div><Image
                            src={"/Images/AppStoreOptimization/Feature4.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} /></div>
                        <h4>Paid Search</h4>
                        <p>Apple Search Ads and Google Ads
                            can help an app index faster for
                            keywords and perform better when
                            managed side by side with ASO. Let us
                            help you align your organic and paid
                            search traffic.</p>
                    </div>
                    <div className={styles.AppStoreOptimizationFeatureParentborder}>
                        <div><Image
                            src={"/Images/AppStoreOptimization/Feature5.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} /></div>
                        <h4>Focus Groups & Surveys</h4>
                        <p>Use App Focus Groups to test icons,
                            screenshots, titles and descriptions for
                            optimal conversion. Find out what
                            users are saying about your app</p>
                    </div>
                    <div>
                        <div><Image
                            src={"/Images/AppStoreOptimization/Feature6.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} /></div>
                        <h4>ASO Technology</h4>
                        <p>ASO Technology from Gummicube is
                            best in class. DATACUBE and
                            Splitcube can help you improve app
                            growth and discoverability</p>
                    </div>
                </div>
            </div>
        </div>
    )
}