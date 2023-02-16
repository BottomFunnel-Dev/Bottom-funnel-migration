import Image from "next/image";
import React from "react";
import styles from "./StudentApplication.module.css";

export default function StudentApplication({ cardsData }) {
  const [active, setActive] = React.useState(
    "/Images/Educationp/screens/studentapp/managecourses.webp",
  );

  return (
    <div className={styles.studentApplicationContainer}>
      <div className={styles.studentApplicationContent}>
        <h1>Student Application</h1>
        <div>
          {cardsData.map(({ image, title, description }) => (
            <div
              key={title}
              className={styles.studentApplicationCards}
              onMouseEnter={() => setActive(() => image)}
            >
              <div>
                <span>
                  <Image
                    src={"/Images/Educationp/icons/tick.webp"}
                    alt={"Educationp/icons/tick.webp"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </span>
                <h2>{title}</h2>
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.studentApplicationImages}>
        <span>
          <Image
            src={"/Images/Educationp/background.webp"}
            alt={"/Images/Educationp/background.webp"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </span>
        <span>
          <Image
            src={active}
            alt={active}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </span>
        <span>
          <Image
            src={"/Images/Educationp/chilling.webp"}
            alt={"/Images/Educationp/chilling.webp"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </span>
      </div>
    </div>
  );
}
