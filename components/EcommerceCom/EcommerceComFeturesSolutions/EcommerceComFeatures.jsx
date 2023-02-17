import Image from "next/image";
import React from "react";
import styles from "./EcommerceComFeatures.module.css";

export default function EcommerceComFeatures() {
  var featureCardsData = {
    title: "Features",
    description: `Do you want to conquer the ecommerce market? Then, you have to have a complete suite of features that make your website more user-friendly and appealing.
      Ecommerce web development provides everything you need in one place. Our advanced features will help your customers find what they're looking for easily, while our convenient admin panel makes it easy for you to manage everything.`,
    CardsData: [
      {
        image: "/Images/EcommercePhotos/icons/maps.webp",
        title: `Store Locator`,
        description:
          "Finding a product you want at the best price online is easy with ecommerce. The Store Locator feature provides you with all the information you need to find stores that sell your favorite products. You can view item availability, prices, and store details from one convenient location.",
      },
      {
        image: "/Images/EcommercePhotos/icons/telephone.webp",
        title: `Click to Call`,
        description:
          "Looking for ecommerce website development services? With our extensive experience and expertise, you can be sure that we will deliver a top-notch product that will be able to stand up against other leading players in the field. Contact us today so we can get started on your project!",
      },
      {
        image: "/Images/EcommercePhotos/icons/cart.webp",
        title: "Click and Collect Option",
        description:
          "You can now order your products online and pick them up in store. It is a great way to save time and money, as you don't have to pay for delivery. We have a wide range of products that are perfect for anyone's needs.",
      },
      {
        image: "/Images/EcommercePhotos/icons/gift.webp",
        title: "Loyalty Programs",
        description:
          "Our team of experts is here to help with every step of the process so that your online store runs as smoothly as possible from day one. We specialize in developing fully-functional ecommerce sites that are tailored specifically for your needs and can handle any potential spikes in traffic or drop offs",
      },
      {
        image: "/Images/EcommercePhotos/icons/payment.webp",
        title: "Varied Payment Gateways",
        description:
          "Creating a payment gateway for your e-commerce website is an important step to take. From traditional methods such as credit cards and PayPal, to newer options like Apple Pay, Android Pay, and more, we have you covered.",
      },
      {
        image: "/Images/EcommercePhotos/icons/secure.webp",
        title: "Easy Zoom in and out",
        description:
          "With Easy Zoom in and out, you can browse through thousands of products with ease. You will never miss out on a single thing while browsing online. Let's make your online experience more convenient with ecommerce web development!",
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
        {featureCardsData.CardsData.map(
          ({ image, title, description }, idx) => {
            return (
              <div key={idx}>
                <div>
                  <span>
                    <Image
                      src={image}
                      alt={image}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </span>
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
