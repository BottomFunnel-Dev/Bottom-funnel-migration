import React from "react";
import styles from "./iotCapacityCards.module.css";

export default function IotCapacityCards({ data, num }) {
  return (
    <div className={styles.iotCapacityCards} style={data.style}>
      <h1 style={{ color: `#${data.spanColor}` }}>{`0${num}`}</h1>
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
