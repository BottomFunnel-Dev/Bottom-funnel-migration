import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { alcoholLogo } from "../../components/Data/SeopartnerData";

// ---------------importing components with lazy loading-----------------------
const AlcoholBanner = dynamic(
  () => import("../../components/alcohol-delivery/AlcoholBanner/AlcoholBanner"),
  { loading: () => "loading..." },
);

const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." },
);

const AlcoholBookCall = dynamic(
  () =>
    import("../../components/alcohol-delivery/AlcoholBookCall/AlcoholBookCall"),
  { loading: () => "loading..." },
);

const AlcoholSuggestions = dynamic(
  () =>
    import(
      "../../components/alcohol-delivery/AlcoholSuggestions/AlcoholSuggestions"
    ),
  { loading: () => "loading..." },
);

const AlcoholSolutions = dynamic(
  () =>
    import(
      "../../components/alcohol-delivery/AlcoholSolutions/AlcoholSolutions"
    ),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
export default function AlcoholDelivery() {
  return (
    <>
      <Head>
        <title> Alcohol web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="If you're looking to develop an alcohol web app and want to do it the right way, then Bottom Funnel is the company 
          for you! We offer a wide range of liquor web app development solutions that will suit your specific needs. Keep reading to 
          find out more!"
        />
      </Head>

      <main>
        <AlcoholBanner />
        <Trusted partnerLogo={alcoholLogo} />
        <AlcoholBookCall />
        <AlcoholSuggestions />
        <AlcoholSolutions />
      </main>
    </>
  );
}
