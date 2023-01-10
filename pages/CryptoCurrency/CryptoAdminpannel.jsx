import React, { useState } from 'react';
import styles from "./CryptoAdminpannel.module.css";

export const CryptoAdminpannel = () => {

  const [imageChange, setImageChange] = useState("/Images/Cryptocurrencypage/adminpanelscreens/Dashboard.png")

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    // console.log(imagepath)
  }

  let cryptoadminpanelData = [
    {
      title: "Dashboard",
      txt: "A virtual private server helps you to own part of the webserver. This gives you more privacy and control. It also eliminates the risk of the website slowing down while its.",
      logo: "Images/Cryptocurrencypage/icons/dashboard.png",
      image: "Images/Cryptocurrencypage/adminpanelscreens/Dashboard.png"
    },
    {
      title: "Crypto News",
      txt: "Dedicated server hosting is a hosting service that lets you lease an entire server from the hosting provider. It is an expensive hosting service,for a website that drives huge traffic.",
      logo: "Images/Cryptocurrencypage/icons/news.png",
      image: "Images/Cryptocurrencypage/adminpanelscreens/CryptoNews.png"
    },
    {
      title: "Wallet",
      txt: "After you have decided on the web hosting plan, you need to register your domain name. The domain name should be a suitable fit for your business and should be memorable and short.",
      logo: "Images/Cryptocurrencypage/icons/wallet.png",
      image: "Images/Cryptocurrencypage/adminpanelscreens/wallet.png"
    },
    {
      title: "Trading Transaction",
      txt: "Now, it’s time for a WordPress installation to run a cryptocurrency website. You can install WordPress in two ways- you can either use a software installer and download it automatically or do it manually.",
      logo: "Images/Cryptocurrencypage/icons/trading.png",
      image: "Images/Cryptocurrencypage/adminpanelscreens/Tradingtransaction.png"
    },
  ];

  return (
    <div className={styles.cryptoadminpannelmainboxing}>

      <div className={styles.cryptocurrencyadminleftboxing}>

        {cryptoadminpanelData.map((e) => {
          return (
            <div className={styles.cryptoadminboxingindivisually}
              key={e.txt} onMouseEnter={() => {
                // console.log(e);
                handleImageChange(e.image)
              }}
            >
              <div className={styles.cryptoadminboxingindivisuallylogo}>
                <img src={e.logo} alt="logoimage" />
              </div>
              <div className={styles.cryptoadminboxingindivisuallyfortxt}>
                <h4>{e.title}</h4>
                <p>{e.txt}</p>

              </div>

            </div>

          )
        })}</div>


      <div className={styles.cryptocurrencyadminrightboxing}>

        <div className={styles.cryptoadminpannelrightboxingfortab}>
          <img src={imageChange} alt="image" />
        </div>

      </div>
    </div>
  );
};

