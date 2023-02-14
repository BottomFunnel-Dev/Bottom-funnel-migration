import React from "react";
import styles from "./Travelsolution.module.css";
import Image from "next/image";

export default function Travelsolution() {
  const travelsolution = [
    {
      img: "/Images/Travel/carbooking.webp",
      p: "Car Booking Solution ",
    },
    {
      img: "/Images/Travel/booking.webp",
      p: "Hotel Booking Solution",
    },
    {
      img: "/Images/Travel/diverse.webp",
      p: "Diverse Booking Solution",
    },
    {
      img: "/Images/Travel/crm solution.webp",
      p: "CRM Solutions ",
    },
    {
      img: "/Images/Travel/travelsolution.webp",
      p: "Travel Planning Solution.webp",
    },
    {
      img: "/Images/Travel/travelportal.webp",
      p: "Travel Portal Development",
    },
  ];
  return (
    <div className={styles.travelsolutiondiv}>
      <div className={styles.travelsubdiv}>
        <div className={styles.travelsolutionleft}>
          <div>
            <h1>Solution</h1>
            <p>
              Bottom Funnel app is a perfect blend of both. We provide you with
              all the basic and advanced features that are necessary to enhance
              your online presence and market your brand effectively.
            </p>
          </div>
        </div>
        <div className={styles.travelsolutionright}>
          {travelsolution.map((item) => {
            return (
              <div className={styles.travelsolutiondocs}>
                <div className={styles.traveldocimg}>
                  <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p>{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
