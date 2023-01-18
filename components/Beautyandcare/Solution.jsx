import React from "react";
import styles from "./solution.module.css";

export default function Solution() {
  return (
    <div className={styles.solutionsection}>
      <h1>Solution for your beauty app </h1>

      <div className={styles.customer-main}>
        <div className={styles.customer}>
          <div className={styles.customerapp}>
            <div>
              <h2 className={styles.customerHeading}>Customer app</h2>
              <p>
                Improve customer service with a customer app and website that
                provides services they can easily avail and manage on the go and
                can be easily accessed through both android/iOS, where they can
                make an appointment, track their service pro and manage or
                reschedule bookings with one convenient app.
              </p>
            </div>
          </div>

          <div className={styles.customerappimg}>
            <img
              className={styles.customermobile}
              src="Images/beautycare/solutionbeauty.png" alt="image"
            />
          </div>
        </div>

        {/* //////////bussiness//////// */}
        <div className={styles.bussinescontainer}>
          <div className={styles.bussinessleft}>
            <div className={styles.toprectangle}>
              <img src="Images/beautycare/toprectangle.png" alt="image" />
            </div>

            <div className={styles.rectangle}>
              <img src="Images/beautycare/lastrectangle.png" alt="images" />
            </div>

            <div className={styles.admin}>
              <img src="Images/beautycare/adiminpannel.png" alt="image" />
            </div>
          </div>

          <div className={styles.bussinessright}>
            <div>
              <h2 className={styles.customerHeading}>Buisnessn dashboards</h2>
              <p>
                We built this easy-to-use admin dashboard so that you can manage
                everything related to your business in one place. A single
                platform for all your beauty and salon services. From managing
                multiple users at a single screen to generating earnings and sales
                reports, we've thought of everything so that you don't have to!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.szapp}>
          <div className={styles.szservice}>
            <div>
              <h2 className={styles.customerHeading}>Service professional’s app</h2>
              <p>
                With service professional’s app, you can coordinate with your
                beauticians on daily appointments, reschedule and cancel right
                through the app. With advanced features, customized for in-venue
                and home-based clients, location tracking and live chat, this
                app is suited to help you organize your time efficiently while
                giving utmost satisfaction to your customers.
              </p>
            </div>
          </div>

          <div className={styles.szserviceimg}>
            <div className={styles.szservicemobile}>
              <img src="Images/beautycare/services.png" alt="image" />
            </div>

            <div className={styles.boxsection}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
