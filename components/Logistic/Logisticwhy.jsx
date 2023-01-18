import React from "react";
import styles from "./Logisticwhy.module.css";

export default function Logisticwhy() {
  return (
    <div className={styles.logistictranspotwhy}>
      <div className={styles.logistictranspotwhysub}>
        <div className={styles.sztransport}>
          <h2>
            Why Choose Bottom Funnel As Your Logistic software Development
            Company ?{" "}
          </h2>
          {/* <h2>Software Devlopment Services We Offer</h2> */}
          <p>
            Get a head start on your logistics and transportation business with
            this great, easy-to-use website. It's fast and powerful, so you can
            get up and running in no time. And with it comes all the features
            you need to run your business efficiently. Your customers will love
            that you have an app for their convenience as well! Upgrade to our
            comprehensive package today, and let us take care of everything else
            while you focus on growing your business!
          </p>
        </div>

        <div className={styles.logistictranspotwhydiv}>
          <div className={styles.szagiledive}>
            <div className={styles.szagile}>
              <div className={styles.szprocess}>
                <img src="Images/logistic/agile.png" alt="image"/>{" "}
              </div>
              <h5>Agile Development Process </h5>
            </div>
            <p>
              our expertise comes in handy. We understand the importance of
              aligning stakeholders from various department, taking into account
              their unique perspectives and expectations, and working towards a
              common goal as per project timeline.
            </p>
          </div>

          <div className={styles.szagiledive}>
            <div className={styles.szagile}>
              <div className={styles.szprocess}>
                <img src="Images/logistic/privatefolder.png" alt="image"/>{" "}
              </div>
              <h5> Data security and protection</h5>
            </div>
            <p>
              Our experts know the ins and outs of logistics and transportation,
              so you can rest assured that your data is safe. With our team of
              web developers on hand, we will work hard to create a stunning
              website that reflects your company's brand values perfectly.
            </p>
          </div>

          <div className={styles.szagiledive}>
            <div className={styles.szagile}>
              <div className={styles.szprocess}>
                <img src="Images/logistic/deliverytime.png" alt="image"/>{" "}
              </div>
              <h5> Round-the-clock support </h5>
            </div>
            <p>
              We use state-of-the-art software and hardware to ensure high
              availability of service at all times. From automated tracking
              systems to GPS navigation tools, we have everything you need to
              run your business smoothly.
            </p>
          </div>

          <div className={styles.szagiledive}>
            <div className={styles.szagile}>
              <div className={styles.szprocess}>
                <img src="Images/logistic/Quality.png" alt="image"/>{" "}
              </div>
              <h5> Quality development </h5>
            </div>
            <p>
              Quality development is what you get with us. Our engineers have a
              deep understanding of the logistics and transportation industry,
              allowing us to build quality websites that will be easy for your
              users to navigate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
