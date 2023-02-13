import React from 'react'
import styles from './Usercentric.module.css';
import Image from 'next/image';

export const Usercentric = () => {
  return (
    <div>
<div className={styles.usercentricMaindiv}>
    <div className={styles.usercentricContain} >
        <h1>User-centric and business-aligned solution</h1>
        <p>We have developed  smatphone apps for several years and have now our Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt officiis a quibusdam similique fuga animi fugit corrupti! Reprehenderit, sed facere sapiente accusamus quis illo magni atque quas rerum. At, consequatur.</p>
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
