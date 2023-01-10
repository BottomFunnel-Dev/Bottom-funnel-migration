import React from 'react';
import styles from "./Fitnessfeature.module.css";

export default function FitnessFeature() {

   const fitnessfeature = [
      {
         img: "Images/fitness/advanced.png",
         p: "Advanced Search"
      },
      {
         img: "Images/fitness/easy.png",
         p: "Easy Payment"
      },
      {
         img: "Images/fitness/video.png",
         p: "Video Calling"
      },
      {
         img: "Images/fitness/ratings.png",
         p: "Ratings"
      },
      {
         img: "Images/fitness/treaking.png",
         p: "Performence Tracking"
      },
      {
         img: "Images/fitness/live.png",
         p: "Live Training"
      },
   ]

   return (
      <div className={styles.szfitfeaturesection}>
         <div className={styles.fitfeature}>
            <h1>Features</h1>
            <p>With brand new features like interactive graphs and charts, you'll never miss a beat when it comes to tracking your progress. And our community will help keep you motivated by offering support from other likeminded individuals.</p>
         </div>
         <div className={styles.fitfeaturemedia}>
            {
               fitnessfeature.map((item, i) => {
                  return (
                     <div key={i} className={styles.fitfeaturdocs}>
                        <div className={styles.fitdocimg} >
                           <img src={item.img} alt="images" />
                        </div>
                        <p>{item.p}</p>
                     </div>
                  )
               })
            }

         </div>


      </div>
   )
}
