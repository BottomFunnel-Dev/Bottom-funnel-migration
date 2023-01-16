import React from 'react';
import styles from "./AgricultureWhyChooseUs.module.css";

export const AgricultureWhyChooseus = () => {
    return (
        <div className={styles.agricultureWhyChooseUsParentDiv}>
            <div className={styles.agricultureWhyChooseUsHeadingMainDiv}>
                <div className={styles.agricultureWhyChooseUsHeading1}>
                    <h1> Why Choose
                        <span> Us </span>
                    </h1>
                </div>
                <div className={styles.agricultureWhyChooseUsHeading2}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate perferendis at ad, repudiandae
                        laborum eos molestias hic sint quaerat esse minima non libero eveniet deserunt quae quas sit recusandae?
                    </p>
                </div>
            </div>

            <div className={styles.agricultureWhyChooseUsCardsMainDiv}>
                <div className={styles.agricultureWhyChooseUsDataCardsDiv1}>
                    <div className={styles.agricultureWhyChooseUsDataCardsSubDiv1}>
                        <div className={styles.agricultureDataCardsSubHeadingDiv}>
                            <img src='/Images/Agriculture/Vector-1.png' alt='icon' />
                            <h2> Customer Satisfaction </h2>
                        </div>

                        <p>
                            Upload in bulk, organize content in categories, add custom filters & upload extras.
                        </p>
                    </div>

                    <div className={styles.agricultureWhyChooseUsDataCardsSubDiv2}>
                        <div className={styles.agricultureDataCardsSubHeadingDiv}>
                            <img src='/Images/Agriculture/Vector-2.png' alt='icon' />
                            <h2> Flexibility </h2>
                        </div>

                        <p>
                            Showcase your content in a beautiful on-demand video catalog.
                        </p>
                    </div>
                </div>

                <div className={styles.agricultureWhyChooseUsDataCardsDiv1}>
                    <div className={styles.agricultureWhyChooseUsDataCardsSubDiv1}>
                        <div className={styles.agricultureDataCardsSubHeadingDiv}>
                            <img src='/Images/Agriculture/on time delivery.png' alt='icon' />
                            <h2> Deliver On Time </h2>
                        </div>

                        <p>
                            Offers subscription or one-time purchases. Accept credit cards & Paypal.
                        </p>
                    </div>

                    <div className={styles.agricultureWhyChooseUsDataCardsSubDiv2}>
                        <div className={styles.agricultureDataCardsSubHeadingDiv}>
                            <img src='/Images/Agriculture/StarLogo.png' alt='icon' />
                            <h2> Quality Assurance </h2>
                        </div>

                        <p>
                            Know what your audience likes & how your content is performing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
