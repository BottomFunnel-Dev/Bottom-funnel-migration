import React from "react";

import { EnterpriseWebBanner } from "../../components/EnterpriseWebPage/EnterpriseWebBanner/EnterpriseWebBanner";
import { EnterpriseWebAnalysis } from "../../components/EnterpriseWebPage/EnterpriseWebAnalysis/EnterpriseWebAnalysis";
import { EnterpriseSupporting } from "../../components/EnterpriseWebPage/EnterpriseSupporting/EnterpriseSupporting";
import { EnterpriseWebSolutions } from "../../components/EnterpriseWebPage/EnterpriseWebSolutions/EnterpriseWebSolutions";
import { EnterpriseMidBanner } from "../../components/EnterpriseWebPage/EnterpriseMidBanner/EnterpriseMidBanner";
import { EnterpriseWhyBF } from "../../components/EnterpriseWebPage/EnterpriseWhyBF/EnterpriseWhyBF";
import { EnterpriseSlider } from "../../components/EnterpriseWebPage/EnterpriseSlider/EnterpriseSlider";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function EnterprisePage() {
  return (
    <div>
      <Head>
        <title>Enterprise Solutions development | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking to provide your business with enterprise 
          solutions services? Our extensive portfolio of 
          offerings includes everything you need to grow your 
          business. Read on for details."
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
        <EnterpriseWebBanner />
        <EnterpriseWebAnalysis />
        <EnterpriseSupporting />
        <EnterpriseWebSolutions />
        <EnterpriseMidBanner />
        <EnterpriseWhyBF />
        <EnterpriseSlider />
        <CustomWebForm />

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
