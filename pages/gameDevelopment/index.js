import React from "react";

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
import Head from "next/head";

export default function GameDevelopment() {
  return (
    <div>
        <Head>
        <title>Game Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to develop a game but don't know where to start? 
          Our team of experts can help you develop a web app that is based 
          on your own game concept. We have years of experience in the 
          industry and will take care of everything from design to 
          development to launch."
        />
      </Head>
      <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <GameDevelopmentBanner />
      <GameDevelopmentFeature />
      <GameMetaverce />
      <ThreeDGameDevelopment />
      <MobileGameDevelopment />
      <Web3Development />
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
      </main>
    </div>
  );
}
