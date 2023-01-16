import React from "react";

import { NFTDevBanner } from "./NFTDevBanner/NFTDevBanner";
import { NFTAboutIt } from "./NFTAboutIt/NFTAboutIt";
import { NFTOffers } from "./NFTOffers/NFTOffers";
import { NFTSolutions } from "./NFTSolutions/NFTSolutions";
import { NFTMidBanner } from "./NFTMidBanner/NFTMidBanner";
import { NFTWhyBF } from "./NFTWhyBF/NFTWhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function NFTDevelopment () {
  return (
    <div>
      <NFTDevBanner />
      <NFTAboutIt />
      <NFTOffers />
      <NFTSolutions />
      <NFTMidBanner />
      <NFTWhyBF />
      <CustomWebForm />

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
