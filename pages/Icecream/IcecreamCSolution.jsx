import React from 'react'
import styles from "./IcecreamCSolution.module.css"

export const IcecreamCSolution = () => {
    return (
        <div className={styles.szicecreamsolution}>
        <div className={styles.szicecreamheading}> 
         
          <h1> Ice-cream Delivery App Solution</h1>
           
        </div>
          <div className={styles.szicecreamsub}> 
          
              <div className={styles.szicebox}> 
                  <div className={styles.szgreybg}> 
              <div className={styles.szicesolution}><img src="Images/Icecream/Location.png"/> </div>
                <h5>Real-Time Tracking</h5>
               </div>
               <p>Track your drivers in real-time, analyze their performance, and improve your business processes to streamline deliveries using a robust admin panel.</p>
          </div>
              <div  className={styles.szicebox}>
              <div className={styles.szgreybg}> 
              <div className={styles.szicesolution}><img src="Images/Icecream/payment.png"/> </div>
                <h5>Multiple Payment Options</h5>
               </div>
               <p>Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.</p>
                
              </div>
              <div  className={styles.szicebox}>
                  <div className={styles.szgreybg}> 
                    <div className={styles.szicesolution}><img src="Images/Icecream/reportsanalytics.png"/> </div>
                     <h5>Reports and Analytics</h5>
                      </div>
                   <p>Use the app's in-built advanced analytics to see and analyze how your business is performing. Identify problems and make informed decisions to grow your sales.</p>
              </div>
              <div  className={styles.szicebox}>
              <div className={styles.szgreybg}> 
                    <div className={styles.szicesolution}><img src="Images/Icecream/order.png"/> </div>
                     <h5>Manage Orders</h5>
                      </div>
                   <p>Avoid messy ordering processes and long queues with our Ice Cream Delivery service app. Manage everything while sitting at your home with our robust Admin Panel.</p>
              </div>
              <div  className={styles.szicebox}>
              <div className={styles.szgreybg}> 
                    <div className={styles.szicesolution}><img src="Images/Icecream/coininHand.png"/> </div>
                     <h5>Better ROI</h5>
                      </div>
                   <p>Make effective strategies by using features like Push Notifications and provide real-time updates to your customers about new deals to increase your ROI.</p>
              </div>
              <div  className={styles.szicebox}>
              <div className={styles.szgreybg}> 
                    <div className={styles.szicesolution}><img src="Images/Icecream/Speaker.png"/> </div>
                     <h5>Promote Your Business Effectively</h5>
                      </div>
                   <p>Provide your customer loyalty bonuses, introduce referrals and do a lot more to promote your business using all-in-one robust admin panel.</p>
              </div>
          </div>
          <button className={styles.szicebtn}>Get Started</button>
      </div>
      )
    }
    