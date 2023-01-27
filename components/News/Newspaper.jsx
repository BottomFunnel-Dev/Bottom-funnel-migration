import React, { useState } from 'react'
import styles from "./Newspaper.module.css"
export const Newspaper = () => {

  const [imageChange, setImageChange] = useState("https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/News/Screens/News Detail.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)

  }

  const newspaperdata = [
    {
      text: "News Details",
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/News/Screens/News Detail.png",
    },

    {
      text: "Notifications",
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/News/Screens/Notification.png",
    },

    {
      text: "Latest Updates",
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/News/Screens/Home.png",
    },

    {
      text: "Search Your Interest",
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/News/Screens/Search.png",
    },

  ]


  return (
    <div className={styles.newspapermainboxes}>
      <div className={styles.newspaperleftboxforimages}>
        <img src={imageChange} alt='image' />
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
