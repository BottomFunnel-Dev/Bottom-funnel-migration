import React from "react";

import { Fitnesscontainer } from "./Fitnesscontainer";
import { fitnessLogo } from "../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import Brand from "./Brand";
import FitnessFeature from "./FitnessFeature";
import Fitnessstart from "./FitnessStart";
import Fitnessexercise from "./Fitnessexercise";
import FitnessSolution from "./FitnessSolution";
import Fitnesswhy from "./Fitnesswhy";

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

export default function Fintess ()  {
  return (
    <div>
      <Fitnesscontainer />
      <Trusted partnerLogo={fitnessLogo} />
      <Brand />
      <FitnessFeature />
      <Fitnessstart />
      <Fitnessexercise />
      <FitnessSolution />
      <Fitnesswhy />

      <StoriesSection />
      <Industries />
      {/* <PlanProject /> */}
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
};
