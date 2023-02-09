// export const PlantBaseDriverApp = () => {
import React, { useState } from "react";
import styles from "./PlantBaseDriverApp.module.css";
export default function PlantBaseDriverApp({ driveData }) {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.plantBasedDriverApp}>
            {/* <h1>{driveData.sectionTitle}</h1> */}
            <div className={styles.plantBasedDriverAppsub}>
                <div className={styles.plantBasedDriverAppleft}
                    style={{
                        background: `url(${driveData.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={styles.logisticDriveImage}>
                        <img src={driveData.driverdata[active].img.src}
                            alt={driveData.driverdata[active].img.alt}
                        />
                    </div>
                </div>

                <div className={styles.plantBasedDriverAppright}>
                    {driveData.driverdata.map(({ title, icon, para }, idx) => {
                        return (
                            <div
                                key={title}
                                onMouseOver={() => setActive(idx)}
                                className={`logistic-box-${idx}`}
                            >
                                <div className={styles.logisticLogo}>
                                    <img src={icon.src} alt={icon.alt} />
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
