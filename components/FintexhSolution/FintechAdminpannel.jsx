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
   <div className={styles.fintechappsolutionmainboxes}>
   <div className={styles.fintechappsolutiontextboxes}>
   <h2><span>Admin</span> Panel</h2>
    <p> Making the admin's work easy is a lot of fun. Meet Fintech, which is all about making everyone around you comfortable and relaxed.</p>       
   </div>
   <div className={styles.fintechappsolutiondataboxes}>
   <div className={styles.fintechappsolutionleftboxes}>{fintechsolutionadmindata.map((e)=>{
      return (
         <div className={styles.fintechdatamappingindi}
         
                       key={e.htxt} onMouseEnter={() => {
                           handleImageChange(e.img)
                          }}
         >
         <div className={styles.fintechdatamappinginditxtandicon}>
         <div className={styles.fintechdataiconmappingindi}>
         <Image
          src={e.logo}
          alt={"icon"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit:"contain",padding:"10px" }}
        />

         </div>
         
         <div className={styles.fintechdatahtxtmappingindi}><h5>{e.htxt}</h5></div>
         </div>
         <p>{e.stxt}</p>
         
         </div>
      )
   })}</div>






   <div className={styles.fintechappsolutionrightboxes}>
   <div className={styles.fintechappsolutionadminpannelimage}>
   <Image
          src={imageChange}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%",objectFit:"contain" }}
        />
   
   </div>
   </div>
   
   
   </div>
   
   </div>





   );
};



