import React, { useState } from "react";
import Image from "next/image";
import styles from "./Cannabisadmin.module.css";

export const Cannabisadmin = () => {
  const [imageChange, setImageChange] = useState(
    "/Images/newcannabispage/Admin Screens/compo.png",
  );
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
  };

  const icecreamadmindata = [
    {
      image: "/Images/newcannabispage/Admin Screens/AdminPanelImage.webp",
      icon: "/Images/newcannabispage/icons/Task Completed.png",
      headertext: "Dashboard Management",
      paragraph:
        "Build an admin panel for your web app or backend panel with Ready Dashboard.It’s built sophisticatedly with a clean and colorful user interface and modern web building methods and technology. ",
    },

    {
      image: "/Images/newcannabispage/Admin Screens/Reports & analytics.webp",
      icon: "/Images/newcannabispage/icons/Task Completed-1.png",
      headertext: "Reports & Analytics",
      paragraph:
        "A report allows you to summarize and chart record data. A dashboard can present summary reports on a single page. It is a collection of Reports.Here is my next exploration of Mersy. Hope you guys like it Cheers! ",
    },

    {
      image: "/Images/newcannabispage/Admin Screens/AdminPanelImage1.webp",
      icon: "/Images/newcannabispage/icons/Card Payment.png",
      headertext: "Clients Management",
      paragraph:
        "This design is about managing customer reviews. The business owner can see all reviews, and average ratings and give any customer instant feedback using this dashboard. ",
    },

    {
      image: "/Images/newcannabispage/Admin Screens/AdminPanelImage2.webp",
      icon: "/Images/newcannabispage/icons/Track Order.png",
      headertext: "Orders Management",
      paragraph:
        "Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers.",
    },
  ];

  return (
    <div className={styles.cannabiesadminpannelmainboxes}>
      <div className={styles.cannbiesadminpannelmainboxsometextupper}>
        <h2> Admin Pannel </h2>
      </div>

      <div className={styles.cannabiesadminpannelmainflexboxclass}>
        <div className={styles.cannabieasadminpannelleftbox}>
          {icecreamadmindata.map((e) => {
            return (
              <div
                className={styles.cannabiesadminpannelmapperboxindivisyal}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.image);
                }}
              >
                <div className={styles.cannabieasadminpannelmapperboxindivisyalicon} >
                  <Image src={e.icon}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>

                <div
                  className={styles.canabisadminpannelmapperboxindivisyaltxt}
                >
                  <h4> {e.headertext} </h4>
                  <p> {e.paragraph} </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cannabiesamadminpannelrightbox}>
          <div className={styles.cannbiesamadminpannelrightboxinnerimage}>
            <Image src={imageChange}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
