import styles from "./AppStoreOptimizationBanner.module.css";
import Image from "next/image";
export const AppStoreOptimizationBanner = () => {
    return (
        <div className={styles.AppStoreOptimizationBannerParent}>
            <div className={styles.AppStoreOptimizationBannerParentFirstChild}>
                <h1>APP STORE OPTIMIZATION
                    (ASO) Increase store visibility.
                    Improve conversion rates.
                </h1>
                <p>Get the #1 App Store Optimization service! Drive growth with
                    Bottom Funnel ASO unified agency services and industry
                    leading proprietary ASO technologies.</p>
                <button>Sign Up For Free</button>
            </div>
            <div className={styles.AppStoreOptimizationBannerParentSecChild}>
                <Image
                    src={"/Images/AppStoreOptimization/banner.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    )
}