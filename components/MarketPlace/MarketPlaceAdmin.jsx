import Image from "next/image";
import React, { useState } from "react";
import styles from "./MarketPlaceAdmin.module.css";

const MarketPlaceAdmin = () => {
  const [imageChange, setImageChange] = useState("/Images/Marketplaceapp/Adminappscreens/dashboard.webp");

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const marketplaceAdminrData = [
    {
      img: "/Images/Marketplaceapp/icons/Component41.png",
      Htxt: "Dashboard",
      stxt: "Easily navigate to the different pages and posts we have for freelancers, like our dashboard.",
      tablet: "/Images/Marketplaceapp/Adminappscreens/dashboard.webp",
    },
    {
      img: "/Images/Marketplaceapp/icons/Group339972.png",
      Htxt: "Clients Management",
      stxt: "We allow freelancers and clients to access a central dashboard to manage the relationship.",
      tablet: "/Images/Marketplaceapp/Adminappscreens/clientsmanageent.webp",
    },
    {
      img: "/Images/Marketplaceapp/icons/Component43.png",
      Htxt: "Reports",
      stxt: "Reports are reliable and can give you useful insight into the person that’s completing your project.",
      tablet: "/Images/Marketplaceapp/Adminappscreens/reports.webp",
    },

    {
      img: "/Images/Marketplaceapp/icons/icon.png",
      Htxt: "Email Alerts",
      stxt: "You'll get emailed a notification when a new freelance job opens up.",
      tablet: "/Images/Marketplaceapp/Adminappscreens/emailalerts.webp",
    },
  ];
  return (
    <div className={styles.marketplaceadminmainbox}>
      <div className={styles.marketplaceflexboxforadmin}>
        <div className={styles.marketplaceadminbackgroundimagebanner}>
          <div className={styles.marketplaceadminbackgroundimagebannertextbox}>
            <h2> Admin's Website & App </h2>
            <p>
              Admin’s website and mobile app design layout, matching the entrepreneurs’ needs for a reliable attract and growth
              business. Allowing them to connect quickly, easily, and transparently.
            </p>
          </div>

          <div className={styles.marketplaceadminboxingfordoingflex}>
            <div className={styles.marketplaceadminflexboxing}>
              {marketplaceAdminrData.map((el) => {
                return (
                  <div className={styles.marketplaceadminflexboxingforimageandtxtcontain}
                    key={el.Htxt}
                    onMouseEnter={() => {
                      handleImageChange(el.tablet);
                    }}
                  >
                    <div className={styles.marketplaceadminflexboxingforimagecontain}>
                      <Image className={styles.marketplaceadminlogo}
                        src={el.img} alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>

                    <div className={styles.marketplaceadminflexboxingfortxtcontain}>
                      <h5> {el.Htxt} </h5>
                      <p> {el.stxt} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.marketplaceadminchangableimagecontent}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}>
          <img className={styles.imageboxmarketplaceadmin}
            src={imageChange}
            alt="marketplacebanner"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceAdmin;
