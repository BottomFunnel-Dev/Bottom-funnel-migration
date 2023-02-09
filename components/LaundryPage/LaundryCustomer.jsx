import React, { useState } from 'react'
import styles from "./LaundryPage.module.css"

const LaundryCustomer = () => {

  const [imageChange, setImageChange] = useState("Images/Laundrypage/Customerappscreens/Easytoplaceorder.png")

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    // console.log(imagepath)
  }

  const laundrycustomerdata = [
    {
      htxt: "Easy to Place Online Orders",
      stxt: "Laundry app development has gained a lot of popularity these days. Just like the on-demand food delivery app and grocery delivery app have become highly successful",
      img: "/Images/Laundrypage/icons/shopping.png",
      bigimage: "/Images/Laundrypage/switchscreens/Easy to place order.webp"
    },
    {
      htxt: "Real-Time Delivery Tracking",
      stxt: "As the popularity of laundry apps has grown, several startups have invested in laundry app development. There are some that must be included in the app",
      img: "/Images/Laundrypage/icons/track1.png",
      bigimage: "/Images/Laundrypage/switchscreens/Real time tracking.webp"
    },

    {
      htxt: "Delivery Reminder Alerts",
      stxt: "These fantastic on-demand laundry mobile apps allow users to book their laundry services in a couple of seconds. The global dry cleaning service.",
      img: "/Images/Laundrypage/icons/reminder.png",
      bigimage: "/Images/Laundrypage/switchscreens/Delivery reminders.webp"
    },

    {
      htxt: "Store Locator and Easy",
      stxt: "the market share of laundry and dry cleaning services in the U.s will reach $13.8 billion by 2025. revenue services is expected to hit $7,660 million  By 2024",
      img: "/Images/Laundrypage/icons/compass.png",
      bigimage: "/Images/Laundrypage/switchscreens/Store locater & Easy navigate.webp"
    }
  ]


  return (
    <div className={styles.laundrycutomermaindiv}>
      <div className={styles.laundrycustomerapptxtfront}>
        <h5><small>OUR ON DEMAND LAUNDRY APP DEVELOPMENT COMPANY</small></h5>
        <h2>Provide You With Robust Solution For Your Laundry Service Business</h2>
      </div>

      <div className={styles.laundrycustomerflexboxmaindiv}>
        <div className={styles.laundryflexboxleftdiv}>
          <div className={styles.laundryflexboxleftdivinsidertxt}><h1>Customer app</h1>
            <p>
              By using it, providers can view their statistics and know how many users they have, their earnings,
              and their commissions.
            </p>
          </div>

          <div className={styles.laundryflexboxleftdivflexboxx}>
            {laundrycustomerdata.map((e) => {
              return (
                <div className={styles.laundryflexboxleftdivflexbox}
                  key={e.htxt} onMouseEnter={() => {
                    console.log(e);
                    handleImageChange(e.bigimage)
                  }}

                >
                  <div className={styles.laundryflexboxleftdivflexboxicon}>
                    <img className={styles.laundryiconleftboxinsider} src={e.img} alt="image" />
                  </div>
                  <div className={styles.laundryflexboxleftdivflexboxicontxt}>
                    <h3> {e.htxt} </h3>
                    <p>
                      <small> {e.stxt} </small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.laundryflexboxrightdiv}>
          <img src={imageChange} alt='image' />
        </div>
      </div>
    </div>
  );
};

export default LaundryCustomer;
