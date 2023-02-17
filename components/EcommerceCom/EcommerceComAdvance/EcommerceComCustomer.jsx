import Image from "next/image";
import React from "react";
import styles from "./EcommerceComCustomer.module.css";

export default function EcommerceComCustomer() {
  let customerAppData = {
    backgroundImage: {
      src: "/Images/EcommercePhotos/background-orange.webp",
      alt: "Shopping mobile app background image",
    },
    mainImage: {
      src: "/Images/EcommercePhotos/customer-app.webp",
      alt: "Shopping mobile app main image",
    },
    cardsData: [
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "can be easily accessed through both android/ios",
        },
        description:
          "Sorting and filtering products in Ecommerce can be time-consuming. That's why we've created Ecommerce Filtering & Sorting, an efficient solution that makes it easier than ever to find the right products.",
        title: "Product Filtering & Sorting",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "user-friendly interface logo",
        },
        description:
          "With shipment tracking in Ecommerce apps, you can now do just that! With the latest technology and best-in-class services, we can help you track packages on your website or mobile app.",
        title: "Shipment Tracking",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "Order food and track their service logo",
        },
        description:
          "With our e-commerce web app, you can offer your customers a wide range of payment methods right on your website. Our friendly support team is always available to help you make the most out of your online store.",
        title: "Multiple Payment Options",
      },
      {
        image: {
          src: "/Images/EcommercePhotos/icons/checkmark.webp",
          alt: "Smart search and add-to-your-favorites list logo",
        },
        description:
          "Push notification is easy to integrate and will help turn visitors into buyers. Make sure that all visitors are informed about new products and promotions available at the store they like most.",
        title: "Push Notification",
      },
    ],
  };

  return (
    <div className={styles.eCommerceCustomerAppMain}>
      <h1>
        SOLUTIONS FOR YOUR <span> E-COMMERCE APP </span>
      </h1>
      <div className={styles.eCommerceCustomerMain}>
        <div className={styles.eCommerceCustomerImagesMain}>
          <div></div>
          <div>
            <Image
              src={customerAppData.mainImage.src}
              alt={customerAppData.mainImage.alt}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%", zIndex: "4" }}
            />
          </div>
        </div>
        <div className={styles.eCommerceCustomerAppCardsMain}>
          <div>
            <h2>Customer app</h2>
            <div>
              {customerAppData.cardsData.map(
                ({ description, image, title }) => {
                  return (
                    <div
                      key={title}
                      className={styles.eCommerceCustomerAppCards}
                    >
                      <div className={styles.eCommerceCustomerAppCardsContent}>
                        <div>
                          <div className={styles.eCommerceCustomerAppCardsLogo}>
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
    </div>
  );
}
