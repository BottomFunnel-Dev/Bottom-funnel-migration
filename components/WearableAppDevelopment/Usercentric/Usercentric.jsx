import React from 'react'
import styles from './Usercentric.module.css';
import Image from 'next/image';

export const Usercentric = () => {
  return (
    <div>
<div className={styles.usercentricMaindiv}>
    <div className={styles.usercentricContain} >
        <h1>User-centric and business-aligned solution</h1>
        <p>User-centric and business-aligned solutions are those that consider the needs, wants, and desires of both the business and its customers. These solutions are designed with the end user in mind, allowing users to achieve their goals efficiently and effectively. They are flexible, scalable, and easy to use, making them ideal for any type of organization.</p>
    </div>

<div className={styles.userCentricStickercolum}>
    <div className={styles.userCentricSticker}>
        <div className={styles.wearablelogos}>
                <Image
                    src={"/Images/wearable/photoshop.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
        </div>

        <div className={styles.wearablelogos}>
                <Image
                    src={"/Images/wearable/illustrator.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
        </div>
       
        <div className={styles.wearablelogos}>
               <Image
                    src={"/Images/wearable/flash.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
        </div>
        <div className={styles.wearablelogos}>
                <Image
                    src={"/Images/wearable/sketch.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
        </div>
    
        <div className={styles.wearablelogos}>
                <Image
                    src={"/Images/wearable/Zeplin.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
        </div>
       

        <div className={styles.wearablelogos}>
                <Image
                    src={"/Images/wearable/material_design.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
        </div>
    
        <div className={styles.wearablelogos}>
               <Image
                    src={"/Images/wearable/coreldrow.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
        </div>
    </div>

    <div className={styles.UsercentricStickercolumHeading}>
        <div className={styles.UsercentricStickercolumHeadingDiv}> 
        <h4>Google Glass</h4>
        </div>
        
        <div className={styles.UsercentricStickercolumHeadingDiv}>
             <h4>Android Wear</h4>
        </div>

        <div className={styles.UsercentricStickercolumHeadingDiv}> 
        <h4>Apple Watch Series 2</h4>
        </div>

        <div className={styles.UsercentricStickercolumHeadingDiv}>
            <h4>Samsung Gear </h4>
        </div>

        <div className={styles.UsercentricStickercolumHeadingDiv}>
             <h4>Gps Watch </h4>
        </div>

        <div className={styles.UsercentricStickercolumHeadingDiv}>
            <h4>Augmented Reality </h4>
        </div>

        <div className={styles.UsercentricStickercolumHeadingDiv1}>
            <h4>Fitbit</h4>
        </div>
    </div>
    </div>
</div>
    </div>
  )
}
