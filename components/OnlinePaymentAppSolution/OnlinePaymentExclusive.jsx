import React from 'react'
import styles from "./OnlinePaymentExclusive.module.css"

export const OnlinePaymentExclusive = () => {

    const onlinepaymentexclusivedata = [
        {
            icon: "/Images/onlinepaymentpage/bill 1.png",
            htxt: "Billing Software Development",
            stxt: "Our Experienced developers analyze your organization's billing requirements and build a comprehensive billing requirements and build a comprehensive billing & invoicing platform designed to accept electronic payments, generate automated invoices, and maintain compliance with payment industry standards.",
        },

        {
            icon: "/Images/onlinepaymentpage/secure-shield 1.png",
            htxt: "Fraud Protection & Detection",
            stxt: "Highly experienced froud detection & prevention software developers engineer custom-tailored solutions designed to detect & prevent fraudent activities from occurring a superior experience",
        },

        {
            icon: "/Images/onlinepaymentpage/operation 1.png",
            htxt: "Mobile Payment Software",
            stxt: "Integrates custom features modules and functionalities into your existing payments processing systems and create custom-tailored mobile payment software solutions from the ground up.",
        },

        {
            icon: "/Images/onlinepaymentpage/payment-method 1.png",
            htxt: "Online Payments ",
            stxt: "Developers have extensive knowledge and industry-specific experience building customizing, and integrating PCI & DSS-compliant payment processing systems designed to help SMB and Enterprise businesses thrive along with MSPs payFacs and PSPs",
        },

        {
            icon: "/Images/onlinepaymentpage/bank 1.png",
            htxt: "ACH & Check 21",
            stxt: "Propel your payments to a new level of security and processing.At chetu we customize your ACH payment processing and check 21 capabilities to seamlessly integrate echeck processing functionality and credit card processing with secure verification systems and enhanced UX designs.",
        },

        {
            icon: "/Images/onlinepaymentpage/security 1.png",
            htxt: "Payment Gateways & Processors",
            stxt: "Our expert software developers have extensive knowledge and experience in building customizing and integrating PCI DSS compliant payment gateway systems designed for ISOs, MSPs and PSPs.",
        },
    ]

    return (
        <div className={styles.onlinepaymentexclusivemainboxes}>
            <h1>
                <span className={styles.specialcolor}>Exclusive</span> Solutions
            </h1>

            <div className={styles.onlinepaymentexclusivemappingbox}>
                {onlinepaymentexclusivedata.map((e) => {
                    return (
                        <div className={styles.onlinepaymentexclusivemappingboxindivisually}>
                            <div className={styles.onlinepaymentexclusivemappingboxindivisuallyforlogo}>
                                <img src={e.icon} alt='icon' />
                            </div>

                            <div className={styles.onlinepaymenth4typetext}><h4>{e.htxt}</h4>
                                <p>{e.stxt}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
