import Image from 'next/image';
import React from 'react';
import styles from "./TaxiOccassion.module.css";

export const TaxiOccassion = () => {
  return (
    <div className={styles.taxioccasioncontainer}>
      <div className={styles.taxioccasionsub}>
        <div className={styles.sztaxi}>
          <div className={styles.sztaxihead}>
            <h1> A taxi for every occasion </h1>{" "}
          </div>

          <div className={styles.sztaxicard}>
            <div className={styles.sztaxioccasion1}>
              <div className={styles.szoccassionimage}>
                <Image src={"/Images/Taxibooking/Component 10.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <h4> City rides </h4>
              <p>
                we work closely with many taxi companies to find the most
                affordable rates around. Being in a hurry, or just plain lazy,
                can put you off booking car rides online.
              </p>
              <div className={styles.sztaxiride}>
                <div>
                  <div className={styles.sztaxiac}>
                    <Image src={"/Images/Taxibooking/winter.png"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> AC Cabs </p>
                </div>

                <div>
                  <div className={styles.sztaxipocket}>
                    <Image src={"/Images/Taxibooking/cost.png"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> Pocket friendly </p>
                </div>

                <div>
                  <div className={styles.sztaxicost}>
                    <Image src={"/Images/Taxibooking/rupee.png"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> Cashless rides </p>
                </div>
              </div>
            </div>

            <div className={styles.sztaxioccasion2}>
              <div className={styles.szoccassionimage}>
                <Image src={"/Images/Taxibooking/Component 9.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <h4> Outstation </h4>
              <p>
                Our taxi booking app is perfect for any occasion - you're going
                out for dinner or planning a weekend getaway, TaxiCab will be
                there to make sure that your trip runs smoothly from start to
                finish.
              </p>

              <div className={styles.sztaxiride}>
                <div>
                  <div className={styles.sztaxitrip}>
                    <Image src={"/Images/Taxibooking/route.png"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> On-Way Trips </p>
                </div>

                <div>
                  <div className={styles.sztaxibook}>
                    <Image src={"/Images/Taxibooking/booking.png"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> Advance Booking </p>
                </div>

                <div>
                  <div className={styles.sztaxisafe}>
                    <Image src={"/Images/Taxibooking/car.png"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> Safe Rides </p>
                </div>
              </div>

            </div>
            <div className={styles.sztaxioccasion3}>
              <div className={styles.szoccassionimage}>
                <Image src={"/Images/Taxibooking/Component 8.png"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <h4> Rentals </h4>
              <p>
                Our taxi booking app, you can request a car from the comfort of
                your seat. Get picked up in style by one of our chauffeurs and
                head home in style. Our expert can can add these features.
              </p>

              <div className={styles.sztaxiride}>
                <div>
                  <div className={styles.sztaxihour}>
                    <Image src={"/Images/Taxibooking/Sand Timer.png"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> Hourly packages </p>
                </div>

                <div>
                  <div className={styles.sztaxistop}>
                    <Image src={"/Images/Taxibooking/segment.png"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> Multiple Stops </p>
                </div>

                <div>
                  <div className={styles.sztaxirate}>
                    <Image src={"/Images/Taxibooking/police-hat.png"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />{" "}
                  </div>
                  <p> Top-Rated Partners </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};