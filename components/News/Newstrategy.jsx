import Image from "next/image";
import React from "react";
import styles from "./Newstrategy.module.css";

export default function Newstrategy() {
  return (
    <div className={styles.sznewstrategy}>
      <div>
        <h1>
          LET'S CREATE AN APP THAT ELEVATES THE WHOLE EVENT EXPERIENCE FOR
          CUSTOMERS!
        </h1>
        <button>Talk to our experts</button>
      </div>
      <span>
        <Image
          src={"/Images/News/bookCall.webp"}
          alt={"News/bookCall.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
    </div>
  );
}
