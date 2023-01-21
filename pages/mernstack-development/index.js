import React from "react";
import { mernbanner } from "../../components/Data/webdevPageData/TechBannerData";
import { Mernbanner } from "../../components/MernPage/Mernbanner";
import { MernIntro } from "../../components/MernPage/MernIntro";
import { whatData } from "../../components/Data/webdevPageData/TechWhatData";
import { MernPoluparServices } from "../../components/MernPage/MernPoluparServices";
import { mernservices } from "../../components/Data/webdevPageData/Popularservices";
import { TechGetStarted } from "../../components/MernPage/TechGetStarted";
import { letstart } from "../../components/Data/webdevPageData/LetStart";
import { WhyBottom } from "../../components/MernPage/WhyBottom";
import { mernWhyContent } from "../../components/Data/webdevPageData/whyBottomContent";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function MernPageWebDevelopment() {
  return (
    <div>
      <Navbar />
      <Mernbanner bannerdata={mernbanner} />
      <MernIntro techIntro={whatData} />
      <MernPoluparServices popularservice={mernservices} />
      <TechGetStarted calltoAction={letstart} />
      {/* <WhyBottom whyContent={mernWhyContent} /> */}

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      {/* <PlanProject />  */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
