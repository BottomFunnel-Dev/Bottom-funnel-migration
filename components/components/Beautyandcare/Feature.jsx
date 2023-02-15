import React from 'react';
import styles from "./feature.module.css";

export default function Feature() {
return (
<div className={styles.featuresSection}>
<h1> Prominent features of the app</h1>
<div className={styles.featuresContainer}>
<div className={styles.featureswhite}>
<h4>In app offers and loyalties </h4>
<p>Increase customer loyalty and engagement with exclusive in-app offers. through this app, give exclusive offers, discounts, and loyalty rewards that only your loyal customers will enjoy. </p>
<h4>In app calling and chatting</h4>
<p>Our salon and beauty app development solutions make it easy for users to contact their booked expert and schedule a call or chat session with your stylist or makeup artist directly from the app.</p>
</div>
<div className={styles.featurepink}>
<h4>Online appointment</h4>
<p>Customers can book, change and cancel appointments for any of the services offered on the app. With this feature, customers can avoid long queues and wait times for your services.</p>
<h4>Live location tracking: </h4>
<p>Customers can track the real time location of the beauty expert who will be coming to their home to give them services and get the salon’s exact location, where they have booked their appointment</p>
</div>
<div className={styles.featureswhite}>
<h4>In-app payment</h4>
<p>With In app payments, your customers can easily pay for your services with their smartphone or tablet instead of having to use traditional methods such as cash or credit cards.</p>
<h4>Service list and prices</h4>
<p>This feature will help you to keep up-to-date streamline pricing for each service you offer in the form of a list, as well as provide customers with more information about what they are paying for. </p>
</div>
</div>
</div>
)
}
