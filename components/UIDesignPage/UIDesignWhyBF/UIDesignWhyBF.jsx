import Image from "next/image";
import React from "react";
import styles from "./UIDesignWhyBF.module.css";

export const UIDesignWhyBF = () => {
  return (
    <div className={styles.UIDesignWhyBFcontainer}>
      <h1>
        What we do at <span>Bottom Funnel</span>
      </h1>
      <p>
        Our experienced team of design strategists visualizes creative ideas and
        transforms them into the client's final design. They dig deep and design
        a visual language that users can understand.
      </p>
      <div className={styles.UIDesignWhyBFmain}>
        <div className={styles.UIDesignWhyBFimages}>
          <div>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/UIDesignPhotos/phone.webp"
              alt="phone.webp"
            />
          </div>
          <div>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/UIDesignPhotos/macbook.webp"
              alt="macbook.webp"
            />
          </div>
          <div>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/UIDesignPhotos/designing.webp"
              alt="designing.webp"
            />
          </div>
        </div>
        <ul>
          <li>
            <span>Business discovery</span> and user research
          </li>
          <li>
            <span>Product</span> and marketing UX strategy
          </li>
          <li>
            <span>User interface</span> and visual design
          </li>
          <li>
            <span>Front-end engineering</span> and platform integration
          </li>
          <li>
            <span>Usability</span> testing and analytics
          </li>
          <li>
            <span>Design sprints</span> and prototyping
          </li>
          <li>
            <span>Customer journey</span> mapping
          </li>
          <li>
            <span>UX</span> Workshops
          </li>
        </ul>
      </div>
    </div>
  );
};
