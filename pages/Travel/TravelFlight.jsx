import React from "react";
import styles from "./Travelflight.module.css";

export default function TravelFlight() {
  return (
    <div className={styles.travelflightcontainer}>
      <div className={styles.szflightcontainer}>
        <div className={styles.szflightleft}>
          <div className={styles.szbgflight}>
            <img src="Images/Travel/bgflifgt1.png" />
          </div>
          <div className={styles.sztravelphone}>
            <img src="Images/Travel/phone.png" />
          </div>
          <div className={styles.discovermobilescreen}>
            <img src="Images/Travel/discovermobileimage.png" />
          </div>
        </div>
        <div className={styles.szflightright}>
          <div>
            <h4>Flight</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
          <div>
            <h4>Accomodation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
          <div>
            <h4>Packaged Tour</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
        </div>
      </div>

      {/* ///////////////laptopsection///////////// */}

      <div className={styles.szflightlaptopcontainer}>
        <div className={styles.szflightlaptopright}>
          <div>
            <h4>Flight</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
          <div>
            <h4>Accomodation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
          <div>
            <h4>Packaged Tour</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
        </div>
        <div className={styles.szflightlaptopleft}>
          <div className={styles.szbgflight2}>
            <img src="Images/Travel/bgflight2.png" />
          </div>
          <div className={styles.macbook}>
            <img src="Images/Travel/macbook.png" />
          </div>
          <div className={styles.szlaptopscreen}>
            <img src="Images/Travel/flightlaptopscreen.png" />
          </div>
        </div>
      </div>

      {/* /////////////mobile////////////// */}

      <div className={styles.szflightmobilecontainer}>
        <div className={styles.szflightmobileleft}>
          <div className={styles.bgcircle}>
            {" "}
            <img src="Images/Travel/bgflight3.png" />
          </div>
          <div className={styles.sztravelmobilecase}>
            {" "}
            <img src="Images/Travel/travelmobilecase.png" />{" "}
          </div>
          <div className={styles.sztravelexplore}>
            {" "}
            <img src="Images/Travel/exploremobileimage.png" />{" "}
          </div>
        </div>
        <div className={styles.szflightmobileright}>
          <div>
            <h4>Flight</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
          <div>
            <h4>Accomodation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
          <div>
            <h4>Packaged Tour</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              tempora magnam modi consequatur incidunt rem? Expedita ratione
              dignissimos in blanditiis quam a placeat illo alias, facere non
              optio reprehenderit saepe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
