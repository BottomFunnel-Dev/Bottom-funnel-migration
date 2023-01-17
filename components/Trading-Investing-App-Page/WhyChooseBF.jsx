import React from 'react';
import styles from "./whyChooseBF.module.css";


export const WhyChooseBF = () => {

  const WhyChooseData = [
    {
      icon: "/Images/Trading-investing-App/icons/customize.png",
      title: "100% Customization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "/Images/Trading-investing-App/icons/expand-arrows.png",
      title: "Highly Scalable",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "/Images/Trading-investing-App/icons/support.png",
      title: "Dedicated Support",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "/Images/Trading-investing-App/icons/web.png",
      title: "Global Solution",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    }

  ]
  return (
    <div className={styles.rGWhyChooseBfContainer}>

      <div className={styles.rGWhyChooseBfLeftMainDiv}>{WhyChooseData.map((e) => {
        return (
          <div className={styles.rGWhyChooseBfLeftBoxesDiv}>
            <div className={styles.rGWhyChooseBFDivForFlexIconHead}>
              <div>
                <img src={e.icon} alt="images" />
              </div>
              <h3>{e.title}</h3>
            </div>
            <div className={styles.rGWhyChooseBfLoremPara}>
              <p >{e.para}</p>
            </div>
          </div>
        )
      })}
      </div>

      <div className={styles.rGWhyChooseBFRightMainDiv}>
        <div className={styles.rGWhyChooseBFRightDivForText}>
          <h1>Why Choose Bottom Funnel For Trading & Investing</h1>
          <div className={styles.rGWhyChooseBFRightHRLineContainer}>
            <div className={styles.rGWhyChooseBFRightHRLine}></div>
            <div className={styles.rGwhyChooseBFRightHRLine2}></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eveniet, amet quas velit labore doloribus
            atque aperiam beatae eaque minus perferendis quae odit veniam obcaecati! Est, laudantium consequuntur! Adipisci,
            vero.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eveniet, amet quas velit labore doloribus
            atque aperiam beatae eaque minus perferendis quae odit veniam obcaecati! Est, laudantium consequuntur! Adipisci,
            vero.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eveniet, amet quas velit labore
            oloribus atque aperiam beatae eaque minus perferendis quae odit veniam obcaecati! Est, laudantium consequuntur!
            Adipisci, vero.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eveniet, amet quas velit
            labore doloribus atque aperiam beatae eaque minus perferendis quae odit veniam obcaecati! Est, laudantium
            consequuntur! Adipisci, vero.
          </p>
        </div>
      </div>
    </div>
  );
};
