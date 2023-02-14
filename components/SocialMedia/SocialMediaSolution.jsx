import React from "react";
import styles from "./SocialMediaSolution.module.css";
import Image from "next/image";

export const SocialMediaSolution = () => {
  return (
    <div className={styles.socialmediasolutionmaindiv}>
      <div className={styles.socialmediasolutiontextboxinupper}>
        <h1>Solution For Your Social Media Applications</h1>
        <h2>User Applications</h2>
      </div>
      <div className={styles.socialmediaspecialimagelongerforsolution}>
          <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src={"/Images/socialmedia/bannesbackground/Rectangle4383.webp"}
                alt="images"
              />
      
      </div>
      <div className={styles.socialmediahavingflexboxformobiletypeimage}>
        <div className={styles.socialmediasolutionmobileboxone}>
          <div className={styles.socialmediasolutionmobilebox}>
            <img
              src="Images/socialmedia/userappscreens/Inappchat.webp"
              alt="mobile"
            />
          </div>
          <div className={styles.socialmediasolutiontextbox}>
            <h4>In App Chat</h4>
            <p>
              We can easily integrate and create p2p messaging, chatbots, and
              chat ops on any of the leading social networks.
            </p>
          </div>
          <div className={styles.socialmediasolutionlogobox}>
            <img
              src="Images/socialmedia/icons/social-media-snapchat-original-latest-logo-free-vector.webp"
              alt="image"
            />
          </div>
        </div>

        <div className={styles.socialmediasolutionmobileboxtwo}>
          <div className={styles.socialmediamobilesolutionboxone}>
            <img
              src="Images/socialmedia/userappscreens/Feed.webp"
              alt="mobile"
            />
          </div>
          <div className={styles.socialmediatextsolutionboxone}>
            <h4>Feeds</h4>
            <p>
              Social media is a great way to connect with friends and share
              things that you love.
            </p>
          </div>
          <div className={styles.socialmedialogosolutionboxone}>
            <img src="Images/socialmedia/icons/unnamed.webp" alt="image" />
          </div>
        </div>

        <div className={styles.socialmediasolutionmobileboxthree}>
          <div className={styles.socialmediasolutionflexboximagethree}>
            <img
              src="Images/socialmedia/userappscreens/socialgroups.webp"
              alt="mobile"
            />
          </div>
          <div className={styles.socialmediasolutionflexboxtextthree}>
            <h4>Notification</h4>
            <p>
              It's like an app that shows you what people are saying about your
              favourite brand on social media.
            </p>
          </div>
          <div className={styles.socialmediasolutionflexboxlogothree}>
            <img src="Images/socialmedia/icons/logo.webp" alt="image" />
          </div>
        </div>

        <div className={styles.socialmediasolutionmobileboxfour}>
          <div className={styles.socialmediasolutionflexboximagefour}>
            <img
              src="Images/socialmedia/userappscreens/socialgroups.webp"
              alt="mobile"
            />
          </div>
          <div className={styles.socialmediasolutionflexboxtextfour}>
            <h4>Social Group</h4>
            <p>
              Social media has become the most preferred way to communicate with
              the people around you.
            </p>
          </div>
          <div className={styles.socialmediasolutionflexboxlogofour}>
            <img src="Images/socialmedia/icons/unnamed (1).webp" alt="image" />
          </div>
        </div>
      </div>
      <div className={styles.socialmediaouterliftimagelinewise}>
        <img
          src="Images/socialmedia/bannesbackground/Rectangle4383.webp"
          alt=""
        />
      </div>
    </div>
  );
};
