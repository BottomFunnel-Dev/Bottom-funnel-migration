import React from "react";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

import { EngagementBanner } from "../../components/EngagementPage/EngagementBanner/EngagementBanner";
import { EngagementProcess } from "../../components/EngagementPage/EngagementProcess/EngagementProcess";
import { EngagementRanges } from "../../components/EngagementPage/EngagementRanges/EngagementRanges";
import { EngagementQuery } from "../../components/EngagementPage/EngagementQuery/EngagementQuery";

export default function  EngagementModel () {
  return (
    <div>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <EngagementBanner />
      <EngagementProcess />
      <EngagementRanges />
      <EngagementQuery />

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
