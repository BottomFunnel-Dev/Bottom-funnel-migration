import React from "react";
import styles from "./Newsfeature.module.css";
import Image from "next/image";

export default function Newsfeature() {
  const [active, setActive] = React.useState(
    "/Images/News/Screens/pannel1.webp",
  );

  const cardsData = [
    {
      title: "News Details",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.`,
      image: "/Images/News/Screens/pannel1.webp",
    },
    {
      title: "Notifications",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.`,
      image: "/Images/News/Screens/pannel2.webp",
    },
    {
      title: "Search Your Interests",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.`,
      image: "/Images/News/Screens/pannel3.webp",
    },
    {
      title: "Last updates",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi reprehenderit quasi quod soluta ab
                    exercitationem, fugiat eveniet nulla omnis odit ad,
                    recusandae consectetur autem porro, itaque atque. Molestiae,
                    deleniti.`,
      image: "/Images/News/Screens/pannel1.webp",
    },
  ];

  return (
    <div className={styles.newfeaturemainboxes}>
      <span>
        <Image
          src={active}
          alt={active}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
      <div>
        <h1>Admin Panel</h1>
        <div>
          {cardsData.map(({ title, description, image }) => (
            <div
              className={styles.newsfeaturesContent}
              key={title}
              onMouseEnter={() => setActive(() => image)}
            >
              <div>
                <span>
                  <Image
                    src={"/Images/News/icons/checkmark.webp"}
                    alt={"News/icons/checkmark.webp"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </span>
                <h1>{title}</h1>
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
