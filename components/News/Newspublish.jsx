import React from "react";
import styles from "./Newspublish.module.css";
import Image from "next/image";

export default function Newspublish() {
  const cardData = [
    {
      image: "/Images/News/icons/target.webp",
      title: "Heavy personalization",
      description:
        "We let you create content for your website or social media page in no time! We offer personalization features like data mining where you can personalize content according to your visitors' interests so they stay engaged on your website easily.",
    },
    {
      image: "/Images/News/icons/share.webp",
      title: "Social media sharing",
      description:
        "We let you create content for your website or social media page in no time! We offer personalization features like data mining where you can personalize content according to your visitors' interests so they stay engaged on your website easily.",
    },
    {
      image: "/Images/News/icons/book.webp",
      title: "Reader engagement techniques",
      description:
        "We let you create content for your website or social media page in no time! We offer personalization features like data mining where you can personalize content according to your visitors' interests so they stay engaged on your website easily.",
    },
    {
      image: "/Images/News/icons/location.webp",
      title: "Localization",
      description:
        "We let you create content for your website or social media page in no time! We offer personalization features like data mining where you can personalize content according to your visitors' interests so they stay engaged on your website easily.",
    },
    {
      image: "/Images/News/icons/cloud.webp",
      title: "Offline view",
      description:
        "We let you create content for your website or social media page in no time! We offer personalization features like data mining where you can personalize content according to your visitors' interests so they stay engaged on your website easily.",
    },
    {
      image: "/Images/News/icons/check.webp",
      title: "Payment integration",
      description:
        "We let you create content for your website or social media page in no time! We offer personalization features like data mining where you can personalize content according to your visitors' interests so they stay engaged on your website easily.",
    },
  ];

  return (
    <div className={styles.newspublishdiv}>
      <h1>
        Bottom funnel powered features that are loved by content publishers and
        readers
      </h1>
      <p>
        Apart from top-notch SaaS Development, there are several reasions to
        choose us.
      </p>
    </div>
  );
}
