import React from "react";

import { KidsWearBanner } from "../../components/KidsWear/KidsWearBanner/KidsWearBanner";
import { ExclusiveFeature } from "../../components/KidsWear/ExclusiveFeature/ExclusiveFeature";
import { AppFeature } from "../../components/KidsWear/AppFeature/AppFeature";
import { ChooseUs } from "../../components/KidsWear/ChooseUs/ChooseUs";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Kidswear() {
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
      <KidsWearBanner />
      <ExclusiveFeature />
      <AppFeature />
      <ChooseUs />
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
