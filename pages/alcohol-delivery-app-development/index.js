import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { alcoholLogo } from "../../components/Data/SeopartnerData";

// ---------------importing components with lazy loading-----------------------
const AlcoholBanner = dynamic(
  () => import("../../components/alcohol-delivery/AlcoholBanner/AlcoholBanner"),
  { loading: () => "loading..." }
);

const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: () => "loading..." }
);

const AlcoholBookCall = dynamic(
  () =>
    import("../../components/alcohol-delivery/AlcoholBookCall/AlcoholBookCall"),
  { loading: () => "loading..." }
);

const AlcoholSuggestions = dynamic(
  () =>
    import(
      "../../components/alcohol-delivery/AlcoholSuggestions/AlcoholSuggestions"
    ),
  { loading: () => "loading..." }
);

const AlcoholSolutions = dynamic(
  () =>
    import(
      "../../components/alcohol-delivery/AlcoholSolutions/AlcoholSolutions"
    ),
  { loading: () => "loading..." }
);

// ------------------Main page function-----------------
export default function AlcoholDelivery() {
  return (
    <>
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
