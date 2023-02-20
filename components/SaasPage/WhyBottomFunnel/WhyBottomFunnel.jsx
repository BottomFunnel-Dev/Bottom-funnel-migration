import React from "react";
import styles from "./WhyBottomFunnel.module.css";
import Image from "next/image";

export const WhyBottomFunnel = () => {
  return (
    <>
      <div className={styles.whyBFMainDiv}>
        <div className={styles.WhyBFLeftDiv}>
            <div className={styles.citrusbugImage}>
                <Image
                    src={"/Images/saasPhotos/SaasImages/citrusbug.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
        </div>
        <div className={styles.whyBFrightDiv}>
            <div className={styles.whyBFrightDivHeading}>
                <h1>
                    Why Bottom Funnel ?
                </h1>
                <p>Apart from top Notch Development their are several reason to choose us.</p>
            </div>

            <div className={styles.whyBFContainerDiv}>
                <div className={styles.whyBFContainerData}>
                    <div className={styles.whyBFdataDiv}>
                        <div className={styles.whyBFdataLogo}>
                            <Image
                                src={"/Images/saasPhotos/SaasImages/integrity.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                                />
                        </div>
                        <h4>Transparency and Integrity</h4>
                        <p>
                            We exhibit integrity and <br/>
                            transparency at the top-notch level<br/>
                            by protecting your intellectual ideas<br/>
                            through strict NDA rules.
                        </p>
                    </div>

                    <div className={styles.whyBFdataDiv}>
                        <div className={styles.whyBFdataLogo}>
                            <Image
                                src={"/Images/saasPhotos/SaasImages/onTimeDelivery.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                                />
                        </div>
                        <h4>On-time delivery</h4>
                        <p>
                            Hire SaaS programmers from<br/>
                            Citrusbug and have peace of mind<br/>
                            as our developers follow a strict<br/>
                            schedule to deliver milestones on time.
                        </p>
                    </div>
                </div>

                <div className={styles.whyBFContainerData}>
                    <div className={styles.whyBFdataDiv}>
                        <div className={styles.whyBFdataLogo}>
                            <Image
                                src={"/Images/saasPhotos/SaasImages/costEfficient.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                                />
                        </div>
                        <h4>Cost Efficient</h4>
                        <p>
                            We at Citrusbug follow the mantra<br/>
                            of delivering solutions of the highest<br/>
                            quality at the most cost-effective<br/>
                            prices to all our clients.
                        </p>
                    </div>

                    <div className={styles.whyBFdataDiv}>
                        <div className={styles.whyBFdataLogo}>
                            <Image
                                src={"/Images/saasPhotos/SaasImages/knowledge.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                                />
                        </div>
                        <h4>Vast Technical Knowledge</h4>
                        <p>
                            Our developers possess years of<br/>
                            experience when it comes to SaaS<br/>
                            development which helps us to offfer<br/>
                            state-of-the art SaaS solutions.
                        </p>
                    </div>
                </div>

                <div className={styles.whyBFContainerData}>
                    <div className={styles.whyBFdataDiv}>
                        <div className={styles.whyBFdataLogo}>
                            <Image
                                src={"/Images/saasPhotos/SaasImages/QATesting.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                                />
                        </div>
                        <h4>QA and Testing</h4>
                        <p>
                            We offer A grade QA and testing<br/>
                            service where our QA experts ensure<br/>
                            that the final product is bug-free<br/>
                            and ready for the final launch.
                        </p>
                    </div>

                    <div className={styles.whyBFdataDiv}>
                        <div className={styles.whyBFdataLogo}>
                            <Image
                                src={"/Images/saasPhotos/SaasImages/availability-24X7.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                                />
                        </div>
                        <h4>24X7 Availability</h4>
                        <p>
                            Resolve all your queries by<br/>
                            contacting our SaaS experts round<br/>
                            the clock.Reach our experts via text,<br/>
                            email,skype,call,etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
