import React from "react";

import styles from "../../components/GameDevelopment/gameDevelopment.module.css";

import GameDevelopmentBanner from "../../components/GameDevelopment/GameDevelopmentBanner";
import { GameDevelopmentFeature } from "../../components/GameDevelopment/GameDevelopmentFeature";
import { GameMetaverce } from "../../components/GameDevelopment/GameMetaverce";
import { ThreeDGameDevelopment } from "../../components/GameDevelopment/ThreeDGameDevelopment";
import { MobileGameDevelopment } from "../../components/GameDevelopment/MobileGameDevelopment";
import Web3Development from "../../components/GameDevelopment/Web3Development";
import { GameWhyChoose } from "../../components/GameDevelopment/GameWhyChoose";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function GameDevelopment() {
  return (
    <div>
      <Navbar />
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
          
      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
