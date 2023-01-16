import React from "react";
import { mernbanner } from "../Data/webdevPageData/TechBannerData";
import { Mernbanner } from "./Mernbanner";
import { MernIntro } from "./MernIntro";
import { whatData } from "../Data/webdevPageData/TechWhatData";
import { MernPoluparServices } from "./MernPoluparServices";
import { mernservices } from "../Data/webdevPageData/Popularservices";
import { TechGetStarted } from "./TechGetStarted";
import { letstart } from "../Data/webdevPageData/LetStart";
import { WhyBottom } from "./WhyBottom";
import { mernWhyContent } from "../Data/webdevPageData/whyBottomContent";

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

export default function MernPageWebDevelopment() {
  return (
    <div>
      <Mernbanner bannerdata={mernbanner} />
      <MernIntro techIntro={whatData} />
      <MernPoluparServices popularservice={mernservices} />
      <TechGetStarted calltoAction={letstart} />
      {/* <WhyBottom whyContent={mernWhyContent} /> */}

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
