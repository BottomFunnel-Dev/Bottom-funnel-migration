import React from 'react'
import styles from "./Travelwhy.module.css"
import Image from 'next/image';

export default function Travelwhy() {
    return (
        <div className={styles.sztravelwhysection}>
            <div className={styles.sztravelsubdiv}>
                <div className={styles.sztravelchooseimages}>
                 <Image
                    src={"/Images/Travel/travelpeople.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.sztravelchooseright}>
                  <div className={styles.travelchooseheading}>
                        <h2>Why Choose Us</h2>
                        <p>Enjoy different experiences in every place you visit and discove new and affordable adventures of course.</p>
                    </div>
                     
                    <div className={styles.travelboxes}>
                        <div className={styles.travelchooseicons}>
                            <Image
                                src={"/Images/Travel/ontimedelivery.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className={styles.sztravelcustomer}> 
                        <h3>On time Delivery</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        </div>
                    <div  className={styles.travelboxes}>
                        <div className={styles.travelchooseicons}> 
                           <Image
                                src={"/Images/Travel/customerservice.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className={styles.sztravelcustomer}> 
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div  className={styles.travelboxes}>

                        <div className={styles.travelchooseicons}>
                            <Image
                                src={"/Images/Travel/flexibility.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
                        <div className={styles.sztravelcustomer}> 
                        <h3>Flexibility </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div  className={styles.travelboxes}>
                        <div className={styles.travelchooseicons}>
                           <Image
                                src={"/Images/Travel/rating.webp"}
                                alt={"image"}
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </div>
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
