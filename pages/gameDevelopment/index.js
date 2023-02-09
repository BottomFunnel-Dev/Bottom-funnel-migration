import React from "react";

import GameDevelopmentBanner from "../../components/GameDevelopment/GameDevelopmentBanner";
import { GameDevelopmentFeature } from "../../components/GameDevelopment/GameDevelopmentFeature";
import { GameMetaverce } from "../../components/GameDevelopment/GameMetaverce";
import { ThreeDGameDevelopment } from "../../components/GameDevelopment/ThreeDGameDevelopment";
import { MobileGameDevelopment } from "../../components/GameDevelopment/MobileGameDevelopment";
import Web3Development from "../../components/GameDevelopment/Web3Development";
import { GameWhyChoose } from "../../components/GameDevelopment/GameWhyChoose";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
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
