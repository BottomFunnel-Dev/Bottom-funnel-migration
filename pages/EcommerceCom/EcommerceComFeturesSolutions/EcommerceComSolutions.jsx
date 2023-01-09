import React from "react";
import styles from "./EcommerceComFeatures.module.css";

export const EcommerceComSolutions = () => {
  var featureCardsData = {
    title: "Solutions",
    description:
      "With the development of an online presence and an app, your customers can have access to all your products without leaving home. And we know how important it is for them to get their desired products quickly and easily.",
    CardsData: [
      {
        title: "Jewellery Stores",
        desc: "We have transformed various jewellery stores to online platforms. Now, you can get the best in jewelry without paying extra. Our users are satisfied with our designs and quality. Plus, they love getting new pieces every now and then from our store. ",
      },
      {
        title: "Fashion Brands",
        desc: "We've helped a number of fashion retailers and brands build brand awareness and boost sales by launching an effective e-commerce app that works in today's fast paced world. We understand what it takes to make your online store stand out from the crowd, so get in touch today!",
      },
      {
        title: "Electronics Stores",
        desc: "launch your own brand of electronics, computer accessories or digital gear. By using the power of a world-class website and app development team, we help you take your business to the next level. You can now reach out to a wider audience and provide them easy access to your products and services."
      },
      {
        title: "Pharmacy Stores",
        desc: "With our extensive experience, we will help you build an online pharmacy store that caters to the needs of your customers. We ensure that your store is always up and running smoothly. Our app development team includes experts in software, website design, and marketing as well. "
      },
      {
        title: "Grocery Stores",
        desc: "We offer a full range of online grocery and food delivery services, so you can expand your business without missing a beat. And with our cutting-edge technologies and world-class infrastructure, we're confident that your online presence will be as seamless as possible."
      },
      {
        title: "Furniture Stores",
        desc: "Furniture stores are no more a thing of your past. Today, you can easily turn your offline furniture store into an online one with Us. Our app is designed keeping in mind the requirements of people who want to do their business on the go and across different platforms like Android and iOS devices."
      },
    ],
  };

  return (
    <div className={styles.eCommerceFeatsolMain}>
      <div className={styles.eCommerceFeatsolContent}>
        <h1>{featureCardsData.title}</h1>
        <p>{featureCardsData.description}</p>
      </div>
      <div className={styles.eCommerceFeatsolCardsMain}>
        {featureCardsData.CardsData.map(({ title, image, desc }, idx) => {
          return (
            <div key={idx}>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
