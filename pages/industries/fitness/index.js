import React from "react";
import Head from "next/head";
import { fitnessLogo } from "../../../components/Data/SeopartnerData";
import dynamic from "next/dynamic";

const Trusted = dynamic(
  () => import("../../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);
const Brand = dynamic(() => import("../../../components/Fitness/Brand"), {
  loading: () => "loading...",
});
const Fitnesscontainer = dynamic(
  () => import("../../../components/Fitness/Fitnesscontainer"),
  { loading: () => "loading..." },
);
const FitnessFeature = dynamic(
  () => import("../../../components/Fitness/FitnessFeature"),
  { loading: () => "loading..." },
);
const Fitnessstart = dynamic(
  () => import("../../../components/Fitness/FitnessStart"),
  { loading: () => "loading..." },
);
const Fitnessexercise = dynamic(
  () => import("../../../components/Fitness/Fitnessexercise"),
  { loading: () => "loading..." },
);
const FitnessSolution = dynamic(
  () => import("../../../components/Fitness/FitnessSolution"),
  { loading: () => "loading..." },
);
// const Fitnesswhy = dynamic(
//   () => import("../../../components/Fitness/Fitnesswhy"),
//   { loading: () => "loading..." },
// );

export default function Fintess() {
  return (
    <div>
      <Head>
        <title>Fitness Web and App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a Fitness web app development company that 
          can help you design and develop a top-notch fitness web app? 
          Look no further! Here at our company, we understand the 
          importance of providing users with a quality and innovative 
          fitness web app."
        />
      </Head>
      <main>
        <Fitnesscontainer />
        <Trusted partnerLogo={fitnessLogo} />
        <Brand />
        <FitnessFeature />
        <Fitnessstart />
        <Fitnessexercise />
        <FitnessSolution />
        {/* <Fitnesswhy /> */}
      </main>
    </div>
  );
}
