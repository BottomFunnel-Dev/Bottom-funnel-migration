import React from 'react'
import styles from './Wearablecardscontainer.module.css';
import Image from 'next/image';

export const Wearablecardscontainer = () => {
   return (
      <div>
         <div className={styles.reactnativeMainDiv}>
            <div className={styles.reactnativeContent}>
               <h1>Our React Native App Development Solution</h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error minus laudantium similique nam iusto, eveniet hic voluptas officiis modi quaerat dolorem autem amet quam quo nulla ipsa! Voluptates, architecto.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus atque ea assumenda similique nisi voluptates, qui aperiam praesentium tempore, neque ad vero? Qui ea itaque odit omnis, enim dolorem ducimus?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto, optio vel doloribus aspernatur, ea eius libero provident incidunt ullam animi pariatur nam molestias quo quibusdam! Nostrum maxime consectetur velit!
               </p>
            </div>

            <div className={styles.reactnativeContentScroller}>
               <div className={styles.reactnativeContentScrollerDiv}>
                  <div className={styles.reactnativeContentScrollerDivContainer}>
                     <div className={styles.reactnativeContentIcon}>
                        <Image
                           src={"/Images/ReactNativeDevelopement/coding.webp"}
                           alt={"image"}
                           width={"0"}
                           height={"0"}
                           sizes={"100vw"}
                           style={{ width: "100%", height: "100%" }}
                        />
                     </div>

                     <div className={styles.reactnativeContentHeading}>
                        <h3> Custom Design and Navigation</h3>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Est, ea voluptas itaque dolores quo molestias aut doloribus ut beatae
                           ipsa, quibusdam dignissimos consequuntur repudiandae quis omnis iure sunt
                           magnam quos
                        </p>
                     </div>
                  </div>

                  <div className={styles.reactnativeContentScrollerDivContainer}>
                     <div className={styles.reactnativeContentIcon}>
                     <Image
                        src={"/Images/ReactNativeDevelopement/wireframe (1).webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                     />
                     </div>
                     <div className={styles.reactnativeContentHeading}>
                        <h3> Custom Design and Navigation</h3>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Est, ea voluptas itaque dolores quo molestias aut doloribus ut beatae
                           ipsa, quibusdam dignissimos consequuntur repudiandae quis omnis iure sunt
                           magnam quos
                        </p>
                     </div>
                  </div>

                  <div className={styles.reactnativeContentScrollerDivContainer}>
                     <div className={styles.reactnativeContentIcon}>
                     <Image
                        src={"/Images/ReactNativeDevelopement/ux-interface.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                     />
                     </div>

                     <div className={styles.reactnativeContentHeading}>
                        <h3> Custom Design and Navigation</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Est, ea voluptas itaque dolores quo molestias aut doloribus ut beatae
                           ipsa, quibusdam dignissimos consequuntur repudiandae quis omnis iure sunt
                           magnam quos</p>
                     </div>
                  </div>

                  <div className={styles.reactnativeContentScrollerDivContainer}>
                     <div className={styles.reactnativeContentIcon}>
                     <Image
                        src={"/Images/ReactNativeDevelopement/ux-interface.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                     />
                     </div>

                     <div className={styles.reactnativeContentHeading}>
                        <h3> Custom Design and Navigation</h3>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Est, ea voluptas itaque dolores quo molestias aut doloribus ut beatae
                           ipsa, quibusdam dignissimos consequuntur repudiandae quis omnis iure sunt
                           magnam quos
                        </p>
                     </div>
                  </div>

                  <div className={styles.reactnativeContentScrollerDivContainer}>
                     <div className={styles.reactnativeContentIcon}>
                     <Image
                        src={"/Images/ReactNativeDevelopement/ux-interface-2.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                     />
                     </div>

                     <div className={styles.reactnativeContentHeading}>
                        <h3> Custom Design and Navigation</h3>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Est, ea voluptas itaque dolores quo molestias aut doloribus ut beatae
                           ipsa, quibusdam dignissimos consequuntur repudiandae quis omnis iure sunt
                           magnam quos
                        </p>
                     </div>
                  </div>

                  <div className={styles.reactnativeContentScrollerDivContainer}>
                     <div className={styles.reactnativeContentIcon}>
                     <Image
                        src={"/Images/ReactNativeDevelopement/approved 2.webp"}
                        alt={"image"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                     />
                     </div>

                     <div className={styles.reactnativeContentHeading}>
                        <h3> Custom Design and Navigation</h3>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Est, ea voluptas itaque dolores quo molestias aut doloribus ut beatae
                           ipsa, quibusdam dignissimos consequuntur repudiandae quis omnis iure sunt
                           magnam quos
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
