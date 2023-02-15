import React, { useState } from 'react'
import styles from "./Newspaper.module.css"
import Image from 'next/image';

export const Newspaper = () => {

  const [imageChange, setImageChange] = useState("/Images/News/Screens/News Detail.webp")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)

  }

  const newspaperdata = [
    {
      text: "News Details",
      image: "/Images/News/Screens/News Detail.webp",
    },

    {
      text: "Notifications",
      image: "/Images/News/Screens/Notification.webp",
    },

    {
      text: "Latest Updates",
      image: "/Images/News/Screens/Home.webp",
    },

    {
      text: "Search Your Interest",
      image: "/Images/News/Screens/Search.webp",
    },

  ]


  return (
    <div className={styles.newspapermainboxes}>
      <div className={styles.newspaperleftboxforimages}>
        
            <Image
                src={imageChange}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
      </div>
      <div className={styles.newspaperrightboxforsometext}>
        <h1>  We take the benefits of Newspaper development beyond easy
          accessibility</h1>

        <p>
          With Magazine & Newspaper web Development, we have provided a
          platform to make the information accessible instantly so that users
          can stay updated about everything going on in their world. You can
          be sure that we are always updating content from trusted sources
          like Times of India, Forbes, Vogue etc. Our special feature makes it
          easy for users to track relevant information about business as well
          as politics and entertainment.{" "}
        </p>
        <p>
          We know how important it is to engage your customers with a great
          user experience, which is why we treat every project as our own
          child. We chart out every stage in order to make sure that
          everything falls into place perfectly - from customer acquisition to
          retention and monetization strategies.
        </p>

        <div className={styles.newstextboxdisplyaflex}>{newspaperdata.map((e) => {
          return (
            <div className={styles.newstextboxdisplayindi}
              key={e.text} onMouseEnter={() => {

                handleImageChange(e.image)
              }}
            ><h4>{e.text}</h4></div>
          )
        })}</div>


      </div>

    </div>
  )
}
