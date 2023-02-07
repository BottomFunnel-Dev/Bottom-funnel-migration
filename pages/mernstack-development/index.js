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
import Head from "next/head";
import * as ReactAnimation from "../../public/webdevanimation/Mern.json"


export default function MernPageWebDevelopment() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
      <title>MERN Stack Development Sevices Company | Bottom Funnel</title>
      <meta
        name="description"
        content="Learn about the different stages of developing 
        a MERN Stack solution and how to prepare for 
        launching your product or service. Our blog 
        covers these topics"
      />
    </Head>
    <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
      <Mernbanner bannerdata={mernbanner} animateData={ReactAnimation} />
      <MernIntro techIntro={whatData} />
      <MernPoluparServices popularservice={mernservices} />
      <TechGetStarted calltoAction={letstart} />
      <WhyBottom whyContent={mernWhyContent} />

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
      </main>
    </div>
  );
}
