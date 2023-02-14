import React from "react";
import { MobileKickStart } from "../../components/MobileUiUxDesign/MobileKickStart";
import { MobileUiUxBanner } from "../../components/MobileUiUxDesign/MobileUiUxBanner";
import { MobileUiUxToNotched } from "../../components/MobileUiUxDesign/MobileUiUxToNotched";
import { MobileUXReactNative } from "../../components/MobileUiUxDesign/MobileUXReactNative";
import { MobileUxUiB2cSolution } from "../../components/MobileUiUxDesign/MobileUxUiB2cSolution";
import { MobileUxUiDesignPartner } from "../../components/MobileUiUxDesign/MobileUxUiDesignPartner";
import { MobileUXUIServiceOffer } from "../../components/MobileUiUxDesign/MobileUXUIServiceOffer";

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

export default function MobileUiUxDesign() {
  return (
    <>
      <Head>
        <title>UI UX App Development Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Bottom Funnel is the best web design company in India, we offers professional & custom website design services including mockup design, graphic UI design e-commerce website design at competitive prices."
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
        <MobileUiUxBanner />
        <MobileUiUxToNotched />
        <MobileUXUIServiceOffer />
        <MobileUxUiB2cSolution />
        <MobileUxUiDesignPartner />
        <MobileKickStart />
        <MobileUXReactNative />

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
