import Image from "next/image";
import React from "react";
import styles from "./EcommerceComShopping.module.css";

export default function EcommerceComShopping() {
  let shoppingAppData = {
    backgroundImage: {
      src: "/Images/EcommercePhotos/background-yellow.webp",
      alt: "Shopping mobile app background image",
    },
    mainImage: {
      src: "/Images/EcommercePhotos/shopping-app.webp",
      alt: "Shopping mobile app main image",
    },
    cardsData: [
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "can be easily accessed through both android/ios",
        },
        description:
          "Registration process for vendors in an e-commerce website is getting tedious and time-consuming. With Easy Registration, you can automate the registration process for vendors in your website and make it easier for them to register on your site. ",
        title: "Easy Registration/Login",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "user-friendly interface logo",
        },
        description:
          "With easy product uploading, we have provided an easy way for vendors to upload their products and track sales on eCommerce platform! The code is clean and simple and won't slow down your website.",
        title: "Easy Product Uploading",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "Order food and track their service logo",
        },
        description:
          "With us, you can easily manage offers and discounts for customers in an ecommerce web app. Our team has years of experience in building e-commerce apps, which enables us to deliver high-quality software at affordable prices.",
        title: "Manage Offers & Discounts",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "Smart search and add-to-your-favorites list logo",
        },
        description:
          "We  provides a platform for vendors to manage their customers' orders and transactions in real time. With features like intelligent customer support, organization tools, and analytics.",
        title: "Order Management",
      },
    ],
  };

  return (
    <div className={styles.eCommerceShoppingMain}>
      <div className={styles.eCommerceShoppingImagesMain}>
        <div></div>
        <div>
          <Image
            src={shoppingAppData.mainImage.src}
            alt={shoppingAppData.mainImage.alt}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%", zIndex: "4" }}
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
                    <div className={styles.eCommerceVendorPanelCardsContent}>
                      <div>
                        <div className={styles.eCommerceVendorPanelCardsLogo}>
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
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
