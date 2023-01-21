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

export default function Fintess ()  {
  return (
    <div>
      <Navbar />
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
    </div>
  );
};
