import Image from "next/image";
import React from "react";
import styles from "./RealEstateSolution.module.css";

export default function RealEstateSolution() {
  const realestatesolutiondata = [
    {
      txt: "Price Trands",
      stxt: "Check property & real estate prize",
      icon: "/Images/RealEstate/Icons/Rectangle 137.webp",
    },

    {
      txt: "Locality Insight",
      stxt: "Know more about the different location",
      icon: "/Images/RealEstate/Icons/Rectangle 137-1.webp",
    },

    {
      txt: "User Guides",
      stxt: "To help home buyer, tenants & sellers",
      icon: "/Images/RealEstate/Icons/Rectangle 137-2.webp",
    },

    {
      txt: "Check Articles",
      stxt: "To help home buyer,tenants & sellers",
      icon: "/Images/RealEstate/Icons/Rectangle 137-3.webp",
    },

    {
      txt: "About Properties",
      stxt: "Track prices & analyses market demand",
      icon: "/Images/RealEstate/Icons/Rectangle 137-4.webp",
    },
  ];

  return (
    <div className={styles.realstatesolutionmainboxes}>
      <div className={styles.realestatesolutionsometetxboxupper}>
        {/* <p> our on demand real estate app development company </p> */}
        <h1>Provide You With Robust Solution For Your Real Estate Business</h1>
      </div>

      <div className={styles.mainrealestatesolutionflexingwithupertextbox}>
        <div className={styles.realestateuppertextingbox}>
          <h2> Exculusive Features </h2>
        </div>

        <div className={styles.exuclusivefeaturedatamappingrealestatesolution}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="35"
            fill="currentColor"
            class="bi bi-chevron-compact-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
            />
          </svg>
          {realestatesolutiondata.map((e) => {
            return (
              <div className={styles.exclusivefeaturerealestateflexindi}>
                <div className={styles.exclusivefeaturerealestateflexindih4}>
                  <h4> {e.txt} </h4>
                </div>

                <div className={styles.indivisualimageforsolutionrealestate}>
                  <Image
                    src={e.icon}
                    alt={"images"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%", padding: "10px" }}
                  />
                </div>

                <div className={styles.indivisualtextforsolutionrealestate}>
                  <p> {e.stxt} </p>
                </div>
              </div>
            );
          })}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="35"
            fill="currentColor"
            class="bi bi-chevron-compact-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
