import Image from "next/image";
import React, { useState } from "react";
import styles from "./AgricultureConsumerApp.module.css";

export default function AgricultureConsumerApp({ driveData }) {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.plantBasedDriverApp}>
            <div className={styles.plantBasedDriverAppsub}>
                <div
                    className={styles.plantBasedDriverAppleft}
                    style={{
                        background: `url(${driveData.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={styles.logisticDriveImage}>
                        <Image
                            src={driveData.agricultureCustomerData[active].img.src}
                            alt={driveData.agricultureCustomerData[active].img.alt}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>

                <div className={styles.plantBasedDriverAppright}>
                    {driveData.agricultureCustomerData.map(({ title, icon, para }, idx) => {
                        return (
                            <div
                                key={title}
                                onMouseOver={() => setActive(idx)}
                                className={`styles.logistic-box-${idx}`}
                            >
                                <div className={styles.logisticlogo}>
                                    <Image src={icon.src}
                                        alt={icon.alt}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "15%", height: "100%" }}
                                    />
                                </div>

                                <h3> {title} </h3>
                                <p> {para} </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};