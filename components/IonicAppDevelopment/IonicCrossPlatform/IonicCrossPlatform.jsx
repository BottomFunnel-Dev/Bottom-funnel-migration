import React from "react";
import styles from "./IonicCrossPlatform.module.css";
import Image from "next/image";
import { PopupForm } from "../../PopupForm/PopupForm";

export const IonicCrossPlatform = () => {

    return (
        <>
            <div className={styles.ionicCrossPlatformMainDiv}>
                <div className={styles.ionicCrossPlatformContent}>
                    <h2> Agile Methodologis </h2>
                    <p>
                        Ionic is an open-source framework which helps in building Hybrid Mobile Apps. It is one of the recent frameworks to build engaging cross-platform mobile apps with a native feel. As a leading Ionic app development company, Nimblechapps develops innovative solutions that are suited for your business needs.
                        We have built a number of cross-platform apps for our partners with proven Agile methodologies. Our services are meant to deliver smart solutions with cutting-edge technology.
                    </p>
                    <button className={styles.IonicCrossPlatformbtns}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    >Hire Ionic Developer</button>

        <div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div>
                <PopupForm />
              </div>
            </div>
          </div>
        </div>

                </div>
                <div className={styles.ionicCrossPlatformContentScroller}>
                    <div className={styles.ionicCrossPlatformContentScrollerDiv}>
                        <div className={styles.ionicCrossPlatformContentScrollerDivContainer}>
                            <div className={styles.ionicCrossPlatformContentIcon}>
                            <Image
                                src={"/Images/IonicAppDevelopment/icons/coding.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                            </div>
                            <h5> Cost-Effective Solutions </h5>
                            <p>
                                We employ agile methodologies, beginning with a thorough understanding of the client’s requirements. Our approach and development techniques will continuously evolve throughout the collaboration of cross-functional teams.
                            </p>
                        </div>

                        <div className={styles.ionicCrossPlatformContentScrollerDivContainer}>
                            <div className={styles.ionicCrossPlatformContentIcon}>
                                <Image
                                    src={"/Images/IonicAppDevelopment/icons/wireframe.webp"}
                                    alt={"image"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h5> Prototype and Wireframe Development </h5>
                            <p>
                                We are a leading ionic app development company and our team analyzes business needs and provides cost-effective ionic app development services. We suggest the technology stack that will meet the client’s requirements and specifications.
                            </p>
                        </div>

                        <div className={styles.ionicCrossPlatformContentScrollerDivContainer}>
                            <div className={styles.ionicCrossPlatformContentIcon}>
                                <Image
                                    src={"/Images/IonicAppDevelopment/icons/ux-interface.webp"}
                                    alt={"image"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <h5> Ionic UI/UX Development </h5>
                            <p>
                                To design a good user experience, you need to know who your are designing for, who is going to use your app. So, get close to your users, talk to them, watch them using your app.
                            </p>
                        </div>

                        <div className={styles.ionicCrossPlatformContentScrollerDivContainer}>
                            <div className={styles.ionicCrossPlatformContentIcon}>
                            <Image
                                src={"/Images/IonicAppDevelopment/icons/solution.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                            </div>
                            <h5> Ionic Migration Solutions </h5>
                            <p>
                                Improve this doc Ionic is built on top of Angular, which is a complete rewrite of the original framework. All the parts of Angular you know are still there, but there are new syntax and structural changes about which developers need to be aware.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
