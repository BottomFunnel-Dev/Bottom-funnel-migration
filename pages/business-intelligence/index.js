import React from "react";
import { BIBanner } from "../../components/BIPages/BIBanner/BIBanner";
import { BIPartner } from "../../components/BIPages/BIPartner/BIPartner";
import { BISolutions } from "../../components/BIPages/BISolutions/BISolutions";
import { BIWhyBF } from "../../components/BIPages/BIWhyBF/BIWhyBF";
import { BIAnalytics } from "../../components/BIPages/BIAnalytics/BIAnalytics";
import { BISlider } from "../../components/BIPages/BISlider/BISlider";
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

export default function BusinessIntelligence() {
  return (
    <div>
      <Head>
        <title>Business Intelligence Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking to invest in a BI solution for your business? 
          We offer a wide range of solutions designed to meet 
          your needs. Read on to know about our offerings."
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
        <BIBanner />
        <BIPartner />
        <BISolutions />
        <BIWhyBF />
        <BIAnalytics />
        <BISlider />
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
