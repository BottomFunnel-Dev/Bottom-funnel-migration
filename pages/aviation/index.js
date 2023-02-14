import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const AviationAirlines = dynamic(
  () => import("../../components/Aviation/AviationAirlines"),
  { loading: "Loading..." },
);

const AviationLetsDiscuss = dynamic(
  () => import("../../components/Aviation/AviationLetsDiscuss"),
  { loading: "Loading..." },
);

const AvitaionBanner = dynamic(
  () => import("../../components/Aviation/AvitaionBanner"),
  { loading: "Loading..." },
);

const AvitaionLowerBaner = dynamic(
  () => import("../../components/Aviation/AvitaionLowerBaner"),
  { loading: "Loading..." },
);

export default function Aviation() {
  return (
    <div>
      <Head>
        <title>Aviation Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Do you want to develop an aviation web app but don't know where 
        to start? Our team of experienced professionals can help you build 
        the perfect solution, tailored specifically for your business."
        />
      </Head>

      <AvitaionBanner />
      <AviationAirlines />
      <AviationLetsDiscuss />
      <AvitaionLowerBaner />
    </div>
  );
}
