import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./FintechAdminpannel.module.css";

export const FintechAdminpannel = () => {
   const [imageChange, setImageChange] = useState("/Images/fintechsolutionpage/Component 188.png")

   const fintechsolutionadmindata = [
      {
         img: "/Images/EyewearDeliveryapp/Adminpanelscreens/dashboard.png",
         logo: "/Images/EyewearDeliveryapp/icons/prototyping.png",
         stxt: "Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
         htxt: "Dashboard"
      },

      {
         img: "/Images/EyewearDeliveryapp/Adminpanelscreens/reports&analytics.png",
         logo: "/Images/EyewearDeliveryapp/icons/prototyping-9.png",
         stxt: "Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
         htxt: "Reports & Analytics"
      },

      {
         img: "/Images/EyewearDeliveryapp/Adminpanelscreens/notification&alerts.png",
         logo: "/Images/EyewearDeliveryapp/icons/prototyping-11.png",
         stxt: "Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
         htxt: "Notifications & Alerts"
      },


      {
         img: "/Images/EyewearDeliveryapp/Adminpanelscreens/paymentmanagement.png",
         logo: "/Images/EyewearDeliveryapp/icons/prototyping-10.png",
         stxt: "Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
         htxt: "payments Management"
      },
   ]

   return (
      <div className={styles.fintechsolutionadminpannelmainbox}>
         <div className={styles.fintechsolutionadminpannelleftbox}>
            <div className={styles.fintechsolutionadminpannelleftboxfortext}>
               <h1>Admin Panel</h1>
               <p>
                  Making the admin's work easy is a lot of fun. Meet Fintech, which is all about making everyone around you comfortable and relaxed.
               </p>

               <div className={styles.adminpannelfintechsolutionwheremap}>
                  {fintechsolutionadmindata.map((e) => {
                     return (
                        <div className={styles.fintechsolutionmappingdataadminpannel}>
                           <div className={styles.fintechadminlogo}>
                              <Image src={e.logo}
                                 alt={'logo'}
                                 width={"0"}
                                 height={"0"}
                                 sizes={"100vw"}
                                 style={{ width: "100%", height: "20%" }}
                              />
                           </div>

                           <div className={styles.fintechsolutionmappingadmindata}>
                              <h4> {e.htxt} </h4>
                              <p> {e.stxt} </p>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>

         <div className={styles.fintechsolutionadminpannelrightboxes}>
            <Image src={imageChange}
               alt={"images"}
               width={"0"}
               height={"0"}
               sizes={"100vw"}
               style={{ width: "100%", height: "15%" }}
            />
         </div>
      </div>
   );
};

