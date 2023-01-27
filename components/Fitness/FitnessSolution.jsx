import React from 'react';
import styles from "./fitnesssolution.module.css";

export default function FitnessSolution() {

   const fitnesssolution = [

      {
         img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/fitness/wearable.png",
         p: "Wearable Apps"
      },
      {
         img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/fitness/gym.png",
         p: "Gym App"
      },
      {
         img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/fitness/tracker.png",
         p: "Activity Traking app"
      },
      {
         img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/fitness/yoga.png",
         p: "Yoga App"
      },
      {
         img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/fitness/partner.png",
         p: "Gym Partner App"
      },
      {
         img: "https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/fitness/diet.png",
         p: "Diet Planning App"
      },

   ]

   return (
      <div className={styles.szfitnesssolution}>
         <div >
            <h1>Solutions</h1>
            <p>
               Our team of experts has created many successful apps for a wide range of industries and categories,
               such as health & wellness, travel & hospitality, real estate & marketing automation, education etc.,
               so you can be sure your project will be taken care of by professionals who know what they're doing best.
            </p>
         </div>

         <div className={styles.fitnesssolutionsub}>
            {
               fitnesssolution.map((item, i) => {
                  return (
                     <div key={i} className={styles.szfeaturdocssol}>
                        <div className={styles.szdocimgsol} >
                           <img src={item.img} alt="images" />
                        </div>
                        <p>{item.p}</p>
                     </div>
                  )
               })
            };
         </div>
      </div>
   );
};
