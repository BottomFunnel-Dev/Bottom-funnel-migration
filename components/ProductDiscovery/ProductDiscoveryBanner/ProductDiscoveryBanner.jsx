import Image from "next/image";
import React from "react";
import styles from "./ProductDiscoveryBanner.module.css";

export const ProductDiscoveryBanner = () => {
  return (
    <div>
      <div className={styles.ProductDiscoveryBannermaindiv}>
        <div className={styles.ProductDiscoveryBannercontain}>
          <h1>
            <span>Product Design</span> Sprint
          </h1>
          <p>
            Product design sprint is to evaluate and prioritize the core
            features of your product. Sprint is a time boxed exercise, where
            we'll act quickly to explore how to create a better user experience
            for your product.
          </p>
          <div>
            <button className={styles.ProductDiscoveryBannerbutton}>
              Get Started
            </button>
          </div>
        </div>
        <div className={styles.ProductDiscoveryBannerimage}>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/Productdiscoveryphotos/productbannerg.webp"
            alt="Productdiscoveryphotos/productbannerg.webp "
          />
        </div>
      </div>
    </div>
  );
};
