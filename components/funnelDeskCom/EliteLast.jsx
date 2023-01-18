import React from "react";
import styles from "./eliteServiceLast.module.css";

export const EliteLast = () => {
  return (
    <div className={styles.lastComponentService}>
      <div className={styles.backWires}>
        <img src="Images/BottomFunnelDeskPhotos/wires.png" alt="" />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.rightContentSide}>
          <button>Bottom Funnel Chat</button>
          <h2>Connect on the channels that customers love</h2>
          <p>
            Impress customers with availability in their channel of choice, and
            seamless transitions at any point in their journey. Integrate a
            blend of conversational experiences including live-chat, web, mobile
            and contact center support.
          </p>
          <p>
            Help customers find answers fast. Launch Al-powered chatbots to
            easily guide customers in solving their questions.
          </p>

          <h5>Explore now</h5>
        </div>
        <div className={styles.rightGifSide}>
          <img src="Images/BottomFunnelDeskPhotos/chats.gif" alt="queries" />
        </div>
      </div>
    </div>
  );
};
