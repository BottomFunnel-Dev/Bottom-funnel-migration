// import styles from "./footer.css";

// const Footer = () => {
//   return (
//     <div className="RGtank">
//       <div className="RGfooterImage">
//         <img
//           src="Images/Scoping-Session/Banners-&-Background/Group340060.png"
//           alt=""
//         />
//       </div>

//       {/* <div className="RGfooterText">
//         <h1>Kickstart your dream project with us</h1>
//         <p>
//           We have worked with some of the best innovative ideas and brand in the
//           world across industries.
//         </p>
//         <button className="RGfbtn">Initiate a Partnership</button>
//       </div> */}
//     </div>
//   );
// };

// export default Footer;


import React from 'react'
import styles from "./footer.module.css"

export const Footer = () => {
  return (
    <div className={styles.RGtank}>
      <div className={styles.RGfooterImage}>
        <img
          src="Images/Scoping-Session/Banners-&-Background/Group340060.png"
          alt=""
        />
      </div>

      {/* <div className="RGfooterText">
        <h1>Kickstart your dream project with us</h1>
        <p>
          We have worked with some of the best innovative ideas and brand in the
          world across industries.
        </p>
        <button className="RGfbtn">Initiate a Partnership</button>
      </div> */}
    </div>
  );
};