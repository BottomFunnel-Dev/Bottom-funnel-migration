import React from "react";
import { useState } from "react";
import styles from "./SocialMediaAdminPannel.module.css";
import Image from "next/image";

export default function SocialMediaAdminPannel() {
  const socialmediadminpanneldata = [
    {
      logo: "/Images/socialmedia/bannesbackground/Component41.webp",
      image: "/Images/socialmedia/Adminpanelscreens/dashboard.webp",
      htxt: "Dashboard",
      stxt: "Dashboards are an effective way of visualize and understanding data from dashboard.",
    },

    {
      logo: "/Images/socialmedia/bannesbackground/Group339972.webp",
      image: "/Images/socialmedia/Adminpanelscreens/Profile.webp",
      htxt: "Profile Management",
      stxt: "It is used to create business profile, maintain it and manage users and groups.",
    },

    {
      logo: "/Images/socialmedia/bannesbackground/Component43.webp",
      image: "/Images/socialmedia/Adminpanelscreens/Reorts.webp",
      htxt: "Reports",
      stxt: "Reporting is a crucial part in any business, and we realize that.",
    },

    {
      logo: "/Images/socialmedia/bannesbackground/icon.webp",
      image: "/Images/socialmedia/Adminpanelscreens/Inshigts.webp",
      htxt: "Insights",
      stxt: "Social media is changing the way we think about marketing.",
    },
  ];

  const [imageChange, setImageChange] = useState(
    "/Images/socialmedia/Adminpanelscreens/dashboard.webp",
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  return (
    <div className={styles.socialmediaadminmainboxing}>
      <div className={styles.socialmedialeftboxafterflexing}>
        <div className={styles.socialmediaadmintextparaheader}>
          <h2>Admin Dashboard</h2>
          <p>
            The Admin dashboard is a handy way to stay informed about Review
            Board projects, while also getting quick access to some server
            information and shortcuts. With a clear layout, this page makes it
            easy for you to find what you're looking for.
          </p>
        </div>

        <div className={styles.socialmediainsiderflexboxadminpannel}>
          {socialmediadminpanneldata.map((e) => {
            return (
              <div
                className={styles.socialmediaadminmaperbox}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.image);
                }}
              >
                <div className={styles.socialmediaAdminImages}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={e.logo}
                    alt="images"
                  />
                </div>
                <div className={styles.socialmeditxtmapperbox}>
                  <h4>{e.htxt}</h4>
                  <p>{e.stxt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.afterflexingsocialmediarightbox}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src={imageChange}
          alt="images"
        />
      </div>
    </div>
  );
}
