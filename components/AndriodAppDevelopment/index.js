import React from "react";
import { AndriodBanner } from "./AndriodBanner/AndriodBanner";
import { AndriodBottomFunnel } from "./AndriodBottomFunnel/AndriodBottomFunnel";
import { AndriodCustomDevelopment } from "./AndriodCustomDevelopment/AndriodCustomDevelopment";
import { AndriodServices } from "./AndriodServices/AndriodServices";
import { AndriodUserCentric } from "./AndriodUserCentric/AndriodUserCentric";

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

export default function AndroidAppDevelopment() {
  return (
    <div>
      <AndriodBanner />
      <AndriodServices />
      <AndriodCustomDevelopment />
      <AndriodUserCentric />
      <AndriodBottomFunnel />

      <StoriesSection />
      <Industries />
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
}
