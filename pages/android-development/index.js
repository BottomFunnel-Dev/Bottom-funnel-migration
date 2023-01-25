import React from "react";
import { AndriodBanner } from "../../components/AndriodAppDevelopment/AndriodBanner/AndriodBanner";
import { AndriodBottomFunnel } from "../../components/AndriodAppDevelopment/AndriodBottomFunnel/AndriodBottomFunnel";
import { AndriodCustomDevelopment } from "../../components/AndriodAppDevelopment/AndriodCustomDevelopment/AndriodCustomDevelopment";
import { AndriodServices } from "../../components/AndriodAppDevelopment/AndriodServices/AndriodServices";
import { AndriodUserCentric } from "../../components/AndriodAppDevelopment/AndriodUserCentric/AndriodUserCentric";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function AndroidAppDevelopment() {
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
      <AndriodBanner />
      <AndriodServices />
      <AndriodCustomDevelopment />
      <AndriodUserCentric />
      <AndriodBottomFunnel />

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
}
