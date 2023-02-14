import React from "react";
import { Fitnesscontainer } from "../../components/Fitness/Fitnesscontainer";
import { fitnessLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Brand from "../../components/Fitness/Brand";
import FitnessFeature from "../../components/Fitness/FitnessFeature";
import Fitnessstart from "../../components/Fitness/FitnessStart";
import Fitnessexercise from "../../components/Fitness/Fitnessexercise";
import FitnessSolution from "../../components/Fitness/FitnessSolution";
import Fitnesswhy from "../../components/Fitness/Fitnesswhy";

import Head from "next/head";

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
        <Fitnesswhy />
      </main>
    </div>
  );
}
