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
                <img src="/Images/Taxibooking/Component 10.png" />
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
                    <img src="/Images/Taxibooking/winter.png" />{" "}
                  </div>
                  <p> AC Cabs</p>
                </div>
                <div>
                  <div className={styles.sztaxipocket}>
                    <img src="/Images/Taxibooking/cost.png" />{" "}
                  </div>
                  <p> Pocket friendly </p>
                </div>
                <div>
                  <div className={styles.sztaxicost}>
                    <img src="/Images/Taxibooking/rupee.png" />{" "}
                  </div>
                  <p> Cashless rides </p>
                </div>
              </div>
            </div>
            <div className={styles.sztaxioccasion2}>
              <div className={styles.szoccassionimage}>
                <img src="/Images/Taxibooking/Component 9.png" />
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
                    <img src="/Images/Taxibooking/route.png" />{" "}
                  </div>
                  <p> On-Way Trips </p>
                </div>
                <div>
                  <div className={styles.sztaxibook}>
                    <img src="/Images/Taxibooking/booking.png" />{" "}
                  </div>
                  <p> Advance Booking </p>
                </div>
                <div>
                  <div className={styles.sztaxisafe}>
                    <img src="/Images/Taxibooking/car.png" />{" "}
                  </div>
                  <p> Safe Rides </p>
                </div>
              </div>
            </div>
            <div className={styles.sztaxioccasion3}>
              <div className={styles.szoccassionimage}>
                <img src="/Images/Taxibooking/Component 8.png" />
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
                    <img src="/Images/Taxibooking/Sand Timer.png" />{" "}
                  </div>
                  <p> Hourly packages </p>
                </div>
                <div>
                  <div className={styles.sztaxistop}>
                    <img src="/Images/Taxibooking/segment.png" />{" "}
                  </div>
                  <p> Multiple Stops </p>
                </div>
                <div>
                  <div className={styles.sztaxirate}>
                    <img src="/Images/Taxibooking/police-hat.png" />{" "}
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
}