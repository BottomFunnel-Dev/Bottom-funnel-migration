import React from 'react';
import styles from "./Pharmacydelivery.module.css";

export default function Pharmacydelivery() {
  return (
    <div className={styles.szdeliveryservice}>
      <div className={styles.szdeliveryservicesub}>
        <div className={styles.szdeliverypara}>
          <h2> Delivery Service App Solution</h2>

          <p>Expand Your Pharmacy Business With A Pharmacy Delivery Service App Solution</p>
        </div>

        <div className={styles.szdeliveryservicediv}>
          <div className={styles.szdeliverytop}>
            <div className={styles.szdeliverysolution}>
              <div className={styles.szdeliverysolutionapp}>
                <div className={styles.szdeliverytraking}>
                  <img src="/Images/pharmacy/Timetracking.png" alt='image' />
                </div>
                <h5> Real-Time Tracking</h5>
              </div>
              <p>Track your drivers in real-time, analyze their performance, and improve your business processes to streamline deliveries using a robust admin panel.</p>
            </div>

            <div className={styles.szdeliverysolution}>
              <div className={styles.szdeliverysolutionapp}>
                <div className={styles.szdeliverytraking}>
                  <img src="/Images/pharmacy/payment option.png" alt='image' />
                </div>
                <h5> Multiple Payment Options</h5>
              </div>
              <p>Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.</p>
            </div>

            <div className={styles.szdeliverysolution}>
              <div className={styles.szdeliverysolutionapp}>
                <div className={styles.szdeliverytraking}>
                  <img src="/Images/pharmacy/reports analytics.png" alt='image' />
                </div>
                <h5> Reports and Analytics </h5>
              </div>
              <p>Use the app's in-built advanced analytics to see and analyze how your business is performing. Identify problems and make informed decisions to grow your sales.</p>
            </div>
          </div>

          {/* right */}
          <div className={styles.szdeliverybottom}>
            <div className={styles.szdeliverysolution}>
              <div className={styles.szdeliverysolutionapp}>
                <div className={styles.szdeliverytraking}>
                  <img src="/Images/pharmacy/Manage orders.png" alt='images' />
                </div>
                <h5>Manage Orders </h5>
              </div>
              <p>Avoid messy ordering processes and long queues with our Pharmacy Delivery service app. Manage everything while sitting at your home with a robust Admin Panel.</p>
            </div>

            <div className={styles.szdeliverysolution}>
              <div className={styles.szdeliverysolutionapp}>
                <div className={styles.szdeliverytraking}>
                  <img src="/Images/pharmacy/ROI.png" alt='images' />
                </div>
                <h5> Better ROI</h5>
              </div>
              <p>Make effective strategies by using features like Push Notifications and provide real-time updates to your customers about new deals to increase your ROI.</p>
            </div>

            <div className={styles.szdeliverysolution}>
              <div className={styles.szdeliverysolutionapp}>
                <div className={styles.szdeliverytraking}>
                  <img src="/Images/pharmacy/Promote business.png" alt='images' />
                </div>
                <h5>Promote Your Business Effectively</h5>
              </div>
              <p>Provide your customer loyalty bonuses, introduce referrals and do a lot more to promote your business using all-in-one robust admin panel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
