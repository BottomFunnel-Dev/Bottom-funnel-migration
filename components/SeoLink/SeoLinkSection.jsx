import React from "react";
import { SeoForm } from "../SEO/seoForm/SeoForm";
import styles from "./SeoLinkSection.module.css";
import * as reactAnimation from "../../public/Animation/DMAnimation/6.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function SeoLinkSection() {
  return (
    <div className={styles._SeoLinkMain1}>
      <div className={styles.linkgifDenote}>
      <Player
                src={reactAnimation}
                background="transparent"
                speed="2"
                loop
                controls
                autoplay
        ></Player>
      </div>
      <div className={styles._SeoLinkupperdiv}>
        <div className={styles._SeoLinktext}>
          <div className={styles._SeoLinkheading}>
            Link Building Services Company
          </div>

          <p className={styles._SeoLinkparagraph}>
            As a link building services company, we help brands create
            growth-driven link building strategies. This enables brands to draw
            great backlinks from high DA websites and reach the right audience.
            Increase your search engine ranking with our white hat link building
            services via blogger outreach, resource link building, brand
            mentions and infographic submission. Our link building strategy can
            boost your website's overall SEO performance with our experts’
            high-quality link building.
          </p>
          <div className={styles._SeoLinkPricing}>
            <button>Check Link SEO Pricing</button>
          </div>
        </div>
        <SeoForm />
      </div>
    </div>
  );
}
