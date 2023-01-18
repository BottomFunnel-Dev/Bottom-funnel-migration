import React from 'react';
import styles from "./Web3Development.module.css";

const Web3Development = () => {
  return (
    <div className={styles.Web3Developmentmainbox}>

      <div className={styles.web3developmentleftboxing}>
        <h2><a className={styles.specialcolorredish}>Web 3</a> game Development</h2>
        <p>
          Web 3.0 is the future of gaming and it's already starting to change the way we think about games.
          Web 3.0 is a term that refers to the emergence of new protocols, systems, and applications that use
          blockchain technology to connect users with each other and between devices in a more secure, transparent,
          and trustless manner.
        </p>

        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>

          <h6>Role Playing game(RPG)</h6>
        </div>


        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>

          <h6>Player Vs Player(Pvp)</h6>
        </div>

        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>

          <h6>Collectible</h6>
        </div>

        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>

          <h6>Adventure and Puzzles</h6>
        </div>

      </div>

      <div className={styles.web3developmentflexingboxrightdiv}>

        <div className={styles.web3develomentgameboxingimageinnerbox1}>
          <img src='Images/gamedevelopmentpage/Rectangle 18509.png' alt='imageone' />
        </div>

        <div className={styles.web3develomentgameboxingimageinnerbox2}>
          <img src='Images/gamedevelopmentpage/Rectangle 18510.png' alt='imageone' />
        </div>
      </div>

    </div>
  );
};

export default Web3Development;