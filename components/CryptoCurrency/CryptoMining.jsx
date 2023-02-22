import React, { useState } from "react";
import styles from "./CryptoMining.module.css";
import Image from "next/image";

export default function CryptoMining() {
  const [imageChange, setImageChange] = useState(
    "/Images/Cryptocurrencypage/Userappscreens/Easytrade.webp",
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const cryptominingdata = [
    {
      htxt: "Easy Trade",
      stxt: "Crypterio theme has a responsive design flow with a clean design. This theme is suited for Bitcoin, ICO (Initial Coin Offering), and Cryptocurrency.",
      img: "/Images/Cryptocurrencypage/icons/easytrade.webp",
      bigimg: "/Images/Cryptocurrencypage/Userappscreens/Easytrade.webp",
    },

    {
      htxt: "Graphs Details",
      stxt: "It can show real-time exchange rates, has a crypto coins converter. Moreover, it is cross-browser compatible.Crypterio is bundled with several premium.",
      img: "/Images/Cryptocurrencypage/icons/graphsdetails.webp",
      bigimg: "/Images/Cryptocurrencypage/Userappscreens/Graphsdetails.webp",
    },

    {
      htxt: "Transaction History",
      stxt: "It is updated regularly and offers great professional 24×7 support and so much more.Kryptex is built for mobile devices with optimized features.",
      img: "/Images/Cryptocurrencypage/icons/transectiondetails.webp",
      bigimg:
        "/Images/Cryptocurrencypage/Userappscreens/Transactionhistory.webp",
    },

    {
      htxt: "Market Updates",
      stxt: "This theme is most applicable for Cryptocurrency and Mining. It is SEO-friendly and offers features like two homepage layouts.",
      img: "/Images/Cryptocurrencypage/icons/marketupdate.webp",
      bigimg: "/Images/Cryptocurrencypage/Userappscreens/Marketupdates.webp",
    },
  ];

  return (
    <div className={styles.cryptominingmainvoxcryptocurrency}>
      <div className={styles.cryptocurrencytextbanner}>
        <h2>Features Of Our Crypto Coin Mining Software</h2>
      </div>
      <div className={styles.cryptocurrencyminigflexboxing}>
        <div className={styles.cryptocurrencyminigflexboxingleft}>
          <div className={styles.cryptocurrencyminigflexboxingleftimageone}>
            <Image
              src={
                "/Images/Cryptocurrencypage/bannerbackground/Component50.webp"
              }
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.cryptocurrencyminigflexboxingleftimagetwo}>
            <Image
              src={imageChange}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.cryptocurrencyminigflexboxingright}>
          {cryptominingdata.map((e) => {
            return (
              <div
                className={styles.cryptominingrightboxmapping}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.bigimg);
                }}
              >
                <div className={styles.cryptominingrightboxmappinglogo}>
                  <Image
                    src={e.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.cryptominingrightboxmappingtxt}>
                  <h4>{e.htxt}</h4>
                  <p>{e.stxt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
