import React from 'react';
import styles from "./FlowerDeliveryService.module.css";

export const FlowerDeliveryService = () => {

  const flowerdeliveryservicedata = [

    {
      icon: "/Images/Flowerdeliverypage/58601082.png",
      htxt: "Real-Time Traking",
      stxt: "Track your drivers in real-time, analyze their performance, and improve your business processes to streamline deliveries using a robust admin panel at bottom funnel."
    },

    {
      icon: "/Images/Flowerdeliverypage/wavytexh.png",
      htxt: "Multiple Payment Option",
      stxt: "Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience."
    },

    {
      icon: "/Images/Flowerdeliverypage/84541.png",
      htxt: "Reports and Analytics",
      stxt: "Use the app's in-built advanced analytics to see and analyze how your business is performing. Identify problems and make informed decisions to grow your sales."
    },

    {
      icon: "/Images/Flowerdeliverypage/84542.png",
      htxt: "Manage Orders",
      stxt: "Avoid messy ordering processes and long queues with our Pizza Delivery service app. Manage everything while sitting at your home with a robust Admin Panel."
    },


    {
      icon: "/Images/Flowerdeliverypage/62400601.png",
      htxt: "Better Roi",
      stxt: "Make effective strategies by using features like Push Notifications and provide real-time updates to your customers about new deals to increase your ROI."
    },


    {
      icon: "/Images/Flowerdeliverypage/76301.png",
      htxt: "Promote Your Business",
      stxt: "Provide your customer loyalty bonuses, introduce referrals and do a lot more to promote your business using all-in-one robust admin panel of bottom funnel"
    },
  ]


  return (
    <div className={styles.flowerdeliveryservicemainbox}>
      <div className={styles.flowerdeliveryservicetextbox}>
        <h1>Delivery Service App Solution</h1>
        <p>Expand Your Flower Business With A Flower Delivery Service App Solution</p>
      </div>

      <div className={styles.flowerdeliveryservicebackgroundimagebox}>
        {flowerdeliveryservicedata.map((el) => {
          return (
            <div className={styles.flowerdeliveryserviceboxesmap}>
              <div className={styles.flowerdeliveryserviceinnerboximagebox}>
                <img src={el.icon} alt="icon image" />
              </div>
              
              <div>
                <h5>{el.htxt}</h5>
                <p>{el.stxt}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};


