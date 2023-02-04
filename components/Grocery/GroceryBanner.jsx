import React from "react";
import styles from "./groceryBanner.module.css";
import * as reactAnimation from "../../public/Animation/SolutionsAnimation/Grocery.json";
import Lottie from "react-lottie";

const GroceryBanner = () => {

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.grocerybanner}>
      <div className={styles.groceryText}>
        <div>
          <h1>Grocery App Solutions</h1>
          <p>
            Provide services to your customers at the comfort of their home with
            an app! Boost efficiency and drive more business with our
            industry-leading on demand home services app development services.
          </p>
          <button>Get Started </button>
        </div>
      </div>

      <div className={styles.groceryImage}>
        <Lottie options={lottieDefaultOptions} width={700} height={500} />
      </div>
      {/* <div className={styles.groceryImage}>
        <div className={styles.mainPhone}>
          <img src="Images/grocery/banner.png" alt="image" />
        </div>
        <div className={styles.groceryback}></div>
        
        <div className={styles.zomatoimg}>
          <img src="Images/grocery/zomato.png" alt="image" />
        </div>

        <div className={styles.dunzoimg}>
          <img src="Images/grocery/dunzo.png" alt="image" />
        </div>

        <div className={styles.dealimg}>
          <img src="Images/grocery/dealshare.png" alt="image" />
        </div>

        <div className={styles.bundleimg}>
          <img src="Images/grocery/bundle.png" alt="image" />
        </div>

        <div className={styles.blinkitimg}>
          <img src="Images/grocery/blinkit.png" alt="image" />
        </div>
        <div className={styles.jumiaimg}>
          <img src="Images/grocery/jumia.png" alt="image" />
        </div>
      </div> */}
    </div>
  );
};

export default GroceryBanner;
