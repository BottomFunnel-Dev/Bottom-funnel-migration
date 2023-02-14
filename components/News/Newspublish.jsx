import React from "react";
import styles from "./Newspublish.module.css";
import Image from "next/image";

export default function Newspublish() {
  const publish = [
    {
      img: "/Images/News/target.webp",
      h4: "Heavy personalization",
      p: "We let you create unique content for your website or social media page in no time! We offer personalization features like data mining where you can personalize content according to your visitors' interests so they stay engaged on your website easily.",
    },
    {
      img: "/Images/News/network.webp",
      h4: "Social media integration",
      p: "We have years of experience designing websites and blogs that are not only functional but also aesthetically pleasing, keeping in mind their target audience. With an eye for detail, we ensure that all our projects are completed on time and within budget. ",
    },
    {
      img: "/Images/News/ebook.webp",
      h4: "Reader engagement techniques",
      p: "Want to get the attention of your target readers? Then we have a solution for you. We'll make sure your site runs smoothly, so all you have to do is focus on creating engaging content. With our magazine & newspaper web development services, we'll help you stay up-to-date on everything that's happening in your industry.",
    },
    {
      img: "/Images/News/cloud.webp",
      h4: "Offline view",
      p: "We have a deep understanding of magazines and newspapers from their inception till their publishing. And when we say offline view, we mean it! We know how to take a magazine or newspaper offline and build an app out of it.",
    },
    {
      img: "/Images/News/payment-method.webp",
      h4: "Payment integrated",
      p: "We give your readers the option to connect their debit or credit card with the app and pay for magazine or news subscription. Not only does it save time, but also makes sure they know how much they will be charged per month before subscribing. The app also provides you with article previews, making it easier than ever to decide on which newspaper is worth subscribing to.",
    },
    {
      img: "/Images/News/location.webp",
      h4: "Localization",
      p: "Localization is difficult for many companies, especially foreign ones. To make your content available in as many languages as possible, we offer translation services to help you reach people all over the world. We use the latest technologies and methods to provide accurate translations that convey your message clearly and accurately.",
    },
    {
      img: "/Images/News/share.webp",
      h4: "Social media sharing",
      p: "We provide web development services that help brands drive traffic to their websites through social media channels like Facebook, Twitter and Pinterest. Our team of talented developers will help you create a solid online presence by automating all the necessary processes with ease.",
    },
  ];
  return (
    <div className={styles.newspublishdiv}>
      <div className={styles.funnelImage}>
          <Image
              src={"/Images/News/funnelleft.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
      </div>

      <div className={styles.newspublishsub}>
        {publish.map((item) => {
          return (
            <div className={styles.sznewspublishindivisuallydiv}>
              <div className={styles.sznewspublish}>
                <div className={styles.znewspublishimage}>
                <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.newspublishhead}>
                  <h4>{item.h4}</h4>{" "}
                </div>
              </div>
              <div className={styles.newspara}>
                <p>{item.p}</p>
              </div>
            </div>
          );
        })}

       
      </div>
    </div>
  );
}
