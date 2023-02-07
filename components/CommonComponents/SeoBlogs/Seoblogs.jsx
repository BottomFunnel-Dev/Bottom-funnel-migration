import Image from "next/image";
import React from "react";
import styles from "./Seoblogs.module.css";

export const SeoblogSection = () => {
  return (
    <div className={styles._Seoblogs12}>
      <h2>Latest Blogs</h2>
      <div className={styles._Seoblogs}>
        <div className={styles._Seoblogs1}>
          <div className={styles._Seoblogsimage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/blogSection/stories1.webp"
              alt="blogSection/stories1.webp"
            />
          </div>
          <div className={styles._Seoblogstext}>
            <p>How much does it cost to develop a mobile application</p>
            <p>
              The cost of developing a mobile application can vary depending on
              the size and scope of the project.{" "}
            </p>
          </div>
        </div>
        <div className={styles._Seoblogs1}>
          <div className={styles._Seoblogsimage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/blogSection/stories2.webp"
              alt="blogSection/stories2.webp"
            />
          </div>
          <div className={styles._Seoblogstext}>
            <p>How much does it cost to web development services</p>
            <p>
              Web development services can vary greatly in price, so it is
              important to do your research before making a decision.
            </p>
          </div>
        </div>
        <div className={styles._Seoblogs1}>
          <div className={styles._Seoblogsimage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/blogSection/stories5.webp"
              alt="blogSection/stories5.webp"
            />
          </div>
          <div className={styles._Seoblogstext}>
            <p>
              Grab world best digital marketers for all your marketing needs
            </p>
            <p>
              If you're looking for a reliable and affordable digital marketing
              team, then you should consider hiring world best digital
              marketers.
            </p>
          </div>
        </div>
        <div className={styles._Seoblogs1}>
          <div className={styles._Seoblogsimage}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/blogSection/stories4.webp"
              alt="blogSection/stories4.webp"
            />
          </div>
          <div className={styles._Seoblogstext}>
            <p>
              How much does it cost for UI UX designers for any technical
              product.
            </p>
            <p>
              A typical fee for a UI UX designer ranges between $60 and $120 per
              hour, depending on the level of expertise required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
