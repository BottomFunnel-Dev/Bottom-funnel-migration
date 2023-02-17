import Image from "next/image";
import React from "react";
import styles from "./EcommerceComAdminPanel.module.css";

export default function EcommerceComAdminPanel() {
  let adminPanelData = {
    backgroundImage: {
      src: "/Images/EcommercePhotos/background-blue.webp",
      alt: "admin panel background image",
    },
    mainImage: {
      src: "/Images/EcommercePhotos/admin-panel.webp",
      alt: "admin panel image",
    },
    cardsData: [
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "can be easily accessed through both android/ios",
        },
        description:
          "We provide best in class solutions to help you grow your business online. From analytics to marketing, we have it all covered. With our team of experts, we can create an e-commerce app that will boost your sales and profits.",
        title: "Dashboard Management",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "user-friendly interface logo",
        },
        description:
          "Using our user-friendly interface, you will be able to analyze everything about your app right on your fingertips. Data will be updated automatically every day with real time information about user engagement, transactions etc.",
        title: "Manage Users",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "Order food and track their service logo",
        },
        description:
          "When you're managing a large catalog of products, efficiency is key. From setting up product categories to installing integrations, we'll do everything we can to ensure your website runs smoothly and efficiently. ",
        title: "Manage Product Categories",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "Smart search and add-to-your-favorites list logo",
        },
        description:
          "We specialize in helping businesses with their e-commerce needs by providing a wide range of solutions that will help you track your sales effectively and efficiently. From marketing automation tools to site optimization services.",
        title: "Track Sales",
      },
    ],
  };

  return (
    <div className={styles.eCommerceAdminMain}>
      <div className={styles.eCommerceAdminCardsMain}>
        <div>
          <h2>Admin panel</h2>
          <div>
            {adminPanelData.cardsData.map(({ description, image, title }) => {
              return (
                <div className={styles.eCommerceAdminPanelCards} key={title}>
                  <div className={styles.eCommerceAdminPanelCardsContent}>
                    <div>
                      <div className={styles.eCommerceAdminPanelCardsLogo}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={"0"}
                          height={"0"}
                          sizes={"100vw"}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <h5>{title}</h5>
                    </div>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.eCommerceAdminImagesMain}>
        <div></div>
        <div>
          <Image
            src={adminPanelData.mainImage.src}
            alt={adminPanelData.mainImage.alt}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%", zIndex: "4" }}
          />
        </div>
      </div>
    </div>
  );
}
