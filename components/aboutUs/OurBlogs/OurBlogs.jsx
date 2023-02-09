import React from "react";
import styles from "./OurBlogs.module.css";
import Image from "next/image";

export const OurBlogs = () => {
  const cardsData = [
    {
      title: "How much does it cost to develop a mobile application",
      body: "The cost of developing a mobile application can vary depending on the size and scope of the project.",
      image: "/Images/aboutusImage/explaining.webp",
      date: "Nov 21st, 2022",
    },
    {
      title: "How much does it cost to web development services",
      body: "Web development services can vary greatly in price, so it is important to do your research before making a decision.",
      image: "/Images/aboutusImage/talking.webp",
      date: "Nov 21st, 2022",
    },
    {
      title: "Grab world best digital marketers for all your marketing needs",
      body: "If you're looking for a reliable and affordable digital marketing team, then you should consider hiring world best digital marketers.",
      image: "/Images/aboutusImage/meeting.webp",
      date: "Nov 21st, 2022",
    },
  ];
  return (
    <div className={styles.OurBlogscontainer}>
      <h1>
        Our Latest <span>Blog</span> Posts
      </h1>
      <p>
        Bottom Funnel's blog is a repository of information on a wide range of
        topics. It offers an insight into different cultures and lifestyles,
        from food to fashion and music, in addition to useful travel tips for
        travelers.
      </p>

      <div className={styles.OurBlogsmain}>
        {cardsData.map(({ title, body, image, date }, idx) => {
          return (
            <div className={styles.OurBlogscardsmain} key={idx}>
              <div className={styles.OurBlogscardsimage}>
                {/* <img src={image} alt={title} /> */}
                <Image
                  src={image}
                  alt={title}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h2>{title}</h2>
              <p>{body}</p>
              <div className={styles.OurBlogscarddatemore}>
                <p>{date}</p>
                <p style={{ color: "#ef4c23" }}>Read More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
