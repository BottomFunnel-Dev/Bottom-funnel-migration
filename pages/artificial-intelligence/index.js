import React from "react";

import { AiContentBanner } from "../../components/AiContentService/AiContentBanner";
import { AiContentHuman } from "../../components/AiContentService/AiContentHuman";
import { AiHowDoesWorks } from "../../components/AiContentService/AiHowDoesWorks";
import { AIContentApplication } from "../../components/AiContentService/AIContentApplication";
import { AiContentTextOnly } from "../../components/AiContentService/AiContentTextOnly";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
  return (
    <div>
      <Navbar />
      <AiContentBanner />
      <AiContentHuman />
      <AiHowDoesWorks />
      <AIContentApplication />
      <AiContentTextOnly />

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

export default index;
