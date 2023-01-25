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

export default function Fintess ()  {
  return (
    <div>
      <Head>
        <title>Fitness Web App development | Bottom Funnel</title>
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
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <Fitnesscontainer />
      <Trusted partnerLogo={fitnessLogo} />
      <Brand />
      <FitnessFeature />
      <Fitnessstart />
      <Fitnessexercise />
      <FitnessSolution />
      <Fitnesswhy />

      <StoriesSection />
      {/* <Industries /> */}
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
      </main>
    </div>
  );
};
