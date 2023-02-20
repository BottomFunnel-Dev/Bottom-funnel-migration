import React from 'react'
import styles from "./AviationLower.module.css"
import Image from 'next/image'

export default function AviationLower ()  {

  return (
    <div className={styles.AviationLowermain}>
        <div className={styles.AviationLowerText}>
            <h5>Boost your revenue with our online payment app developement services.</h5>
            <button>Let's Get Started</button>
        </div>
        <div className={styles.AviationLowerImg}>
        <Image src={"/Images/aviation/Newpage/screens/Group 1000006132.webp"}
                alt={"images"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
        </div>
    </div>
  )
}
