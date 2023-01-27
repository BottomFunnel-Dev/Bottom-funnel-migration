import React from "react";

import { MarketplaceBanner } from "../../components/MarketPlace/MarketplaceBanner";
import MarketplaceFreelancer from "../../components/MarketPlace/MarketplaceFreelancer";
import MarketPlaceAdmin from "../../components/MarketPlace/MarketPlaceAdmin";
import MarketPlaceClients from "../../components/MarketPlace/MarketPlaceClients";
import Marketplaceborder from "../../components/MarketPlace/Marketplaceborder";
import Maketplacefooter from "../../components/MarketPlace/Maketplacefooter";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function MarketPlace() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <MarketplaceBanner />
      <MarketplaceFreelancer />
      <MarketPlaceAdmin />
      {/* <MarketPlaceClients /> */}
      <Marketplaceborder />
      <Maketplacefooter />

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
}
