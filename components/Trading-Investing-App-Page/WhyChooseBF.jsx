import React from 'react';
import styles from "./whyChooseBF.module.css";


export const WhyChooseBF = () => {

  const WhyChooseData = [
    {
      icon: "/Images/Trading-investing-App/icons/customize.png",
      title: "100% Customization",
      para: "If you're looking out for something similar, then look no further! With Solutions for your trading & investment app by SWIPE Technologies, you can experience 100% customization and user-friendly interface. Sign up today and start working on a new level!"
    },

    {
      icon: "/Images/Trading-investing-App/icons/expand-arrows.png",
      title: "Highly Scalable",
      para: "Our state-of-the-art infrastructure guarantees speed and reliability for your business. And with its ability to scale up as needed, it will be there whenever you need it most. So go ahead and trust us with your future! Contact us today for more information!"
    },

    {
      icon: "/Images/Trading-investing-App/icons/support.png",
      title: "Dedicated Support",
      para: "Just want a reliable app that provides you the right guidance at all times? Look no further, because we've got your back. Our brand is Solutions for Your Trading & Investment App, and we pride ourselves on providing our users with the support they need so they can succeed in the market."
    },

    {
      icon: "/Images/Trading-investing-App/icons/web.png",
      title: "Global Solution",
      para: "At times, the global markets can be confusing and challenging. Fear not! With SOLUTIONS for your trading & investment app, you'll always have information at hand to make smart decisions. Get real-time updates on stock prices, market trends, and more - all in one place!"
    }

  ]
  return (
    <div className={styles.rGWhyChooseBfContainer}>

      <div className={styles.rGWhyChooseBfLeftMainDiv}>{WhyChooseData.map((e) => {
        return (
          <div className={styles.rGWhyChooseBfLeftBoxesDiv}>
            <div className={styles.rGWhyChooseBFDivForFlexIconHead}>
              <div>
                <img src={e.icon} alt="images" />
              </div>
              <h3>{e.title}</h3>
            </div>
            <div className={styles.rGWhyChooseBfLoremPara}>
              <p >{e.para}</p>
            </div>
          </div>
        )
      })}
      </div>

      <div className={styles.rGWhyChooseBFRightMainDiv}>
        <div className={styles.rGWhyChooseBFRightDivForText}>
          <h1>Why Choose Bottom Funnel For Trading & Investing</h1>
          <div className={styles.rGWhyChooseBFRightHRLineContainer}>
            <div className={styles.rGWhyChooseBFRightHRLine}></div>
            <div className={styles.rGwhyChooseBFRightHRLine2}></div>
          </div>
    
           <p className={styles.pararightbox}>You know how hard it is to make a decision when there are so many options and possibilities at your disposal. Don't you wish there was an app that would do the job for you? Well, you've found it! Bottom Funnel is the one-stop-shop where wisdom, experience, and technology come together to deliver solutions for all your trading & investment needs.</p>
           <p className={styles.pararightbox}>Bottom Funnel's state-of-the-art platform allows users to effortlessly access data on multiple trading platforms in one place. We also provide real-time updates on market trends and forecasts so that you can make informed decisions about your investments. And our friendly customer support team is available 24/7 to help answer any questions or concerns you may have about the platform.</p>
           <p className={styles.pararightbox}>So what are you waiting for? Join the hundreds of traders who are already making use of Bottom Funnel's cutting edge technology!</p>
            <p className={styles.pararightbox}>Bottom Funnel's platform offers all the features needed to succeed in today's markets. Whether you're looking for a quick exit strategy or want to dive deeper into your trades, our app has you covered.</p>
        </div>
      </div>
    </div>
  );
};
