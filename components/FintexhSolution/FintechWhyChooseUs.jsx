import React from 'react';
import styles from "./FintechWhyChooseUs.module.css";

export const FintechWhyChooseUs = () => {

    const whychooseusfintechsolutiondata = [
        {
            img: "/Images/fintechsolutionpage/Vector.png",
            htxt: "Customer Satisfaction",
            stxt: "When it comes to customer satisfaction, there is no one-size-fits all solution. Every business and individual will have different needs when it comes to how satisfied their customers are.",
        },

        {
            img: "/Images/fintechsolutionpage/Vector-1.png",
            htxt: "Flexibility",
            stxt: "Flexibility is key when it comes to content marketing. You need to be able to adapt your strategy as the market changes, and you need to be ready to pivot if necessary. before they cause serious damage or inconvenience. ",
        },

        {
            img: "/Images/fintechsolutionpage/on time delivery.png",
            htxt: "Delivery On Time",
            stxt: "Delivering on time is critical for any business, and especially so for e-commerce businesses. If your customers don't have the patience to wait long periods of time for their orders to arrive,",
        },

        {
            img: "/Images/fintechsolutionpage/Component 183.png",
            htxt: "Quality Assurance",
            stxt: "Quality assurance (QA) is the process of determining whether a product or service meets the requirements specified by the customer.  It includes establishing and maintaining standards for quality,  ",
        },
    ]

    return (
        <div className={styles.fintechwhychooseus}>
            <div className={styles.fintechwhychooseusmainboxes}>
                <div className={styles.fintechwhychoosetextboxleft}>
                    <h1>
                        Why Choose <span className='specialtxt'>Us</span>
                    </h1>
                </div>

                <div className={styles.fintechwhychoosetextboxright}>
                    <p>
                        There are a lot of online marketing companies out there, and it can be difficult to determine which one is
                        right for your business. That's why we recommend choosing Bottom Funnel - our team has years of experience
                        in the industry, and we know how to help you reach your goals.
                    </p>
                </div>
            </div>

            <div className={styles.fintechsolutionwhychooseusflexingbox}>
                {whychooseusfintechsolutiondata.map((e) => {
                    return (
                        <div className={styles.whychooseusaftermappingdatabox}>
                            <div className={styles.whychooseusfintechlogobox}>
                                <img src={e.img} alt="logo" />
                            </div>

                            <div className={styles.whychooseustxtbox}>
                                <h4>{e.htxt}</h4>
                                <p>{e.stxt}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
