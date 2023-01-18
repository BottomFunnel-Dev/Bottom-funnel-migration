import React, { useState } from "react";
import styles from "./AgricultureCustomerApp.module.css";

export default function AgricultureCustomerApp({ agricultureCustomerApp }) {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.agricultureCustomerApp}>
            <h1>{agricultureCustomerApp.sectionTitle}</h1>
            <div className={styles.agricultureCustomerAppsub}>
                <div className={styles.agricultureCustomerAppright}>
                    {agricultureCustomerApp.agricultureCustomerApp.map(({ title, icon, para }, idx) => {
                        return (
                            <div
                                key={title}
                                onMouseOver={() => setActive(idx)}
                                className={`style.agricultureCustomerAppApp-box-${idx}`}
                            >
                                <div className={styles.agricultureCustomerAppApplogo}>
                                    <img src={icon.src} alt={icon.alt} />
                                </div>
                                <h3>{title}</h3>
                                <p>{para}</p>
                            </div>
                        );
                    })}
                </div>

                <div
                    className={styles.agricultureCustomerAppleft}
                    style={{
                        background: `url(${agricultureCustomerApp.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={styles.agricultureCustomerAppAppCustomerImage}>
                        <img
                            src={agricultureCustomerApp.agricultureCustomerApp[active].img.src}
                            alt={agricultureCustomerApp.agricultureCustomerApp[active].img.alt}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
