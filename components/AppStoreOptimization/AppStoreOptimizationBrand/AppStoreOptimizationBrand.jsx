
import styles from "./AppStoreOptimizationBrand.module.css";
import Image from "next/image";
export const AppStoreOptimizationBrand = () => {
    return (
        <div className={styles.AppStoreOptimizationBrandParent}>
            <div className={styles.AppStoreOptimizationBrandParentPara} > <p>Trusted By Global Brands</p></div>

            <div><Image
                src={"/Images/ContentMarketingServices/Brand1.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "80%" }}
            /></div>
            <div> <Image
                src={"/Images/ContentMarketingServices/Brand2.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "80%" }}
            /></div>
            <div><Image
                src={"/Images/ContentMarketingServices/Brand3.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "80%" }}
            /></div>
            <div><Image
                src={"/Images/ContentMarketingServices/Brand4.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "80%" }}
            /></div>
            <div><Image
                src={"/Images/ContentMarketingServices/Brand5.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "80%" }}
            /></div>
            <div> <Image
                src={"/Images/ContentMarketingServices/Brand6.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "80%" }}
            />
            </div>






        </div>
    )
}