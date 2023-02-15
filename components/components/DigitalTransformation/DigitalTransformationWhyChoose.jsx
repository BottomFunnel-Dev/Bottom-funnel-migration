import Image from "next/image";
import React from "react";
import styles from "./DigitalTransformationWhyChoose.module.css";

export const DigitalTransformationWhyChoose = () => {
  const digitatransformationwhychoosedata = [
    {
      htxt: " Flexible engagement",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis orci sed justo volutpat interdum sit amet in metus. Nam at pellentesque ligula. Donec fermentum non erat id vulputate. Nullam condimentum tellus aliquet diam fringilla, a convallis ex suscipit. Nulla at diam ultricies, sollicitudin nibh vel, tincidunt dui. Nullam vehicula velit ac porttitor condimentum.",
      icons: "/Images/digitaltransformation/Curved Arrow.webp",
    },

    {
      htxt: "Experienced and talented team",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis orci sed justo volutpat interdum sit amet in metus. Nam at pellentesque ligula. Donec fermentum non erat id vulputate. Nullam condimentum tellus aliquet diam fringilla, a convallis ex suscipit. Nulla at diam ultricies, sollicitudin nibh vel, tincidunt dui. Nullam vehicula velit ac porttitor condimentum.",
      icons: "/Images/digitaltransformation/Team.webp",
    },

    {
      htxt: " we are always here for you",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis orci sed justo volutpat interdum sit amet in metus. Nam at pellentesque ligula. Donec fermentum non erat id vulputate. Nullam condimentum tellus aliquet diam fringilla, a convallis ex suscipit. Nulla at diam ultricies, sollicitudin nibh vel, tincidunt dui. Nullam vehicula velit ac porttitor condimentum.",
      icons: "/Images/digitaltransformation/support.webp",
    },

    {
      htxt: "Integrity and transparency",
      stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis orci sed justo volutpat interdum sit amet in metus. Nam at pellentesque ligula. Donec fermentum non erat id vulputate. Nullam condimentum tellus aliquet diam fringilla, a convallis ex suscipit. Nulla at diam ultricies, sollicitudin nibh vel, tincidunt dui. Nullam vehicula velit ac porttitor condimentum.",
      icons: "/Images/digitaltransformation/Agile Iteration.webp",
    },
  ];

  return (
    <div className={styles.digitaltransformationwhychoosemainboxes}>
      <h1>
        But, Why You Should Consider{" "}
        <span className={styles.specialcolor}>Bottom Funnel</span> for your
        project
      </h1>
      <div className={styles.whychoosebottomfunnelflexbox}>
        <div className={styles.whychoosebottomfunnelflexboxleftbox}>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/digitaltransformation/why choose us 1 1.webp"
            alt="whychoose"
          />
        </div>
        <div className={styles.whychoosebottomfunnelflexboxrightbox}>
          {digitatransformationwhychoosedata.map((e) => {
            return (
              <div
                className={
                  styles.whychoosebottomfunnelindivisuallymapppingboxes
                }
              >
                <div
                  className={
                    styles.whychoosebottomfunnelindivisuallymapppingboxesforlogo
                  }
                >
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "fit-content" }}
                    src={e.icons}
                    alt="logo"
                  />
                </div>
                <div
                  className={
                    styles.whychoosebottomfunnelindivisuallymapppingboxesfortxt
                  }
                >
                  <h4>{e.htxt}</h4>
                  <p>{e.stxt}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
