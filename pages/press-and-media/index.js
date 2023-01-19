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

import { NewsEventBanner } from "../../components/PressAndMedia/NewsEventBanner/NewsEventBanner";
import { NewsEventSection } from "../../components/PressAndMedia/NewsEventSection/NewsEventSection";
import { MediaSection } from "../../components/PressAndMedia/MediaSection/MediaSection";
import { NewsEventSlider } from "../../components/PressAndMedia/NewsEventSlider/NewsEventSlider";


export default function PressMedia () {
  return (
    <div>
      <Navbar />
      <NewsEventBanner />
      <NewsEventSection />
      <MediaSection />
      {/* <NewsEventSlider /> */}

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
