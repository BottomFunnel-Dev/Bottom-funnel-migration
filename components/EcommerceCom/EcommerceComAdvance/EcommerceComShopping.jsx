import React from "react";
import styles from "./EcommerceComShopping.module.css";

export const EcommerceComShopping = () => {
  let shoppingAppData = {
    backgroundImage: {
      src: "Images/EcommercePhotos/background-yellow.png",
      alt: "Shopping mobile app background image",
    },
    mainImage: {
      src: "Images/EcommercePhotos/shopping-app.png",
      alt: "Shopping mobile app main image",
    },
    cardsData: [
      {
        image: {
          src: "Images/EcommercePhotos/one.png",
          alt: "can be easily accessed through both android/ios",
        },
        description:
          "Registration process for vendors in an e-commerce website is getting tedious and time-consuming. With Easy Registration, you can automate the registration process for vendors in your website and make it easier for them to register on your site. ",
        title: "Easy Registration/Login",
      },
      {
        image: {
          src: "Images/EcommercePhotos/two.png",
          alt: "user-friendly interface logo",
        },
        description:
          "With easy product uploading, we have provided an easy way for vendors to upload their products and track sales on eCommerce platform! The code is clean and simple and won't slow down your website.",
        title: "Easy Product Uploading",
      },
      {
        image: {
          src: "Images/EcommercePhotos/three.png",
          alt: "Order food and track their service logo",
        },
        description:
          "With us, you can easily manage offers and discounts for customers in an ecommerce web app. Our team has years of experience in building e-commerce apps, which enables us to deliver high-quality software at affordable prices.",
        title: "Manage Offers & Discounts",
      },
      {
        image: {
          src: "Images/EcommercePhotos/four.png",
          alt: "Smart search and add-to-your-favorites list logo",
        },
        description:
          "We  provides a platform for vendors to manage their customers' orders and transactions in real time. With features like intelligent customer support, organization tools, and analytics.",
        title: "Order Management",
      },
      {
        image: {
          src: "Images/EcommercePhotos/five.png",
          alt: "Dummy text logo",
        },
        description:
          "It is important to have a user-friendly catalogue that makes sure that all information is displayed clearly. With our easy-to-use interface, you will be able to customize it as per your requirements.",
        title: "Manage Catalogue",
      },
      {
        image: {
          src: "Images/EcommercePhotos/six.png",
          alt: "Dummy text logo",
        },
        description:
          "We've got you covered with alerts that tell you when your favorite products are on sale, or which new arrivals have arrived in the store. With us you'll be prepared for every situation and know how to keep your customers happy!",
        title: "Notifications & Alerts",
      },
    ],
  };

  return (
    <div className={styles.eCommerceShoppingMain}>
      <div className={styles.eCommerceShoppingImagesMain}>
        <div>
          <img
            src={shoppingAppData.backgroundImage.src}
            alt={shoppingAppData.backgroundImage.alt}
            style={{ zIndex: "1" }}
          />
        </div>
        <div>
          <img
            src={shoppingAppData.mainImage.src}
            alt={shoppingAppData.mainImage.alt}
            style={{ zIndex: "4" }}
          />
        </div>
      </div>
      <div className={styles.eCommerceVendorPanelCardsMain}>
        <div>
          <h2>Vendor Panel</h2>
          <div>
            {shoppingAppData.cardsData.map(
              ({ description, image, title }, idx) => {
                return (
                  <div className={styles.eCommerceVendorPanelCards} key={idx}>
                    <div className={styles.eCommerceVendorPanelCardsLogo}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                    <div className={styles.eCommerceVendorPanelCardsContent}>
                      <h5>{title}</h5>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
