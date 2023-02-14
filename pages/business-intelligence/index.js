import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

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
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: "loading..." },
);

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
        <BIBanner />
        <BIPartner />
        <BISolutions />
        <BIWhyBF />
        <BIAnalytics />
        <BISlider />
        <CustomWebForm />
      </main>
    </div>
  );
}
