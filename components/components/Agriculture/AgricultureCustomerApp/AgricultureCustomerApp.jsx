import Image from "next/image";
import React, { useState } from "react";
import styles from "./AgricultureCustomerApp.module.css";

export default function xAgricultureCustomerApp({ agricultureCustomerApp }) {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.agricultureCustomerApp}>
            <h1>
                {agricultureCustomerApp.sectionTitle}
            </h1>

            <div className={styles.agricultureCustomerAppsub}>
                <div className={styles.agricultureCustomerAppright}>
                    {agricultureCustomerApp.agricultureCustomerApp.map(({ title, icon, para }, idx) => {
                        return (
                            <div key={title}
                                onMouseOver={() => setActive(idx)}
                                className={`style.agricultureCustomerAppApp-box-${idx}`}
                            >
                                <div className={styles.agricultureCustomerAppApplogo}>
                                    <Image src={icon.src}
                                        alt={icon.alt}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "13%", height: "100%" }}
                                    />
                                </div>

                                <h3> {title} </h3>
                                <p> {para} </p>
                            </div>
                        );
                    })}
                </div>
                
                <div className={styles.agricultureCustomerAppleft}
                    style={{
                        background: `url(${agricultureCustomerApp.background})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={styles.agricultureCustomerAppAppCustomerImage}>
                        <Image
                            src={agricultureCustomerApp.agricultureCustomerApp[active].img.src}
                            alt={agricultureCustomerApp.agricultureCustomerApp[active].img.alt}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
