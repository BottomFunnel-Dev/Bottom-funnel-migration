import React from 'react'
import styles from "./Travelwhy.module.css"

export default function Travelwhy() {
    return (
        <div className={styles.sztravelwhysection}>
            <div className={styles.sztravelsubdiv}>
                <div className={styles.sztravelchooseimages}>
                    <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Travel/travelpeople.png" />
                </div>
                <div className={styles.sztravelchooseright}>
                  <div className={styles.travelchooseheading}>
                        <h2>Why Choose Us</h2>
                        <p>Enjoy different experiences in every place you visit and discove new and affordable adventures of course.</p>
                    </div>
                     
                    <div className={styles.travelboxes}>
                        <div className={styles.travelchooseicons}>
                            <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Travel/ontimedelivery.png" />
                        </div>
                        <div className={styles.sztravelcustomer}> 
                        <h3>On time Delivery</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        </div>
                    <div  className={styles.travelboxes}>
                        <div className={styles.travelchooseicons}>  <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Travel/customerservice.png" /></div>
                        <div className={styles.sztravelcustomer}> 
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div  className={styles.travelboxes}>

                        <div className={styles.travelchooseicons}><img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Travel/flexibility.png" /></div>
                        <div className={styles.sztravelcustomer}> 
                        <h3>Flexibility </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div  className={styles.travelboxes}>
                        <div className={styles.travelchooseicons}><img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Travel/rating.png" /></div>
                            <div className={styles.sztravelcustomer}> 
                        <h3> Customer Satisfaction  </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                  
                    </div>
                </div>
            </div>

        </div>
    )
}
