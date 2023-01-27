import React from "react";
import { useState } from "react";
import styles from "./SocialMediaAdminPannel.module.css";

export const SocialMediaAdminPannel = () => {
  const socialmediadminpanneldata = [
    {
      logo: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/bannesbackground/Component41.png",
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/Adminpanelscreens/dashboard.png",
      htxt: "Dashboard",
      stxt: "Dashboards are an effective way of visualize and understanding data from dashboard.",
    },

    {
      logo: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/bannesbackground/Group339972.png",
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/Adminpanelscreens/Profile.png",
      htxt: "Profile Management",
      stxt: "It is used to create business profile, maintain it and manage users and groups.",
    },

    {
      logo: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/bannesbackground/Component43.png",
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/Adminpanelscreens/Reorts.png",
      htxt: "Reports",
      stxt: "Reporting is a crucial part in any business, and we realize that.",
    },

    {
      logo: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/bannesbackground/icon.png",
      image: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/Adminpanelscreens/Inshigts.png",
      htxt: "Insights",
      stxt: "Social media is changing the way we think about marketing.",
    },
  ];

  const [imageChange, setImageChange] = useState(
    "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/socialmedia/Adminpanelscreens/dashboard.png",
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
          The Admin dashboard is a handy way to stay informed about Review Board
          projects, while also getting quick access to some server information
          and shortcuts. With a clear layout, this page makes it easy for you to
          find what you're looking for.
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
                <div>
                  <img height="50px" src={e.logo} alt="logo" />
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
        <img src={imageChange} alt="" />
      </div>
    </div>
  );
};
