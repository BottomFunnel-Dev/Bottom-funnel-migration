// import React from 'react'
// import styles from "./LaundryPage.module.css"

// const LaudryApplication = () => {
//   return (
//     <div className={styles.laundryapplicationmaindiv}>
//       <div className={styles.laundryapplicationtxtdiv}>
//         <h5> Launch Your Own </h5>
//         <h1> Laundry Application With Our Best In Class Laundry App Development Services </h1>
//       </div>
//       <div className={styles.laundryapplicationflexbox}>
//         <div className={styles.laundryflexboxno1}>
//           <div className={styles.laundrypageflexboxno1imagediv}>
//             <img className={styles.laundrypageflexboxno1imagedivimage1} src='/Images/Laundrypage/Bannersbackgrounds/dirtyshirtlaundryservice.png' alt='image' />
//           </div>

//           <div className={styles.laundryflexbox1imagetxt}>
//             <h4 className={styles.laundryflexbox1imagetxt1}> Single Vendor Laundry Delivery Service </h4>
//             <p className={styles.laundryflexbox1imagetxt2}>
//               <small >
//                 Bottom Funnel is providing ready made solutions that helps individual startups and enterprises launch their business
//                 quickly. We have the wide range of ready made solutions, customizable per your business requirements. We are an expert
//                 laundry & Dry cleaning app  services all around the globe.
//               </small>
//             </p>

//             <p className={styles.laundryflexboximageboxgreentxt}>
//               Get Started
//             </p>
//           </div>
//         </div>

//         <div className={styles.laundryflexboxno2}>
//           <div className={styles.laundrypageflexboxno1imagediv}>
//             <img className={styles.laundrypageflexboxno1imagedivimage1} src='/Images/Laundrypage/Bannersbackgrounds/washingmachineslaundromat.png' alt='image' />
//           </div>

//           <div className={styles.laundryflexbox1imagetxt}>
//             <h4 className={styles.laundryflexbox1imagetxt1}> Multi-vendor Laundry Service Marketplace </h4>
//             <p className={styles.laundryflexbox1imagetxt2}>
//               <small >
//                 On Demand Laundry & Dry Cleaning App Development.Bottom Funnel is a reputed laundry app development company
//                 providing on-demand laundry mobile app and same day laundry mobile app development for iPhone & Android.
//                 Bottom Funnel is a reputed laundry app.
//               </small>
//             </p>

//             <p className={styles.laundryflexboximageboxgreentxt}>
//               Get Started
//             </p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default LaudryApplication


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
