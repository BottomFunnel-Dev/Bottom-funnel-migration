import React from "react";
import styles from "./EcommerceComCustomer.module.css";

export const EcommerceComCustomer = () => {
  let customerAppData = {
    backgroundImage: {
      src: "/Images/EcommercePhotos/background-orange.png",
      alt: "Shopping mobile app background image",
    },
    mainImage: {
      src: "/Images/EcommercePhotos/customer-app.png",
      alt: "Shopping mobile app main image",
    },
    cardsData: [
      {
        image: {
          src: "/Images/EcommercePhotos/one.png",
          alt: "can be easily accessed through both android/ios",
        },
        description:
          "Sorting and filtering products in Ecommerce can be time-consuming. That's why we've created Ecommerce Filtering & Sorting, an efficient solution that makes it easier than ever to find the right products.",
          title:"Product Filtering & Sorting"
      },
      {
        image: {
          src: "/Images/EcommercePhotos/two.png",
          alt: "user-friendly interface logo",
        },
        description:
          "With shipment tracking in Ecommerce apps, you can now do just that! With the latest technology and best-in-class services, we can help you track packages on your website or mobile app.",
          title:"Shipment Tracking"
      },
      {
        image: {
          src: "/Images/EcommercePhotos/three.png",
          alt: "Order food and track their service logo",
        },
        description:
          "With our e-commerce web app, you can offer your customers a wide range of payment methods right on your website. Our friendly support team is always available to help you make the most out of your online store.",
          title:"Multiple Payment Options"
      },
      {
        image: {
          src: "/Images/EcommercePhotos/four.png",
          alt: "Smart search and add-to-your-favorites list logo",
        },
        description:
          "Push notification is easy to integrate and will help turn visitors into buyers. Make sure that all visitors are informed about new products and promotions available at the store they like most.",
          title:"Push Notification"
      },
      {
        image: {
          src: "/Images/EcommercePhotos/five.png",
          alt: "Dummy text logo",
        },
        description:
          "With our simple registration process, you can create an account in no time and start engaging with your users. We offer end-to-end solutions that ensure a smooth user experience.",
          title:"Simple Registration Process"
      },
      {
        image: {
          src: "/Images/EcommercePhotos/six.png",
          alt: "Dummy text logo",
        },
        description:
          "We understand how important it is for you to have an easy-to-navigate ecommerce website, that is why we offers comprehensive solutions for both beginners and professional web developers.",
          title:"Super Navigation"
      },
    ],
  };

  return (
    <div className={styles.eCommerceAdvanceMain}>
      <h1>
        SOLUTIONS FOR YOUR <span> E-COMMERCE APP </span>
      </h1>

      <div className={styles.eCommerceCustomerMain}>
        <div className={styles.eCommerceCustomerImagesMain}>
          <div>
            <img
              src={customerAppData.backgroundImage.src}
              alt={customerAppData.backgroundImage.alt}
              style={{ zIndex: "1" }}
            />
          </div>

          <div>
            <img
              src={customerAppData.mainImage.src}
              alt={customerAppData.mainImage.alt}
              style={{ zIndex: "4" }}
            />
          </div>
        </div>

        <div className={styles.eCommerceAdvanceCardsMain}>
          <div>
            <h2>Customer app</h2>
            <div>
              {customerAppData.cardsData.map(({ description, image,title }, idx) => {
                return (
                  <div className={styles.eCommerceAdvanceCards} key={idx}>
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
      </div>
    </div>
  );
};
