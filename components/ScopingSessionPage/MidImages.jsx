// import styles from "../Scoping-Session-Page/midImages.css";
// const MidImages = () => {
//   return (

//     <div className='RGMidImgContainer'>

//       <div className='RGleftImgDiv'>
//         <img src="Images/Scoping-Session/Banners-&-Background/Component79.png" alt="" />
//       </div>

//       <div className='RGrightImgDiv'>
//         <img src="Images/Scoping-Session/Banners-&-Background/Component78.png" alt="" />

//       </div>

//       <div className="RGimgText">
//         <ul>
//           <li>
//             Focuses on bilateral communication which generates
//             <br />
//             value and knowledge sharing.
//           </li>
//           <li>
//             Strategizes and equips you with all the information
//             <br />
//             regarding project planning.
//           </li>
//           <li>Provides insights into our work culture and practices.</li>
//           <li>
//             Documenting a scope of work seamlessly guides you
//             <br />
//             towards your end goal.
//           </li>
//           <li>
//             Tailor-made technological stack that aligns with your <br />
//             requirements.
//           </li>
//           <li>
//             Outlines project delivery along with potential cost
//             <br />
//             estimates
//           </li>
//           <li>Delivers results in the easiest and fastest way.</li>
//         </ul>

//       </div>


//     </div>
//   );
// };

// export default MidImages;


import React from 'react'
import styles from "./midImages.module.css"


export const MidImages = () => {

  return (

    <div className={styles.RGMidImgContainer}>

      <div className={styles.RGleftImgDiv}>
        <img src="Images/Scoping-Session/Banners-&-Background/Component79.png" alt="" />
      </div>

      <div className={styles.RGrightImgDiv}>
        <img src="Images/Scoping-Session/Banners-&-Background/Component78.png" alt="" />

      </div>

      <div className={styles.RGimgText}>
        <ul>
          <li>
            Focuses on bilateral communication which generates
            <br />
            value and knowledge sharing.
          </li>
          <li>
            Strategizes and equips you with all the information
            <br />
            regarding project planning.
          </li>
          <li>Provides insights into our work culture and practices.</li>
          <li>
            Documenting a scope of work seamlessly guides you
            <br />
            towards your end goal.
          </li>
          <li>
            Tailor-made technological stack that aligns with your <br />
            requirements.
          </li>
          <li>
            Outlines project delivery along with potential cost
            <br />
            estimates
          </li>
          <li>Delivers results in the easiest and fastest way.</li>
        </ul>

      </div>


    </div>
  );
};


