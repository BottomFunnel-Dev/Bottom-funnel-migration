import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const GameDevelopmentBanner = dynamic(
  () => import("../../../components/GameDevelopment/GameDevelopmentBanner"),
  { loading: () => "loading..." },
);
const GameDevelopmentFeature = dynamic(
  () => import("../../../components/GameDevelopment/GameDevelopmentFeature"),
  { loading: () => "loading..." },
);
const GameMetaverce = dynamic(
  () => import("../../../components/GameDevelopment/GameMetaverce"),
  { loading: () => "loading..." },
);
const ThreeDGameDevelopment = dynamic(
  () => import("../../../components/GameDevelopment/ThreeDGameDevelopment"),
  { loading: () => "loading..." },
);
const MobileGameDevelopment = dynamic(
  () => import("../../../components/GameDevelopment/MobileGameDevelopment"),
  { loading: () => "loading..." },
);
const Web3Development = dynamic(
  () => import("../../../components/GameDevelopment/Web3Development"),
  { loading: () => "loading..." },
);
const GameWhyChoose = dynamic(
  () => import("../../../components/GameDevelopment/GameWhyChoose"),
  { loading: () => "loading..." },
);

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
