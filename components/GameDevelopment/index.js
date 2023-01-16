import React from "react";

import styles from "./gameDevelopment.module.css";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

import GameDevelopmentBanner from "./GameDevelopmentBanner";
import { GameDevelopmentFeature } from "./GameDevelopmentFeature";
import { GameMetaverce } from "./GameMetaverce";
import { ThreeDGameDevelopment } from "./ThreeDGameDevelopment";
import { MobileGameDevelopment } from "./MobileGameDevelopment";
import Web3Development from "./Web3Development";
import { GameWhyChoose } from "./GameWhyChoose";

export default function GameDevelopment() {
  return (
    <div>
      <GameDevelopmentBanner />
      <div className={styles.bannerBottomSpace}></div>
      <GameDevelopmentFeature />
      <div className={styles.bannerBottomSpace}></div>
      <GameMetaverce />
      <div className={styles.bannerBottomSpace}></div>
      <ThreeDGameDevelopment />
      <div className={styles.bannerBottomSpace}></div>
      <MobileGameDevelopment />
      <div className={styles.bannerBottomSpace}></div>
      <Web3Development />
      <div className={styles.bannerBottomSpace}></div>
      <GameWhyChoose />

 
    </div>
  );
};
