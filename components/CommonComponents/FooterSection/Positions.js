import React from "react";
import styles from "./positions.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function Positions() {
  const address = [
    {
      address: "800 3rd Ave New York, NY 10022 United States",
      stylename: "newYorkLocation",
    },
    {
      address: "House No, 3 Nkanchibaya Rd, Lusaka, Zambia",
      stylename: "zambiaLocation",
    },
    {
      address: "422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017",
      stylename: "germanyLocation",
    },
    {
      address: "Jtm Mall, Office no 422, 4th Floor, Jaipur Rajasthan, 302025",
      stylename: "indiaLocation",
    },
    {
      address: "1210, The Regal Tower, Near Business Bay, Dubai, U.A.E.",
      stylename: "uaeLocation",
    },
  ];

  return (
    <div className={styles.positionss}>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <div className={styles.tooltipCustomised}>
            <div className={styles.indicate}></div>
            <p>Jtm Mall, Office no 422, 4th Floor, Jaipur Rajasthan, 302025</p>
          </div>
        }
      >
        <div className={styles.indiaLocation}></div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <div className={styles.tooltipCustomised}>
            <div className={styles.indicate}></div>
            <p>1210, The Regal Tower, Near Business Bay, Dubai, U.A.E.</p>
          </div>
        }
      >
        <div className={styles.uaeLocation}></div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <div className={styles.tooltipCustomised}>
            <div className={styles.indicate}></div>
            <p>422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017</p>
          </div>
        }
      >
        <div className={styles.germanyLocation}></div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <div className={styles.tooltipCustomised}>
            <div className={styles.indicate}></div>
            <p>House No, 3 Nkanchibaya Rd, Lusaka, Zambia</p>
          </div>
        }
      >
        <div className={styles.zambiaLocation}></div>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={
          <div className={styles.tooltipCustomised}>
            <div className={styles.indicate}></div>
            <p>800 3rd Ave New York, NY 10022 United States</p>
          </div>
        }
      >
        <div className={styles.newYorkLocation}></div>
      </OverlayTrigger>
    </div>
  );
}
