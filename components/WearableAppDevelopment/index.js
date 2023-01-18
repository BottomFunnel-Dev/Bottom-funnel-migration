import React from "react";

import { WearableBanner } from "./WearableBanner/WearableBanner";
import { WearableContainer } from "./WearableContainer/WearableContainer";
import { Scroller } from "./Scroller/Scroller";
import { Usercentric } from "./Usercentric/Usercentric";
import { WearablePartner } from "./WearablePartner/WearablePartner";

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

export default function WearableAppDevelopment() {
  return (
    <div>
      <WearableBanner/>
      <WearableContainer />
      <Scroller />
      <Usercentric />
      <WearablePartner />

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
}
