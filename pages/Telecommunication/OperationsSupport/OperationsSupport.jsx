import React from 'react';
import styles from "./OperationsSupport.module.css";

export const OperationsSupport = () => {
    return (

        <div className={styles.operationSupportParentDiv}>
            <div className={styles.oprationsSupportTopContentDiv}>
                <div className={styles.operationsSupportHeadingDiv}>
                    <h1> Operations Support System (OSS)</h1>
                    <p> Science helps telcos ensure that their networks run like clockwork. </p>
                </div>

                <div className={styles.operationsSupportImageDiv}>
                    <img className={styles.orangeLine} src='/Images/Telecommunication/Orange Line.png' alt='image' />
                </div>
            </div>

            <div className={styles.operationSupportServices}>
                <div className={styles.operationServicesContentDiv}>
                    <h2> VoIP-based services </h2>

                    <ul>
                        With an extensive experience of delivering VoIP solutions, we create:

                        <li className={styles.operationServicesContentDivList}>
                            Server-side applications for softswitches;
                        </li>

                        <li className={styles.operationServicesContentDivList}>
                            Customized SIP-clients.
                        </li>

                        <li className={styles.operationServicesContentDivList}>
                            Vonage;
                        </li>

                        <li className={styles.operationServicesContentDivList}>
                            magicJack;
                        </li>

                        <li className={styles.operationServicesContentDivList}>
                            Dialpad.
                        </li>
                    </ul>

                </div>

                <div className={styles.operationServicesImageDiv}>
                    <img src='/Images/Telecommunication/TelecomImage1.png' alt='image' />
                </div>
            </div>

            <div className={styles.operationSupportServices}>
                <div className={styles.operationServicesContentDiv}>
                    <h2> Monitoring </h2>

                    <ul>
                        Based on BMC Remedy or ServiceNow® platform, our customized solutions allow for managing multiple
                        operations effectively:


                        <li className={styles.operationServicesContentDivList}>
                            Network resources inventory:
                        </li>

                        <li className={styles.operationServicesContentDivList}>
                            Performance management;
                        </li>

                        <li className={styles.operationServicesContentDivList}>
                            Fault management;
                        </li>

                        <li className={styles.operationServicesContentDivList}>
                            Trouble ticketing;
                        </li>

                        <li className={styles.operationServicesContentDivList}>
                            Fraud protection.
                        </li>
                    </ul>

                </div>

                <div className={styles.operationServicesImageDiv}>
                    <img src='/Images/Telecommunication/TelecomImage2.png' alt='image' />
                </div>
            </div>

        </div>
    );
};
