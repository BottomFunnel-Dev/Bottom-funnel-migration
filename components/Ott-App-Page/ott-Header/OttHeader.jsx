import React from "react";
import styles from "./ottHeader.module.css";
import * as reactAnimation from "../../../public/Animation/SolutionsAnimation/Ott.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function OttHeader() {
  const ServicesData = [
    {
      icon: "/Images/ott-app/Frame-2.png",
      title: "Best Quality",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Group901189.png",
      title: "Fast Downloading",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Group16.png",
      title: "Analytics Services",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Frame.png",
      title: "Data Optimization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Group-1.png",
      title: "Regular Support",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },

    {
      icon: "/Images/ott-app/Frame-1.png",
      title: "Search Engine Optimization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,",
    },
  ];

  return (
    <div className={styles.testdiv}>
      <div className={styles.ottHeaderContainerMain}>
        <div className={styles.ottHeaderLeftDiv}>
          <div className={styles.ottHeaderLeftTextDiv}>
            <h1 className={styles.redbn}>OTT App Solutions</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              porro id est in sit! Velit consectetur suscipit, corrupti tenetur
              nontcliolectui dignissimos possimus, doloremque in minimabgrds
              ggue quae quia magnam reiciendis ab.
            </p>
            <button className={styles.ottHeaderButton}>Get Started</button>
          </div>
        </div>

        <div className={styles.ottHeaderRightDiv}>
          <div className={styles.ottHeaderRightFrameForImage}>
            <div className={styles.ottHeaderRightImagesDiv}>
              <Player
                src={reactAnimation}
                background="transparent"
                speed="1"
                loop
                controls
                autoplay
              ></Player>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ottServicesContainer}>
        <div className={styles.ottServicesContainer2}>
          <div className={styles.ottServicesTitleDiv}>
            <h1>OTT App Services</h1>
            <p>
              The best streaming platform with all the latest shows and best
              videos quality
            </p>
          </div>
          <button className={styles.ottServicesButton}>
            Book a Meeting With Us Today
          </button>
          <div className={styles.ottServicesContent}>
            {ServicesData.map((e) => (
              <div className={styles.ottServicesBoxesDiv}>
                <div className={styles.ottServicesDivForFlexIconHead}>
                  <div>
                    <img src={e.icon} alt="image" />
                  </div>
                  <h3>{e.title}</h3>
                </div>
                <div className={styles.ottServicesLoremPara}>
                  <p>{e.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
