import Image from 'next/image';
import React from 'react';
import styles from "./LaundryApplication.module.css"


export const LaudryApplication = () => {

  const laundryapplicationdata = [
    {
      htxt:"Single Vendor Laundry Delivery Service",
      stxt:"Bottom Funnel is providing ready made solutions that helps individual startups and enterprises launch their business quickly. We have the wide range of ready made solutions, customizable per your business requirements. We are an expert laundry & Dry cleaning app  services all around the globe.",
      img:"/Images/Laundrypage/Bannersbackgrounds/dirtyshirtlaundryservice.png",
    },

    {
      htxt:"Multi-vendor Laundry Service Marketplace",
      stxt:"On Demand Laundry & Dry Cleaning App Development.Bottom Funnel is a reputed laundry app development company providing on-demand laundry mobile app and same day laundry mobile app development for iPhone & Android. Bottom Funnel is a reputed laundry app.",
      img:"/Images/Laundrypage/Bannersbackgrounds/washingmachineslaundromat.png",
    },
    

  ]

  return (
    <div className={styles.laundryapplicationmainboxes}>
    <div className={styles.laundryapplicationtxtboxes}><h6>LAUNCH YOUR OWN</h6>
    <h2>Laundry Application With Our Best In Class Laundry App Development Services</h2>
    </div>
<div className={styles.laundryapplicationdatamappingboxes}>{laundryapplicationdata.map((e)=>{
  return (
    <div className={styles.laundryapplicationdataindibox}>
    <div className={styles.laundryappimageboxes}>
    
    <Image
          src={e.img}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
    </div>
<div className={styles.laundryapptxtboxes}>
<h6>{e.htxt}</h6>
<p className={styles.paragraph}>{e.stxt}</p>
<p className={styles.parabutton}>Get started</p>
</div>
    
    
    
    </div>
  )
})}

</div>



    </div>
  )
}
