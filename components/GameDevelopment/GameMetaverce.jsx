import React from 'react';
import styles from "./GameMetaverce.module.css";

export const GameMetaverce = () => {
  return (
    <div className={styles.gamedevelopmentmetavercemainbox}>

      <div className={styles.gamedevelopermetavercetxtboxes}>
        <h2><a className={styles.specialcolor}>Metaverse</a> Game Development</h2>
        <p>
          Metaverse is a new platform that allows gamers to create, share, and play games together.
          Using Metaverse's blockchain technology, players can track the ownership of in-game assets and items.
          This provides a safe and secure environment for players to engage in gaming activities without fear of cheating or theft.
        </p>
        
        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />

          </svg>

          <h6>Play to earn(P2E)</h6>

        </div>

        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />

          </svg>

          <h6>Player Vs Player(PvP)</h6>


        </div>

        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>

          <h6>Move to earn</h6>

        </div>
      </div>

      <div className={styles.gamemetaverserightdivwhichinnerimage}>
        <img src='Images/gamedevelopmentpage/Rectangle 18503.png' alt='imagegameer' />
      </div>

      <div className={styles.gamemetaverserightdivwhichinnerimagenext}>
        <img src='Images/gamedevelopmentpage/Rectangle 18504.png' alt='imagegameer' />
      </div>

    </div>
  )
}

