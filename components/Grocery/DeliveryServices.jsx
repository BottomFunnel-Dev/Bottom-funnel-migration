import Image from 'next/image';
import React from 'react';
import styles from './deliveryServices.module.css';
const DeliveryServices = () => {

  const deliveryServices = [
    {
      service: `Real-Time Tracking`,
      decs: `Track your drivers in real-time, analyze their performance, and improve your business processes to streamline deliveries using a robust admin panel.`,
      icon: "/Images/grocery/timetracking.png"
    },
    {
      service: `Multiple Payment Options`,
      decs: `Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.`,
      icon: "/Images/grocery/credit-card.png"
    },
    {
      service: `Reports and Analytics`,
      decs: `Use the app's in-built advanced analytics to see and analyze how your business is performing. Identify problems and make informed decisions to grow your sales.`,
      icon: "/Images/grocery/report.png"

    },
    {
      service: `Manage Orders`,
      decs: `Avoid messy ordering processes and long queues with our Grocery Delivery service app. Manage everything while sitting at your home with a robust Admin Panel.`,
      icon: "/Images/grocery/checklist.png"

    },
    {
      service: `Better ROI`,
      decs: `Make effective strategies by using features like Push Notifications and provide real-time updates to your customers about new deals to increase your ROI.`,
      icon: "/Images/grocery/roi.png"
    },
    {
      service: `Promote Your Business Effectively`,
      decs: `Provide your customer loyalty bonuses, introduce referrals and do a lot more to promote your business using all-in-one robust admin panel.`,
      icon: "/Images/grocery/promotion.png"
    },
  ];

  return (
    <div className={styles.deliveryservices}>
      <h1>
        Exculusive Features
      </h1>

      <div className={styles.deliveryFeatures}>
        {deliveryServices.map((item, i) => (
          <div key={i}>
            <h4> {item.service} </h4>
            <p> {item.decs} </p>
            <div className={styles.servicesIcons}>
              <Image src={item.icon}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "90%", height: "90%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeliveryServices
