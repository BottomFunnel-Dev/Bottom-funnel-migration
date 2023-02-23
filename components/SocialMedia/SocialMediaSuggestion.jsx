import React from "react";
import styles from "./SocialMediaSuggestion.module.css";
import Image from "next/image";

export default function SocialMediaSuggestion() {
  const socialmediasuggestiondata = [
    {
      logo: "/Images/socialmedia/bannesbackground/Socialtreecuate2.webp",
      htxt: "Social networks",
      stxt: "With brand new features and updates every now and then, this app keeps getting better and better. It is finally catching up with its competitors in terms of user experience and reliability. Takes texting to a whole new level with Social networks.",
    },

    {
      logo: "/Images/socialmedia/bannesbackground/6240060 2.webp",
      htxt: "Media Sharing Networks",
      stxt: "Media sharing networks give you an easy way to share your favorite photos and videos from your smartphone or tablet. You can also find a group of people who love the same things as you do and create a tribe of like-minded individuals for life long friendship.",
    },

    {
      logo: "/Images/socialmedia/bannesbackground/8454 3.webp",
      htxt: "Discussion Forums",
      stxt: "The world is changing at a rapid pace and so are the ways we use technology to interact with it. Today, news and information come in a form of a social media post or an update from your preferred messaging app. You'll find something that interests you on this forum.",
    },

    {
      logo: "/Images/socialmedia/bannesbackground/8454 4.webp",
      htxt: "eCommerce Networks",
      stxt: "Online shopping can be a fun and exciting experience, but it can also be confusing. That's why it's important to use services like eCommerce Networks that help you find the best products and services online. Our team is to help you find products that are right for you.",
    },
  ];

  return (
    <div className={styles.SocialMediaSuggestionmainboxes}>
      <div className={styles.socialmediasuggestionmainboxfortext}>
        <h1>APP SUGGESTIONS FOR DIFFERENT SOCIAL MEDIA APPLICATION</h1>
        <p>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis
            dui non augue rutrum, eu fringilla ante ultrices. Praesent id est
            porttitor
          </small>
        </p>
      </div>

      <div className={styles.socialmediaflexingbox}>
        {socialmediasuggestiondata.map((e) => {
          return (
            <div className={styles.socialmediaaftermappingbox}>
              <div className={styles.logodivforsocialmediasuggestion}>
                <Image
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  src={e.logo}
                  alt="images"
                />
              </div>
              <div>
                <h4>{e.htxt}</h4>
              </div>
              <div>
                <p>{e.stxt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
