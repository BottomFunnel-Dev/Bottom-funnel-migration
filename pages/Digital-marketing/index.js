import React from "react";
import { DigitalMarketClientsAdd } from "../../components/DigitaMarketing/DigitalMarketClientsAdd";
import { DigitalMarketingBanner } from "../../components/DigitaMarketing/DigitalMarketingBanner";
import { DigitalMarketingHiring } from "../../components/DigitaMarketing/DigitalMarketingHiring";
import { DigitalmarketWhyConsider } from "../../components/DigitaMarketing/DigitalmarketWhyConsider";
import { DigitaMarketWeOffers } from "../../components/DigitaMarketing/DigitaMarketWeOffers";
import { WhatDigitalMarket } from "../../components/DigitaMarketing/WhatDigitalMarket";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function DigitalMarketing() {
  return (
    <div>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <DigitalMarketingBanner />
      <WhatDigitalMarket />
      <DigitaMarketWeOffers />
      {/* <DigitalMarketingHiring />*/}
      <DigitalMarketClientsAdd />
      <DigitalmarketWhyConsider />
      
      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
