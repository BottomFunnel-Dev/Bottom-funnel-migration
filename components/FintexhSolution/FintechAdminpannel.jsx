import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./FintechAdminpannel.module.css";

export const FintechAdminpannel = () => {
   const [imageChange, setImageChange] = useState("/Images/fintechsolutionpage/Component 188.webp")


   const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
      
    }

   const fintechsolutionadmindata = [
      {
         img: "/Images/fintechsolutionpage/aha/track success rate.webp",
         logo: "/Images/EyewearDeliveryapp/icons/prototyping.webp",
         stxt: "Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
         htxt: "Dashboard"
      },

      {
         img: "/Images/fintechsolutionpage/aha/track sales.webp",
         logo: "/Images/EyewearDeliveryapp/icons/prototyping-9.webp",
         stxt: "Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
         htxt: "Reports & Analytics"
      },

      {
         img: "/Images/fintechsolutionpage/aha/track success rate.webp",
         logo: "/Images/EyewearDeliveryapp/icons/prototyping-11.webp",
         stxt: "Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
         htxt: "Notifications & Alerts"
      },


      {
         img: "/Images/fintechsolutionpage/aha/track sales.webp",
         logo: "/Images/EyewearDeliveryapp/icons/prototyping-10.webp",
         stxt: "Fintech is not just a word with exciting startups but also a way of life. From the banking to lending, credit, and insurance sector to FinTech companies.",
         htxt: "payments Management"
      },
   ]

   return (
      <div className={styles.fintechsolutionadminpannelmainbox}>
         <div className={styles.fintechsolutionadminpannelleftbox}>
            <div className={styles.fintechsolutionadminpannelleftboxfortext}>
               <h2><span>Admin</span> Panel</h2>
               <p>
                  Making the admin's work easy is a lot of fun. Meet Fintech, which is all about making everyone around you comfortable and relaxed.
               </p>

               <div className={styles.adminpannelfintechsolutionwheremap}>
                  {fintechsolutionadmindata.map((e) => {
                     return (
                        <div className={styles.fintechsolutionmappingdataadminpannel} 
                        
                        key={e.htxt} onMouseEnter={() => {
                           handleImageChange(e.img)
                         }}
                         
                        
                        >
                           <div className={styles.fintechadminlogo}>
                              <Image src={e.logo}
                                 alt={'logo'}
                                 width={"0"}
                                 height={"0"}
                                 sizes={"100vw"}
                                 style={{ width: "100%", height: "20%" , objectFit:"contain" , marginTop:"-20%" }}
                              />
                           </div>

                           <div className={styles.fintechsolutionmappingadmindata}>
                              <h5> {e.htxt} </h5>
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
               style={{ width: "80%", height: "80%" ,objectFit:"contain" , marginLeft:"10%"}}
            />
         </div>
      </div>
   );
};

