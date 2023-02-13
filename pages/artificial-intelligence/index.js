import React from "react";
import { AiContentBanner } from "../../components/AiContentService/AiContentBanner";
import { AiContentHuman } from "../../components/AiContentService/AiContentHuman";
import { AiHowDoesWorks } from "../../components/AiContentService/AiHowDoesWorks";
import { AIContentApplication } from "../../components/AiContentService/AIContentApplication";
import { AiContentTextOnly } from "../../components/AiContentService/AiContentTextOnly";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "Loading..." }
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "Loading..." }
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "Loading..." }
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "Loading..." }
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "Loading..." }
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "Loading..." }
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "Loading..." }
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "Loading..." }
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Artificial Intelligence Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking to invest in artificial intelligence services? 
          Check out our comprehensive guide on the top AI 
          offerings and where to invest!"
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
        <AiContentBanner />
        {/*   <AiContentHuman /> 
       <AiHowDoesWorks />
         <AIContentApplication />*/}
        <AiContentTextOnly />

        {/* Other react required components   */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />   */}
        <PlanProject />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
};

export default index;
