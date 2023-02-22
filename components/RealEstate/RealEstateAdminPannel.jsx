import Image from "next/image";
import React from "react";
import { useState } from "react";
import styles from "./RealEstateAdminPannel.module.css";

export default function RealEstateAdminPannel() {
  const [imageChange, setImageChange] = useState(
    "/Images/RealEstate/Admin Panel/Dashboard Management.webp",
  );

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath);
    console.log(imagepath);
  };

  const realestateadmindata = [
    {
      images: "/Images/RealEstate/Admin Panel/Dashboard Management.webp",
      htxt: "Dashboard Management",
      icon: "/Images/RealEstate/Icons/ha/dashboard management.webp",
      stxt: "We provide best in class solutions to help you grow your business online. From analytics to marketing,we have it all covered. With our team of experts,we can create an e-commerce app that will boost your sales and profits.",
    },

    {
      images: "/Images/RealEstate/Admin Panel/Manage Users.webp",
      htxt: "Manage Users",
      icon: "/Images/RealEstate/Icons/ha/manage users.webp",
      stxt: "Using our user-friendly interface, you will be able to analyze everything about your app right in your fingertips.Data will be updated automatically every day with real time information about user engagement,transactions etc.",
    },

    {
      images: "/Images/RealEstate/Admin Panel/Manage Property Categories.webp",
      htxt: "Manage Property Categories",
      icon: "/Images/RealEstate/Icons/ha/manage product categories.webp",
      stxt: "When you're managing a large catalog of products,efficiency is key.From setting up product.Categories to installing integration, we'll do everything we can ensure your website runs smoothly and efficiently.",
    },

    {
      images: "/Images/RealEstate/Admin Panel/Track Location.webp",
      htxt: "Track Location",
      icon: "/Images/RealEstate/Icons/ha/manage users-1.webp",
      stxt: "We specialize in helping business woth there Home service needs by providing a wide range of solutions that will help you track your work efficiently and efficiently.From marketing automation tools to site optimization services.",
    },
  ];

  return (
    <div className={styles.realestateadminpannelmainboxes}>
      <div className={styles.realestateadminleftbox}>
        <div className={styles.realestateadminleftinsiderimageupper}>
          <Image
            src={imageChange}
            alt={"real estate"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
      <div className={styles.realestateadminrightbox}>
        <div className={styles.realestateuppertextforleftboxadmin}>
          <h2>Admin pannel</h2>
        </div>
        <div className={styles.realestaterightboxmappingmainbox}>
          {realestateadmindata.map((e) => {
            return (
              <div
                className={styles.realstateadminpannelindidaat}
                key={e.htxt}
                onMouseEnter={() => {
                  handleImageChange(e.images);
                }}
              >
                <div className={styles.realestateiconadminpannel}>
                  <Image
                    src={e.icon}
                    alt={"images"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      padding: "5px",
                    }}
                  />
                </div>

                <h5>{e.htxt}</h5>
                <p>{e.stxt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
