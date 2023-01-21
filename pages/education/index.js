import React from "react";
import { EducationAdministration } from "../../components/Education/EducationAdministration";
import { EducationBanner } from "../../components/Education/EducationBanner";
import { EducationGroupwise } from "../../components/Education/EducationGroupwise";
import { EducationITteams } from "../../components/Education/EducationITteams";
import { EducationSupport } from "../../components/Education/EducationSupport";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Education() {
  return (
    <div>
      <Navbar />
      <EducationBanner />
      <EducationSupport />
      <EducationITteams />
      <EducationAdministration />
      <EducationGroupwise />

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
