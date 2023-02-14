import React from "react";

import GameDevelopmentBanner from "../../components/GameDevelopment/GameDevelopmentBanner";
import { GameDevelopmentFeature } from "../../components/GameDevelopment/GameDevelopmentFeature";
import { GameMetaverce } from "../../components/GameDevelopment/GameMetaverce";
import { ThreeDGameDevelopment } from "../../components/GameDevelopment/ThreeDGameDevelopment";
import { MobileGameDevelopment } from "../../components/GameDevelopment/MobileGameDevelopment";
import Web3Development from "../../components/GameDevelopment/Web3Development";
import { GameWhyChoose } from "../../components/GameDevelopment/GameWhyChoose";

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
        <GameDevelopmentBanner />
        <GameDevelopmentFeature />
        <GameMetaverce />
        <ThreeDGameDevelopment />
        <MobileGameDevelopment />
        <Web3Development />
        <GameWhyChoose />
      </main>
    </div>
  );
}
