import React from "react";
import styles from "./mernPopularservices.module.css";
import { useState } from "react";
export const MernPoluparServices = ({ popularservice }) => {
  const [toggle, setToggle] = useState(0);

  const handletoggle = (ele) => {
    setToggle(ele);
  };
  console.log(toggle);
  console.log(popularservice);
  return (
    <div className={styles.mernpopularservices}>
      <h1>{popularservice.head}</h1>
      <div className={styles.mernServices}>
        <div className={styles.mernPopular}>
          {popularservice.services.map((item, index) => (
            <div
              onMouseEnter={() => {
                handletoggle(index);
              }}
              key={index}
              className={styles.serviceContent}
              style={toggle===index? {background:"#34b0ca", borderRadius:"5px",color:"white"}:{background:"white"}}
            >
              <h4 className={styles.h4Content}>{item.serviceName}</h4>
            </div>
          ))}
        </div>
        

        <div className={styles.serviceDescription}>
          <div className={styles.descriptionImage}>
            <img src={popularservice.services[toggle].stackimg} alt="image" />
          </div>
          <div className={styles.stackContent}>
            {popularservice.services[toggle].description}
          </div>
        </div>
      </div>
    </div>
  );
};
