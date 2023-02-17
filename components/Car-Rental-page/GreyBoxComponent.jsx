import React from "react";
import styles from "./greyBoxComponent.module.css";
import Image from "next/image";
export default function GreyBoxComponent() {
  return (
    <div className={styles.RGgreyBoxContainer}>
      <div className={styles.RGdivv}>
        <div className={styles.RGdivvicon}>
      <Image src={"/Images/Car-Rental-Page-Images/icon/simple login.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  </div>
        <h2>Simple Login</h2>
        <p>
          Users can easily sign in to their accounts by using their email
          addresses or Facebook profiles.
        </p>
      </div>

      <div className={styles.RGdivv}>
        <div className={styles.RGdivvicon}>
        <Image src={"/Images/Car-Rental-Page-Images/icon/search & filtering.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  </div>
        <h2>Search And Filtering</h2>
        <p>
          A search engine that is easy to use and allows users to search for
          cars by specifying a range of criteria (car class, body type, price,
          engine type, colour and so on.)
        </p>
      </div>
      <div className={styles.RGdivv}>
        <div className={styles.RGdivvicon}>
        <Image src={"/Images/Car-Rental-Page-Images/icon/location & maps.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  </div>
        <h2>Location And Maps</h2>
        <p>
          If automobiles may be parked anywhere inside a permitted area, then
          users can access information about the cars in the vicinity and how
          they can be best accessed.
        </p>
      </div>

      <div className={styles.RGdivv}>
        <div className={styles.RGdivvicon}>
        <Image src={"/Images/Car-Rental-Page-Images/icon/simple login-1.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  </div>
        <h2> Reservation Management</h2>
        <p>
          The reservation panel is user-friendly and allows for car rental
          scheduling, cancellation, charge estimate, and instant booking.
        </p>
      </div>

      <div className={styles.RGdivv}>
        <div className={styles.RGdivvicon}>

        <Image src={"/Images/Car-Rental-Page-Images/icon/payment.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  </div>
        <h2>Payment</h2>
        <p>
          You can accept payments from your users in a variety of ways and they
          will have the option to choose from a selection.
        </p>
      </div>

      <div className={styles.RGdivv}>
        <div className={styles.RGdivvicon}>
        <Image src={"/Images/Car-Rental-Page-Images/icon/notifications.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                  </div>
        <h2>Notifications</h2>
        <p>
          The reservation panel is user-friendly and allows for car rental
          scheduling, cancellation, charge estimate, and instant booking.
        </p>
      </div>
    </div>
  );
}
