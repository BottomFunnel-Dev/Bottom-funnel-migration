import React from "react";
import styles from "./EcommerceComAdminPanel.module.css";

export const EcommerceComAdminPanel = () => {
  let adminPanelData = {
    backgroundImage: {
      src: "Images/EcommercePhotos/background-blue.png",
      alt: "admin panel background image",
    },
    mainImage: {
      src: "Images/EcommercePhotos/admin-panel.png",
      alt: "admin panel image",
    },
    cardsData: [
      {
        image: {
          src: "Images/EcommercePhotos/one.png",
          alt: "can be easily accessed through both android/ios",
        },
        description:
          "We provide best in class solutions to help you grow your business online. From analytics to marketing, we have it all covered. With our team of experts, we can create an e-commerce app that will boost your sales and profits.",
        title: "Dashboard Management",
      },
      {
        image: {
          src: "Images/EcommercePhotos/two.png",
          alt: "user-friendly interface logo",
        },
        description:
          "Using our user-friendly interface, you will be able to analyze everything about your app right on your fingertips. Data will be updated automatically every day with real time information about user engagement, transactions etc.",
        title: "Manage Users",
      },
      {
        image: {
          src: "Images/EcommercePhotos/three.png",
          alt: "Order food and track their service logo",
        },
        description:
          "When you're managing a large catalog of products, efficiency is key. From setting up product categories to installing integrations, we'll do everything we can to ensure your website runs smoothly and efficiently. ",
        title: "Manage Product Categories",
      },
      {
        image: {
          src: "Images/EcommercePhotos/four.png",
          alt: "Smart search and add-to-your-favorites list logo",
        },
        description:
          "We specialize in helping businesses with their e-commerce needs by providing a wide range of solutions that will help you track your sales effectively and efficiently. From marketing automation tools to site optimization services.",
        title: "Track Sales",
      },
      {
        image: {
          src: "Images/EcommercePhotos/five.png",
          alt: "Dummy text logo",
        },
        description:
          "We provide solutions that help brands in growing their business and expanding the market by offering complete visibility in terms of promotions, discounts, and loyalty programs.",
        title: "Manage Promotions & Rewards",
      },
      {
        image: {
          src: "Images/EcommercePhotos/six.png",
          alt: "Dummy text logo",
        },
        description:
          "We provides you with a content management system that will enable you to save and organize any information about your online business. With this powerful toolset at your disposal, you'll never have to worry about losing critical data.",
        title: "Content Management System",
      },
    ],
  };

  return (
    <div className={styles.eCommerceAdminMain}>
      <div className={styles.eCommerceAdvanceCardsMain}>
        <div>
          <h2>Admin panel</h2>
          <div>
            {adminPanelData.cardsData.map(({ description, image, title }) => {
              return (
                <div className={styles.eCommerceAdvanceCards}>
                  <div className={styles.eCommerceAdvanceCardsLogo}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                  <div className={styles.eCommerceAdvanceCardsContent}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.eCommerceAdminImagesMain}>
        <div>
          <img
            src={adminPanelData.backgroundImage.src}
            alt={adminPanelData.backgroundImage.alt}
            style={{ zIndex: "1" }}
          />
        </div>
        <div>
          <img
            src={adminPanelData.mainImage.src}
            alt={adminPanelData.mainImage.alt}
            style={{ zIndex: "4" }}
          />
        </div>
      </div>
    </div>
  );
};
