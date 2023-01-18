import React from "react";
import styles from "./WhyChooseXamarin.module.css";

export const WhyChooseXamarin = () => {

   return (
      <>
         <div className={styles.whyChooseMainDiv}>
            <div className={styles.whyChooseContentText}>
               <h1>Why You Must Choose Xamarin For Cross-Platform App Development </h1>
               <p>When it comes to app development, choosing the right platform can be a difficult task. However, using Xamarin for Cross-Platform App Development could make the process much simpler and easier. This platform allows developers to create apps that are designed for both Android and iOS devices without having to learn separate languages or develop different applications separately. Additionally, this software provides developers with tools that help them mobile agile application design and user interface (UI) development in both platforms simultaneously.
               </p>
            </div>
            <div className={styles.whyChooseContentImage}>
               <img src="Images/Xamarin/Group.png" />
            </div>
         </div>
      </>
   );
};
