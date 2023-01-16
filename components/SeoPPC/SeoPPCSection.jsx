import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
import styles from "./SeoPPCSection.module.css";

export default function SeoPPCSection() {

    return (
        <div className={styles._SeoPPCMain1}>
            <div className={styles.ppcgifDenote}>
                <img src="Images/seopages/8.gif" alt="images" />
            </div>
            <div className={styles._SeoPPCupperdiv}>
                <div className={styles._SeoPPCtext} >
                    <div className={styles._SeoPPCheading}>PPC Management Services</div>

                    <p className={styles._SeoPPCparagraph}>
                        Our Search Engine Marketing Services start with in-depth keyword research along with PPC campaign setup and optimization to deliver ROI-driven PPC management services. Our Search Engine Marketing Company follows a brand-focused approach backed by seamless coordination and detailed reporting, thus helping your clients meet their paid search goals.
                    </p>
                    <div className={styles._SeoPPCPricing}>
                        <button> Check PPC SEO Pricing</button>
                    </div>
                </div>

                <SeoForm />
            </div>

        </div>

    )
}
