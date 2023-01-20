// import styles from "../Scoping-Session-Page/header.module.css";

// const Header = () => {
//   return (
//     <>
//       <div className={styles.RGmainContaier}>
//         <div className={styles.RGheaderText}>
//           <h1 className={styles.RGheaderTitle}>Scoping Session</h1>

//           <p className={styles.RGheadertext}>
//             Bottom Funnel is a marketing agency that specializes in conveying
//             breakthrough ideas to the market cost-effectively. We understand
//             your product inside out and will work tirelessly to make it a
//             success.
//           </p>

//           <button className={styles.RGheaderButton}> Get Started</button>
//         </div>

//         <div className={styles.RGimageDiv}>
//           <img
//             width="100%"
//             src="Images/Scoping-Session/Banners-&-Background/Component77.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React from 'react'
import styles from "./header.module.css"

export const Header = () => {
  return (
        <>
          <div className={styles.RGmainContaier}>
            <div className={styles.RGheaderText}>
              <h1 className={styles.RGheaderTitle}>Scoping Session</h1>
    
              <p className={styles.RGheadertext}>
                Bottom Funnel is a marketing agency that specializes in conveying
                breakthrough ideas to the market cost-effectively. We understand
                your product inside out and will work tirelessly to make it a
                success.
              </p>
    
              <button className={styles.RGheaderButton}> Get Started</button>
            </div>
    
            <div className={styles.RGimageDiv}>
              <img
                width="100%"
                src="Images/Scoping-Session/Banners-&-Background/Component77.png"
                alt=""
              />
            </div>
          </div>
        </>
      );
    };