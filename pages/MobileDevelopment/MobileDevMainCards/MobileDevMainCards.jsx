import React from 'react'
import styles from "./MobileDevMainCards.module.css"

export const MobileDevMainCards = () => {

  const mobiledevmaincardsdata = [
    {
      img:"Images/MobileDevMain/Component65.png",
      htxt:"Android App Development",
      stxt:"Bottom funnel android app development service can help you to design, develop and deploy the best Android the best Android app for your business. Our team of experienced and qualified developers will work with you.",
    },

    {
      img:"Images/MobileDevMain/Component64.png",
      htxt:"iOS App Development",
      stxt:"Over a decade in custom iOS app development, we have built dozens of applications for different Apple devices. Some of them won prestigious design awards, other became new profit centers.",
    },

    {
      img:"Images/MobileDevMain/Component66.png",
      htxt:"Kotlin App Development",
      stxt:"Kotlin is language that helps you create applications in a more efficient way. It is concise, safe and interoperable with Java. Kotlin is an open source project under the Apache 2.0 license.",
    },

    {
      img:"Images/MobileDevMain/Component69.png",
      htxt:"Flutter App Development",
      stxt:"Bottom funnel flutter app development is all about the ease of use and an intuitive user experience. Flutter is a great option for both beginners and experts alike. It easier to build apps that have a wide range.",
    },

    {
      img:"Images/MobileDevMain/Component68.png",
      htxt:"React Native App Development",
      stxt:"If you’re looking for an app development partner that can create high-quality, mobile apps from scratch, then look no further than our team of React Native experts.",
    },

    {
      img:"Images/MobileDevMain/Component67.png",
      htxt:"Xamarin App Development",
      stxt:"Xamarin app development is an exciting way to create cross-platform mobile apps. Using the Xamarin platform, you can write your code once and deploy it to multiple platforms, including Android, iOS.",
    },

    {
      img:"Images/MobileDevMain/Component72.png",
      htxt:"Ionic App Development",
      stxt:"We have extensive expertise in the Ionic framework that allows us to develop feature-rich and robust cross-platform Apps. Our Ionic Development team produces the needed widgets in HTML5.",
    },

    {
      img:"Images/MobileDevMain/Component71.png",
      htxt:"Wearable App Development",
      stxt:"The use of wearable technology for both individuals and business are growing at a rapid rate. Whether it is for tracking steps walked or sending real-time work push notifications, wearable tech of Android iOS.",
    },

    {
      img:"Images/MobileDevMain/Component70.png",
      htxt:"Mobile UI UX",
      stxt:"Mobile UI UX refers to the user interface and user experience of a mobile application. It is Important to create a good mobile UI UX in order to provide users with a positive experience when using the app.",
    },
  ]


  return (
    <div className={styles.mobiledevmaincardsmainboxes}>
    <div className={styles.mobiledevmaincardsmainboxesmappingbox}>{mobiledevmaincardsdata.map((e)=>{
      return (
        <div className={styles.mobiledevboxindivisually}>
        <div className={styles.mobiledevboxindivisuallyimage}>
        <img src={e.img} alt='' />
        <h4>{e.htxt}</h4>
        </div>
        <div className={styles.mobiledevboxindivisuallytxt}>
        <p>{e.stxt}</p>
        </div>
        
        </div>
      )
    })}</div>
    
    
    </div>
  )
}



