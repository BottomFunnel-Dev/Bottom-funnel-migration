import React from "react";
import styles from "./WhyChooseIonic.module.css";
import Image from "next/image";

export const WhyChooseIonic = () => {

  return (
    <>
      <div className={styles.whyChooseIonicMainDiv}>
        <div className={styles.whyChooseIonicContentText}>
          <h1>Why You Must Choose Ionic For Cross-Platform App Development </h1>
          <p>
            One of the best reasons to choose Ionic is if you’re a web developer and want to stay in the web development world.
            The Ionic stack is built on standard web development technologies meaning you can build the majority of your app directly
            in a browser and use standard browser development tools and technologies, while still deploying and building a traditional native app.
            Other cross-platform toolkits don’t use the web development stack so aren’t the best fit for web developers.
          </p>
        </div>

        <div className={styles.whyChooseIonicContentImage}>
            <Image
                src={"/Images/IonicAppDevelopment/IonicWhyChoose.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
      </div>
    </>
  );
};
