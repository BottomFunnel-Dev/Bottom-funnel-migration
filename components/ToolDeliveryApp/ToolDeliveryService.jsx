import Image from "next/image";
import React from "react";
import styles from "./ToolDeliveryService.module.css";

function ToolDeliveryService() {
  return (
    <div className={styles.tddeliveryservice}>
      <div className={styles.tddeliveryservicesub}>
        <div className={styles.tddeliverypara}>
          <h2> Delivery Service App Solution</h2>

          <p>
            {" "}
            Expand Your Business With A Tool Delivery Service App Solution{" "}
          </p>
        </div>

        <div className={styles.tddeliveryservicediv}>
          <div className={styles.tddeliverytop}>
            <div className={styles.tddeliverysolution}>
              <div className={styles.tddeliverysolutionapp}>
                <div className={styles.tddeliverytraking}>
                  <Image src={"/Images/pharmacy/Timetracking.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />{" "}
                </div>
                <h5> Real-Time Tracking</h5>
              </div>

              <p
                style={{
                  marginLeft: "22.5%",
                  marginTop: "0%",
                }}
              >
                Track your drivers in real-time, analyze their performance, and
                improve your business processes to streamline deliveries using a
                robust admin panel.
              </p>
            </div>

            <div className={styles.tddeliverysolution}>
              <div className={styles.tddeliverysolutionapp}>
                <div className={styles.tddeliverytraking}>
                  <Image src={"/Images/pharmacy/payment option.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />{" "}
                </div>
                <h5> Multiple Payment Options</h5>
              </div>

              <p
                style={{
                  marginLeft: "22.5%",
                }}
              >
                Less time spent in the ordering process means better user
                experience. Let your app users pay easily using multiple payment
                options so as to improve their overall app experience.
              </p>
            </div>

            <div className={styles.tddeliverysolution}>
              <div className={styles.tddeliverysolutionapp}>
                <div className={styles.tddeliverytraking}>
                  <Image src={"/Images/pharmacy/reports analytics.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />{" "}
                </div>
                <h5> Reports and Analytics </h5>
              </div>

              <p
                style={{
                  marginLeft: "22.5%",
                }}
              >
                Use the app's in-built advanced analytics to see and analyze how
                your business is performing. Identify problems and make informed
                decisions to grow your sales.
              </p>
            </div>
          </div>

          {/* right */}
          <div className={styles.tddeliverybottom}>
            <div className={styles.tddeliverysolution}>
              <div className={styles.tddeliverysolutionapp}>
                <div className={styles.tddeliverytraking}>
                  <Image src={"/Images/pharmacy/Manage orders.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />{" "}
                </div>
                <h5> Manage Orders </h5>
              </div>

              <p
                style={{
                  marginLeft: "22.5%",
                }}
              >
                Avoid messy ordering processes and long queues with our Pharmacy
                Delivery service app. Manage everything while sitting at your
                home with a robust Admin Panel.
              </p>
            </div>

            <div className={styles.tddeliverysolution}>
              <div className={styles.tddeliverysolutionapp}>
                <div className={styles.tddeliverytraking}>
                  <Image src={"/Images/pharmacy/ROI.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />{" "}
                </div>
                <h5> Better ROI</h5>
              </div>

              <p
                style={{
                  marginLeft: "22.5%",
                }}
              >
                Make effective strategies by using features like Push
                Notifications and provide real-time updates to your customers
                about new deals to increase your ROI.
              </p>
            </div>

            <div className={styles.tddeliverysolution}>
              <div className={styles.tddeliverysolutionapp}>
                <div className={styles.tddeliverytraking}>
                  <Image src={"/Images/pharmacy/Promote business.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />{" "}
                </div>
                <h5>Promote Your Business Effectively</h5>
              </div>
              <p
                style={{
                  marginLeft: "22.5%",
                }}
              >
                Provide your customer loyalty bonuses, introduce referrals and
                do a lot more to promote your business using all-in-one robust
                admin panel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolDeliveryService;
