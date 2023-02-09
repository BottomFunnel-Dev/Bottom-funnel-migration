import Image from "next/image";
import React from "react";
import styles from "./Featuresection.module.css";

export default function Featuressection() {
  return (
    <div className={styles.szvideofeature}>
      <div>
        <h1> Features </h1>
        <p>
          You take care of the video quality and we take care of everything else{" "}
        </p>
      </div>

      <div className={styles.szfeaturesubcontainer}>
        <div style={{ width: "33.5%" }}>
          <div className={styles.updatediv}>
            <div className={styles.updatesubdiv}>
              <div className={styles.updateflexdiv}>
                <div className={styles.updateimg}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src="/Images/Videostreaming/update.webp"
                    alt="Videostreaming/update.webp"
                  />
                </div>
                <h4>Update On Time</h4>
              </div>
            </div>

            <p>
              Time is a valuable commodity, and it can be difficult to find the
              time necessary to achieve our goals. However, there are ways to
              make time work for us.
            </p>
          </div>

          {/* 
              ////////2option///////////// */}

          <div className={styles.reminderdiv}>
            <div className={styles.remindersubdiv}>
              <div className={styles.reminderflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src="/Images/Videostreaming/reminder.webp"
                    alt="Videostreaming/reminder.webp"
                  />
                </div>
                <h4>Reminders</h4>
              </div>
            </div>

            <p>
              A great way to keep on top of your tasks and remember what you're
              supposed to be working on is to set up a daily or weekly reminder.
            </p>
          </div>
        </div>

        <div style={{ width: "33.5%" }}>
          <div className={styles.updatediv}>
            <div className={styles.updatesubdiv}>
              <div className={styles.updateflexdiv}>
                <div className={styles.updateimg}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src="/Images/Videostreaming/integration.webp"
                    alt="Videostreaming/integration.webp"
                  />
                </div>
                <h4> Social media Integration </h4>
              </div>
            </div>

            <p>
              Social media integration is one of the most important aspects of
              modern marketing.
            </p>
          </div>

          {/* 
              ////////2option///////////// */}

          <div className={styles.reminderdiv}>
            <div className={styles.remindersubdiv}>
              <div className={styles.reminderflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src="/Images/Videostreaming/notification.webp"
                    alt="Videostreaming/notification.webp"
                  />
                </div>
                <h4>Push Notification</h4>
              </div>
            </div>

            <p>
              Push Notifications allow businesses to send alerts and messages
              directly to a user's smartphone, without having to visit the
              website or app first.
            </p>
          </div>
        </div>

        <div style={{ width: "33.5%" }}>
          <div className={styles.updatediv}>
            <div className={styles.updatesubdiv}>
              <div className={styles.updateflexdiv}>
                <div className={styles.updateimg}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src="/Images/Videostreaming/rating.webp"
                    alt="Videostreaming/rating.webp"
                  />
                </div>
                <h4>Ratings</h4>
              </div>
            </div>

            <p>
              Ratings allow customers to share their thoughts and experiences
              with a product or service.
            </p>
          </div>
          {/* 
              ////////2option///////////// */}

          <div className={styles.reminderdiv}>
            <div className={styles.remindersubdiv}>
              <div className={styles.reminderflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src="/Images/Videostreaming/chatting.webp"
                    alt="Videostreaming/chatting.webp"
                  />
                </div>
                <h4>Live Chatting</h4>
              </div>
            </div>

            <p>
              It allows you to interact with customers directly, which can be a
              valuable resource for resolving issues or providing guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
