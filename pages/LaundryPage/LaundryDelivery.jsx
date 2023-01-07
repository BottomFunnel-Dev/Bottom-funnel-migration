import React, { useState } from 'react'
import styles from "./LaundryPage.module.css"

const LaundryDelivery = () => {

  const[imageChange,setImageChange] = useState("Images/Laundrypage/Deliveryappscreens/Notifications.png")

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    console.log(imagepath)
 }

  const laundrydeliverydata = [
    {
      htxt:"Notification of Upcoming Orders",
      stxt:"Most order, shipping, and customer account notifications are sent to customers automatically, and can't be disabled. When you are processing an order and customer account notifications are sent to customers ",
      img:"Images/Laundrypage/icons/Rectangle4230.png",
      bigimg:"Images/Laundrypage/Deliveryappscreens/Notifications.png"

    },
    {
      htxt:"Daily Earning Report",
      stxt:"The global online laundry services market size was valued at USD 20.10 billion a CAGR of 30.5%. Rising demand for convenient laundry with less investment will boost product demand in the market.",
      img:"Images/Laundrypage/icons/report.png",
      bigimg:"Images/Laundrypage/Deliveryappscreens/Earningreports.png"
    },

    {
      htxt:"Order History",
      stxt:"With this app, a client will signup in your portal with his name After successful login, they will choose the services whatever they want to get like washing and iron, washing and fold, ironing only, and dry cleaning only.",
      img:"Images/Laundrypage/icons/sandclock.png",
      bigimg:"Images/Laundrypage/Deliveryappscreens/Ohistory.png"
    }
  ]


  return (
    <div className={styles.laundrydeliverymaindiv}>
    <div className={styles.laundrydeliveryappflexbox}>
    <div className={styles.laundrydeliveryappflexboxleft}>
    <div className={styles.laundrydeliveryappflexboxleftimagesof}>
    <img className={styles.laundryfleximage1o1} src='Images/Laundrypage/Bannersbackgrounds/Ellipse76.png'  alt='' />
    <img className={styles.laundryfleximage1o2} src={imageChange} alt='' />

    </div>
    </div>


    <div className={styles.laundryflexboxleftdivfordelivery}>
    <div className={styles.laundryflexboxleftdivinsidertxt}><h1>Delivery Application</h1>
    <p>Get A Customized App With Advanced Delivery Managment Features</p>
    </div>
    <div className={styles.laundryflexboxleftdivflexboxxdelivery}>{laundrydeliverydata.map((e)=>{
      return (
      <div className={styles.laundryflexboxleftdivflexboxfordelivery}
      key={e.htxt} onMouseEnter={() => {
        console.log(e);
        handleImageChange(e.bigimg)
    }}
      
      >
      <div className={styles.laundryflexboxleftdivflexboxicon}><img src={e.img} alt="image" /></div>
      <div className={styles.laundryflexboxleftdivflexboxicontxt}><h3>{e.htxt}</h3>
      <p>{e.stxt}</p>
      </div>
      
      
      </div>
      )
    })}
    
    </div>
    
    </div>
    
    
    </div>
      
    </div>
  )
}

export default LaundryDelivery
