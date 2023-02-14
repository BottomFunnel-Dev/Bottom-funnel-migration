import Image from "next/image";
import React from "react";
import styles from "./Grow.module.css";

export default function Grow() {
  return (
    <div className={styles.grow}>
      <h1>We help you grow</h1>
      <div className={styles.growdiv}>
        <div className={styles.growmobile}>
          <div className={styles.growmobileimage}>
            <Image
              src={"/Images/Videostreaming/newmoviesimage.webp"}
              alt={"Image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        <div className={styles.growtext}>
          <div>
            <h2>Best Shows</h2>
            <p>
              There are a lot of great shows to watch these days, but which are
              the best? That's a difficult question to answer. It really depends
              on what you're looking for in a show. Some people prefer reality
              TVshows like "The Voice" or "Dancing with the Stars", while others
              enjoy dramas like "Game of Thrones" or comedies like "Girls".
            </p>
            <div className={styles.szbtnget}>
              <p>Get Started </p>
              <div className={styles.szstarticon}>
                <Image
                  src={"/Images/Videostreaming/Arrow.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
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
              There is no doubt that optimizing for growth is one of the most
              important aspects of digital marketing. If you want your business
              to grow, you need to make sure that your online presence is
              well-optimized and able to attract more visitors and customers.
              There are a number of strategies that can be used in order to
              achieve this goal, and each has its own benefits and drawbacks.
            </p>
            <div className={styles.szbtnget}>
              <p>Get Started </p>
              <div className={styles.szstarticon}>
                <Image
                  src={"/Images/Videostreaming/Arrow.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.optimizeimage}>
          <div className={styles.crown}>
              <Image
                src={"/Images/Videostreaming/tvapp.webp"}
                alt={"Image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
          </div>
        </div>
      </div>

      {/* //////////////////mobile/////////// */}

      <div className={styles.growdiv}>
        <div className={styles.starwars}>
          <div className={styles.starwarimage}>
             <Image
                src={"/Images/Videostreaming/starwars.webp"}
                alt={"Image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
          </div>
        </div>

        <div className={styles.starwartext}>
          <div>
            <h1>Monetize your way</h1>
            <p>
              There are a variety of methods that businesses can use to monetize
              their content. Some popular approaches include charging for access
              to your content, selling advertising space on your site, and
              charging users for premium services such as consulting or
              training.
            </p>

            <div className={styles.szbtnget}>
              <p>Get Started </p>
              <div className={styles.szstarticon}>
              <Image
                src={"/Images/Videostreaming/Arrow.webp"}
                alt={"Image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
