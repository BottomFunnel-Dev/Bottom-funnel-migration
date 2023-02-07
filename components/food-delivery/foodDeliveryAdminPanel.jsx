// import React, { useState }  from "react";
// import styles from "./foodDeliveryAdminPanel.module.css";

// // let adminpanelData = [
// //   {
// //     title: "Manage everything in one place",
// //     description:
// //       "This feature allows admin to manage all their activites through this app only, i.e, from one place or screen",
// //   },
// //   {
// //     title: "Gather information about customer preferences",
// //     description:
// //       "The admin will be able to check which products the customers are liking the most and what's generating highest profits.",
// //   },
// //   {
// //     title: "Generate profit reports and draw insights",
// //     description:
// //       "this feature will generate profit and sales report so that the admin can draw fruitful insights out or it and work on it.",
// //   },
// //   {
// //     title: "Various CRM features",
// //     description:
// //       "These customer relationship management features for admin panel will help the admin in improving relationship with their customers.",
// //   },
// // ];

// export const FoodDeliveryAdminPanel = ( fooddeliveryadmindata ) => { 

//   const [active, setActive] = useState(0);
//   return (
//     <div className={styles.logicadmin}>
//       <h1>{fooddeliveryadmindata.sectionTitle}</h1>
//       <div className={styles.logicadminsub}>
//         <div className={styles.logicadminright}>
//           {fooddeliveryadmindata.fooddeliveryadmindata.map(({ title, icon, para }, idx) => {
//             return (
//               <div key={title} onMouseOver={() => setActive(idx)} className={`logistic-box-${idx}`} >
//                 {/* <div className={styles.logisticLogo}>
//                   <img src={icon.src} alt={icon.alt} />
//                 </div> */}

//                 <h3>{title}</h3>
//                 <p>{para}</p>
//               </div>
//             );
//           })}
//         </div>

//         <div className={styles.logicadminleft}
//           style={{
//             background: `url(${adminData.background})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "contain",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className={styles.logisticAdminImage}>
//             <img src={fooddeliveryadmindata.fooddeliveryadmindata[active].img.src}
//               alt={fooddeliveryadmindata.fooddeliveryadmindata[active].img.alt}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
