import Image from "next/image";
import React from "react";
import styles from "./DashboardCards.module.css";

export default function DashboardCards({ data, position }) {
  const [active, setActive] = React.useState(
    "/Images/Educationp/screens/dashboard/studentstatistics.webp",
  );

  const { heading, cardData } = data;
  return (
    <div
      className={styles.dashboardCardsContainer}
      style={{
        flexDirection: !position ? "row" : "row-reverse",
        background: !position
          ? "linear-gradient(to left, #fff 60%, #fff 40%)"
          : "linear-gradient(to left, #fff4f2 60%, #fff 40%)",
      }}
    >
      <div>
        <h1>{heading}</h1>
        <div>
          {cardData.map(({ image, title, description }) => (
            <div
              key={title}
              className={styles.dashboardCardsCards}
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
    </div>
  );
}
