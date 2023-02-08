import Image from "next/image";
import React from "react";
import styles from "./UXDesignWhyBF.module.css";

export const UXDesignWhyBF = () => {
  return (
    <div className={styles.UXDesignWhyBFcontainer}>
      <h1>
        What we do at <span>Bottom Funnel</span>
      </h1>
      <p>
        Our experienced team of design strategists visualizes creative ideas and
        transforms them into the client's final design. They dig deep and design
        a visual language that users can understand.
      </p>
      <div>
        <hr />
        <div className={styles.UXDesignWhyBFmain}>
          <div className={styles.UXDesignWhyBFimages}>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="/Images/UXDesignPhotos/study.webp"
                alt="phone.webp"
              />
            </div>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="/Images/UXDesignPhotos/teaching.webp"
                alt="macbook.webp"
              />
            </div>
            <div>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="/Images/UXDesignPhotos/layout.webp"
                alt="designing.webp"
              />
            </div>
          </div>
          <ul>
            <li>
              With <span>design interventions</span> addressing key challenges
              of our clients, we have developer a way of working that is
              strategic, creative & technical at the same time.
            </li>
            <li>
              Our <span>Product</span> encourage a solutions-based approach to
              solving problems.
            </li>
            <li>
              It cuts the <span>User interface</span>, Controls the bigh egos in
              the room and gives space to shy people to express their ideas.
            </li>
            <li>
              Our workshops are the <span>best in every way</span>, Budget
              friendly, Various time zones and flexible hours.
            </li>
          </ul>
        </div>
      </div>
      <h2>Check our Design Workshop Now -</h2>
    </div>
  );
};
