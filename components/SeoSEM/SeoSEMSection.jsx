import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
import styles from "./SeoSEMSection.module.css";
import Image from "next/image";

export default function SeoSEMSection() {

    return (
        <div className={styles._SeoSEMMain1}>
            <div className={styles.semgifDenote}>
            <Image
            src={"/Images/seopages/compsem.gif"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%"}}
          />
            </div>
            <div className={styles._SeoSEMupperdiv}>
                <div className={styles._SeoSEMtext} >
                    <div className={styles._SeoSEMheading}>Search Engine Marketing Agency</div>

                    <p className={styles._SeoSEMparagraph}>
                        Our Search Engine Marketing Services start with in-depth keyword research along with SEM campaign setup and optimization to deliver ROI-driven PPC management services. Our Search Engine Marketing Company follows a brand-focused approach backed by seamless coordination and detailed reporting, thus helping your clients meet their paid search goals.
                    </p>
                    <div className={styles._SeoSEMPricing}>
                        <button>Check SEM SEO Pricing</button>
                    </div>
                </div>

                <SeoForm />
            </div>

        </div>

    )
}
