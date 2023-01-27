import React from "react";
import styles from "./Politicalvolunteer.module.css";

export default function Politicalvolunteer() {
  return (
    <div className={styles.volunteerdiv}>
      <div className={styles.volunteersub}>
        <div className={styles.szvolunteer}>
          <div className={styles.szvolunteerimage}>
            <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Politics/hand.png" />
          </div>
          <div className={styles.volunteerhead}>
            <div>
              <h4>Volunteer engagement</h4>
              <p>
                On Volunteer engagement, you can find out about upcoming
                elections, register as a voter, or follow your representatives
                on social media. Choose your favorite party based on the issues
                you care about most and get involved!
              </p>
            </div>
          </div>
        </div>

        {/* /////paragraph////////// */}

        <div className={styles.szvolunteer}>
          <div className={styles.szvolunteerimage}>
            <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Politics/customer-engagement.png" />
          </div>
          <div className={styles.volunteerhead}>
            <div>
              <h4> Engagement</h4>
              <p>
                Our goal is to create an easy-to-use tool that allows parties to
                engage with voters online in a meaningful way, without adding
                unnecessary friction or slowing down the user experience. We
                think that engaging with your constituents on social media is
                important – but so is talking one-on-one during campaign events
                and community meetings offline!
              </p>
            </div>
          </div>
        </div>

        {/* /////paragraph////////// */}

        <div className={styles.szvolunteer}>
          <div className={styles.szvolunteerimage}>
            <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Politics/transparency.png" />
          </div>
          <div className={styles.volunteerhead}>
            <div>
              <h4>Transparency</h4>
              <p>
                Transparency is the key to success in a web app. Our team of
                experienced developers know this well and build political party
                websites that are quick and easy to use. With our powerful, yet
                user-friendly code, you can be sure your website will attract
                the right amount of traffic.
              </p>
            </div>
          </div>
        </div>

        {/* /////paragraph////////// */}

        <div className={styles.szvolunteer}>
          <div className={styles.szvolunteerimage}>
            <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Politics/reputation.png" />
          </div>
          <div className={styles.volunteerhead}>
            <div>
              <h4> Reputation management</h4>
              <p>
                We understand that building a reputation is not as easy as it
                sounds. It takes time, patience and constant updates. We help
                our clients build their brand through various platforms like
                Facebook, Twitter, Instagram and other social media apps. Our
                team of professionals know how to handle every aspect of the
                process so that your brand gains traction and stands out from
                the crowd.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
