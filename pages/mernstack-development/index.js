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

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import * as ReactAnimation from "../../public/webdevanimation/Mern.json";

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
