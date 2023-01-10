import React from "react";
import styles from "./Logictransport.module.css";

export default function Logictransport() {
  return (
    <div className={styles.logistictranport}>
      <div className={styles.logistictranportsub}>
        <div className={styles.sztransporty}>
          <h2>Logistics &Transport Software Devlopment Services We Offer </h2>

          <p>
            We provide website development services that allow you to track
            shipments, manage inventory, book appointments, and more. Our
            expertise also comes in handy when it comes pre-installed on modern
            vehicles that are designed for efficiency and safety during their
            journey.
          </p>
        </div>

        <div className={styles.logistictranportdiv}>
          <div className={styles.sztransporttop}>
            <div className={styles.szship}>
              <div className={styles.szshipping}>
                <div className={styles.delivery}>
                  <img src="Images/logistic/delivery food.png" alt="image" />{" "}
                </div>
                <h5>Shipping Logistics Management Software Development </h5>
              </div>
              <p>
                We develop an easy-to-use software that helps companies reduce
                cost and increase efficiency while tracking shipments across
                different modes of transport. Our software is reliable and
                compatible with most operating systems, so there's no need to
                worry about outdated tools slowing down operations or leaving a
                mark on the budget.{" "}
              </p>
            </div>

            <div className={styles.szship}>
              <div className={styles.szshipping}>
                <div className={styles.delivery}>
                  <img src="Images/logistic/sourcecode.png" alt="image" />{" "}
                </div>
                <h5>Fleet Management Software Development</h5>
              </div>
              <p>
                Logistics software can help companies make sense of their entire
                transportation system and streamline operations by seamlessly
                integrating vehicle tracking, maintenance management,
                dispatching, and tracking on one platform. You'll also have
                access to real-time data to optimize your fleet's performance
                and safety.
              </p>
            </div>

            <div className={styles.szship}>
              <div className={styles.szshipping}>
                <div className={styles.delivery}>
                  <img src="Images/logistic/Document Delivery.png" alt="image" />{" "}
                </div>
                <h5>Telematics Software Development</h5>
              </div>
              <p>
                Our logistics and transportation team uses the latest tools to
                track shipments, efficiently manage inventory, and ensure that
                you receive the right product when you need it. And with our
                streamlined website development process, you can rest assured
                that your online presence reflects who you truly are as a
                company.
              </p>
            </div>
          </div>

          <div className={styles.sztransportbottom}>
            <div className={styles.szship}>
              <div className={styles.szshipping}>
                <div className={styles.delivery}>
                  <img src="Images/logistic/time 1.png" alt="images" />{" "}
                </div>
                <h5>Asset Tracking Software Development</h5>
              </div>
              <p>
                Good asset tracking software is always a requirement for
                businesses who are dependent on their assets. We know that
                maintaining records is important, but it's also vital to have a
                tool which can help you make sense of your database and track
                where your assets are.
              </p>
            </div>

            <div className={styles.szship}>
              <div className={styles.szshipping}>
                <div className={styles.delivery}>
                  <img src="Images/logistic/searchbrowser.png" alt="image" />{" "}
                </div>
                <h5>Transportation Management Software Development</h5>
              </div>
              <p>
                logistics and transportation management software development is
                the solution for you. With our state-of-the-art software, your
                team will be able to make informed decisions about their
                inventory, manage their fleet, and optimize operations. And with
                our online portal, they'll be able to access all relevant
                information at any time.
              </p>
            </div>

            <div className={styles.szship}>
              <div className={styles.szshipping}>
                <div className={styles.delivery}>
                  <img src="Images/logistic/Procurement.png" alt="image" />{" "}
                </div>
                <h5>Logistics and Freight Management Development</h5>
              </div>
              <p>
                We understand logistics from end to end, from picking up
                packages from warehouses to ensuring they get where they need to
                be without going missing along the way. We know what it takes to
                make this process as efficient as possible so you can focus on
                running your business without worrying about anything else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
