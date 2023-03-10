import Image from "next/image";
import React from "react";
import styles from "./BenifitsofProduct.module.css";

export const BenifitsofProduct = () => {
  return (
    <div className={styles.BenifitsofProductmaindiv}>
      <hr />
      <div className={styles.BenifitsofProductcontain}>
        <h2>Banefits of running a Design Sprint</h2>
        <p>
          We are one those travel mobile app development companies that know the
          defference between must have and decorative mobile travel app
          features.
        </p>
      </div>
      <div className={styles.BenifitsofProductcontaincolum}>
        <div className={styles.BenifitsofProductimagediv}>
          <div className={styles.BenifitsofProductimagedivlogo}>
            <div className={styles.BenifitsofProductlogo}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="/Images/Productdiscoveryphotos/prototyping.webp"
                alt="Productdiscoveryphotos/prototyping.webp"
              />
            </div>
            <div className={styles.BenifitsofProductlogo1}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="/Images/Productdiscoveryphotos/prototyping-1.webp"
                alt="Productdiscoveryphotos/prototyping-1.webp"
              />
            </div>
            <div className={styles.BenifitsofProductlogo2}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="/Images/Productdiscoveryphotos/prototyping-2.webp"
                alt="Productdiscoveryphotos/prototyping-2.webp"
              />
            </div>
            <div className={styles.BenifitsofProductlogo3}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src="/Images/Productdiscoveryphotos/prototyping-3.webp"
                alt="Productdiscoveryphotos/prototyping-3.webp"
              />
            </div>
          </div>
          <div className={styles.BenifitsofProductcontainoflogo}>
            <div className={styles.BenifitsofProductcontaininner}>
              <h5>Sets well defined goals</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati itaque praesentium, quis fuga ipsam voluptatum
                voluptates maxime, .
              </p>
            </div>
            <div className={styles.BenifitsofProductcontaininner1}>
              <h5>Sets well defined goals</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati itaque praesentium, quis fuga ipsam voluptatum
                voluptates maxime .
              </p>
            </div>
            <div className={styles.BenifitsofProductcontaininner2}>
              <h5>Sets well defined goals</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati itaque praesentium, quis fuga ipsam voluptatum
                voluptates maxime,.
              </p>
            </div>
            <div className={styles.BenifitsofProductcontaininner3}>
              <h5>Sets well defined goals</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati itaque praesentium, quis fuga ipsam voluptatum
                voluptates maxime, .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
