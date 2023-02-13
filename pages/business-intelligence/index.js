import React from "react";
import dynamic from "next/dynamic";

const BIBanner = dynamic(
  () => import("../../components/BIPages/BIBanner/BIBanner"),
  { loading: "loading..." },
);
const BIPartner = dynamic(
  () => import("../../components/BIPages/BIPartner/BIPartner"),
  { loading: "loading..." },
);
const BISolutions = dynamic(
  () => import("../../components/BIPages/BISolutions/BISolutions"),
  { loading: "loading..." },
);
const BIWhyBF = dynamic(
  () => import("../../components/BIPages/BIWhyBF/BIWhyBF"),
  { loading: "loading..." },
);
const BIAnalytics = dynamic(
  () => import("../../components/BIPages/BIAnalytics/BIAnalytics"),
  { loading: "loading..." },
);
const BISlider = dynamic(
  () => import("../../components/BIPages/BIAnalytics/BIAnalytics"),
  { loading: "loading..." },
);
const CustomWebForm = dynamic(
  () => import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: "loading..." },
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
