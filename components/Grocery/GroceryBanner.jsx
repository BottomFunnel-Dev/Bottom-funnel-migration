import React from "react";
import styles from "./groceryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Grocery.json";
import { Player } from "@lottiefiles/react-lottie-player";

const GroceryBanner = () => {
  return (
    <div className={styles.grocerybanner}>
      <div className={styles.groceryText}>
        <div>
          <h1> Grocery App Solutions </h1>
          <p>
            Provide services to your customers at the comfort of their home with
            an app! Boost efficiency and drive more business with our
            industry-leading on demand home services app development services.
          </p>
          <button> Get Started </button>
        </div>
      </div>

      <div className={styles.groceryImage}>
        <Player className={styles.groceryBannerAnimation}
          src={reactAnimation}
          background="transparent"
          speed="1"
          loop
          controls
          autoplay
        ></Player>
      </div>
    </div>
  );
};

export default GroceryBanner;
