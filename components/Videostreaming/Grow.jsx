import React from 'react';
import styles from "./Grow.module.css";

export default function Grow() {
  return (
    <div className={styles.grow} >
      <h1>We help you grow</h1>
      <div className={styles.growdiv}>

        <div className={styles.growmobile}>
          <div className={styles.growmobileimage}>
            <img src="Images/Videostreaming/newmoviesimage.png" alt='image' />
          </div>
        </div>

        <div className={styles.growtext}>
          <div>
            <h2>Best Shows</h2>
            <p>
              There are a lot of great shows to watch these days, but which are the best? That's a difficult question to answer.
              It really depends on what you're looking for in a show. Some people prefer reality TVshows like "The Voice" or
              "Dancing with the Stars", while others enjoy dramas like "Game of Thrones" or comedies like "Girls".
            </p>
            <div className={styles.szbtnget}>
              <p>Get Started </p>
              <div className={styles.szstarticon}>
                <img src="Images/Videostreaming/Arrow.png" alt='image' />
              </div>
            </div>
          </div>
        </div>


      </div>
      {/* //////////tab//////////// */}
      <div className={styles.growdiv}>

        <div className={styles.optimizetext}>
          <div>
            <h1>Optimized for growth </h1>
            <p>
              There is no doubt that optimizing for growth is one of the most important aspects of digital marketing.
              If you want your business to grow, you need to make sure that your online presence is well-optimized and
              able to attract more visitors and customers. There are a number of strategies that can be used in order to
              achieve this goal, and each has its own benefits and drawbacks.
            </p>
            <div className={styles.szbtnget}>
              <p>Get Started </p>
              <div className={styles.szstarticon}>
                <img src="Images/Videostreaming/Arrow.png" alt='image' />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.optimizeimage}>
          <div className={styles.crown}>
            <img src="Images/Videostreaming/tvapp.png" alt='image' />
          </div>
        </div>
      </div>

      {/* //////////////////mobile/////////// */}

      <div className={styles.growdiv}>
        <div className={styles.starwars}>
          <div className={styles.starwarimage}>
            <img src="Images/Videostreaming/starwars.png" alt='image' />
          </div>
        </div>

        <div className={styles.starwartext}>
          <div>
            <h1>Monetize your way</h1>
            <p>
              There are a variety of methods that businesses can use to monetize their content.
              Some popular approaches include charging for access to your content, selling
              advertising space on your site, and charging users for premium services such as consulting or training.
            </p>

            <div className={styles.szbtnget}>
              <p>Get Started </p>
              <div className={styles.szstarticon}>
                <img src="Images/Videostreaming/Arrow.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
