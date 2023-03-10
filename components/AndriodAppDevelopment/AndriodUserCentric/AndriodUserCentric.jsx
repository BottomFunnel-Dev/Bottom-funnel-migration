import React from "react";
import styles from "./AndriodUserCentric.module.css";
import Image from "next/image";
import { PopupForm } from "../../PopupForm/PopupForm";

export default function AndriodUserCentric() {
  return (
    <>
      <div className={styles.andriodUserCentricMainDiv}>
        <div className={styles.andriodUserCentricIconContainer}>
          <div className={styles.andriodUserCentricIconOuterBox}>
            <div className={styles.andriodUserCentricContainerDiv}>
              <div className={styles.andriodUserCentricIcon}>
                <Image
                  src={"/Images/AndriodDevImages/icons/analyse 1.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.andriodUserCentricIconHeading}>
                <h4>Regirous Requirement Analysis</h4>
                <p>
                  Use it to get insights and learn from customer behavior.
                  Bottom funnel uses Regirous Requirement Analysis (RRA) to
                  deliver actionable information.
                </p>
              </div>
            </div>
            <div className={styles.andriodUserCentricContainerDiv}>
              <div className={styles.andriodUserCentricIcon}>
                <Image
                  src={"/Images/AndriodDevImages/icons/interest-rate 1.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.andriodUserCentricIconHeading}>
                <h4>Competetive Rates & Projects Quotes</h4>
                <p>
                  We offer competitive rates and quotes on all kinds of project
                  sizes, so you can trust us to deliver results that will bring
                  your business growing success.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.andriodUserCentricIconOuterBox}>
            <div className={styles.andriodUserCentricContainerDiv}>
              <div className={styles.andriodUserCentricIcon}>
                <Image
                  src={
                    "/Images/AndriodDevImages/icons/app-development (2) 1.webp"
                  }
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.andriodUserCentricIconHeading}>
                <h4>Expert Mobile App developers</h4>
                <p>
                  our team of experienced developers has decided to create brand
                  new bottom funnel android app development services for
                  businesses
                </p>
              </div>
            </div>
            <div className={styles.andriodUserCentricContainerDiv}>
              <div className={styles.andriodUserCentricIcon}>
                <Image
                  src={"/Images/AndriodDevImages/icons/agile (2) 1.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.andriodUserCentricIconHeading}>
                <h4>Proven Delivery Methods</h4>
                <p>
                  We understand that you have more important matters to attend
                  to than coding, so we've got your back with our smart delivery
                  methods.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.andriodUserCentricContent}>
          <h1 className={styles.andriodUserCentricContentHeading}>
            User-Centric Mobile App Development Solutions
          </h1>
          <p className={styles.andriodUserCentricContentText}>
            Bottom funnel is here to offer you business-class app development
            services in order to make your life easier. We understand that shift
            in the way of working has managed to change the way our business
            operates, and we are ready to meet those needs. With our top notch
            mobile app development services, you can rest assured that every
            single aspect of your application will be taken care of
            professionally. From user interface design and layout, to feature
            implementation and data integration, we have you covered from end to
            end.
          </p>
          <div className={styles.mobileappactionbuttondiv}>
            <button className={styles.mobileappactionbutton}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            >
              Hire Android developer
            </button>
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
        </div>
      </div>
    </>
  );
}
