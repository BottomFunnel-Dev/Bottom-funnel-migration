import React from "react";

import { FlutterAppDevelopmentBanner } from "../../components/FlutterAppDevelopment/FlutterAppDevelopmentBanner/FlutterAppDevelopmentBanner";
import { FlutterServices } from "../../components/FlutterAppDevelopment/FlutterServices/FlutterServices";
import { WhyFlutter } from "../../components/FlutterAppDevelopment/WhyFlutter/WhyFlutter";
import { FlutterCrossPlatform } from "../../components/FlutterAppDevelopment/FlutterCrossPlatform/FlutterCrossPlatform";
import { FlutterAppDevelopmentDreamProject } from "../../components/FlutterAppDevelopment/FlutterAppDevelopmentDreamProject/FlutterAppDevelopmentDreamProject";
import { FluterDevelopmentExpertise } from "../../components/FlutterAppDevelopment/FluterDevelopmentExpertise/FluterDevelopmentExpertise";

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

export default function FlutterAppDevelopment() {
  return (
    <>
      <Head>
        <title>Flutter App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for top-notch flutter app development 
       services? Our team offers comprehensive and 
       thorough solutions. Read on to know about our 
       offerings."
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
        <FlutterAppDevelopmentBanner />
        <FlutterServices />
        <WhyFlutter />

        <FlutterCrossPlatform />
        <FlutterAppDevelopmentDreamProject />
        <FluterDevelopmentExpertise />

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
    </>
  );
}
