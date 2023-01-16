import React from "react";

import { MarketplaceBanner } from "./MarketplaceBanner";
import MarketplaceFreelancer from "./MarketplaceFreelancer";
import MarketPlaceAdmin from "./MarketPlaceAdmin";
import MarketPlaceClients from "./MarketPlaceClients";
import Marketplaceborder from "./Marketplaceborder";
import Maketplacefooter from "./Maketplacefooter";

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

export default function MarketPlace () {
  return (
    <div>
      <MarketplaceBanner />
      <MarketplaceFreelancer />
      <MarketPlaceAdmin />
      <MarketPlaceClients />
      <Marketplaceborder />
      <Maketplacefooter />

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
