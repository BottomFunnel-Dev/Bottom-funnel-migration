import React from "react";


import dynamic from "next/dynamic";

const BusinessAnalysisBanner = dynamic(
  () => import("../../components/BusinessAnalysis/BusinessAnalysisBanner"),
  { loading: "loading..." }
);
const BusinessAnalysisLowerBanner = dynamic(
  () => import("../../components/BusinessAnalysis/BusinessAnalysisLowerBanner"),
  { loading: "loading..." }
);
const BusinessChallenge = dynamic(
  () => import("../../components/BusinessAnalysis/BusinessChallenge"),
  { loading: "loading..." }
);
const BusinessFramework = dynamic(
  () => import("../../components/BusinessAnalysis/BusinessFramework"),
  { loading: "loading..." }
);


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

export default function BusinessAnalysis() {
  return (
    <div>
      <Head>
        <title>
          Bottom Funnel | Digital Business Analysis Project Management
        </title>
        <meta
          name="description"
          content="The role of a business analyst is vital in any organization. 
          Our blog will cover the various responsibilities of a BA and 
          how to be successful in the role. Stay tuned!"
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
        <BusinessAnalysisBanner />
        <BusinessChallenge />
        <BusinessFramework />
        <BusinessAnalysisLowerBanner />
        {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection /> {/* <PortFolio />  */}
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
