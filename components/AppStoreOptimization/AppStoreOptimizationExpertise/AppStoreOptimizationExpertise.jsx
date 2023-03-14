

import styles from "./AppStoreOptimizationExpertise.module.css";
import Image from "next/image";
export const AppStoreOptimizationExpertise = () => {
    return (
        <div className={styles.AppStoreOptimizationExpertiseParent}>

            <h1>
                Strong focus and expertise in Apple Search Ads
            </h1>
            <div className={styles.AppStoreOptimizationExpertiseParentonlychild}>
                <div>
                    <h4>Trusted partner
                    </h4>
                    <div>
                        <Image
                            src={"/Images/AppstoreOptimization/Expertise1.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} />
                    </div>
                    <p>Apple Search Ads Partner trusted
                        by top app publishers</p>
                </div>

                <div>
                    <h4>100% growth
                    </h4>
                    <div>
                        <Image
                            src={"/Images/AppstoreOptimization/Expertise2.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} />
                    </div>
                    <p>the proven result of our enterprise
                        customers in the first 3 months</p>
                </div>


                <div>
                    <h4>90% automation

                    </h4>
                    <div>
                        <Image
                            src={"/Images/AppstoreOptimization/Expertise3.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} />
                    </div>
                    <p>automate up to 90% of the
                        account optimization</p>
                </div>


                <div>
                    <h4>200+ rules

                    </h4>
                    <div>
                        <Image
                            src={"/Images/AppstoreOptimization/Expertise4.webp"}
                            alt={"image"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }} />
                    </div>
                    <p>to automate the Apple Search
                        Ads management</p>
                </div>
            </div>
        </div>
    )
}