import React from "react";

import { AnalysisSwBanner } from "../../components/ImageAnalysisSoftwarePage/AnalysisSwBanner/AnalysisSwBanner";
import { AnalysisCoreTask } from "../../components/ImageAnalysisSoftwarePage/AnalysisCoreTask/AnalysisCoreTask";
import { AnalysisOffer } from "../../components/ImageAnalysisSoftwarePage/AnalysisOffer/AnalysisOffer";
import { AnalysisMidBanner } from "../../components/ImageAnalysisSoftwarePage/AnalysisMidBanner/AnalysisMidBanner";
import { AnalysisWhyBF } from "../../components/ImageAnalysisSoftwarePage/AnalysisWhyBF/AnalysisWhyBF";

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

export default function ImageAnalysisSoftware() {
  return (
    <div>
      <Head>
        <title>Image Analysis Software Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for image analysis software services? 
          Use our comprehensive list to compare the top 
          offerings in the market today."
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <AnalysisSwBanner />
        <AnalysisCoreTask />
        <AnalysisOffer />
        <AnalysisMidBanner />
        <AnalysisWhyBF />

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
      </main>
    </div>
  );
}
