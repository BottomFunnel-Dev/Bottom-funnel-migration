import React from "react";
import dynamic from "next/dynamic";

const VRBanner = dynamic(
  () => import("../../components/VRPage/VRBanner/VRBanner"),
  { loading: () => "loading..." },
);
const VRMidBanner = dynamic(
  () => import("../../components/VRPage/VRMidBanner/VRMidBanner"),
  { loading: () => "loading..." },
);
const VRServices = dynamic(
  () => import("../../components/VRPage/VRServices/VRServices"),
  { loading: () => "loading..." },
);
const VRwhyBF = dynamic(
  () => import("../../components/VRPage/VRwhyBF/VRwhyBF"),
  { loading: () => "loading..." },
);
const VRSlider = dynamic(
  () => import("../../components/VRPage/VRSlider/VRSlider"),
  { loading: () => "loading..." },
);
const VRForm = dynamic(() => import("../../components/VRPage/VRForm/VRForm"), {
  loading: () => "loading...",
});

import Head from "next/head";

export default function VirtualReality() {
  return (
    <div>
      <Head>
        <title>
          Virtual Reality Development Services Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Virtual reality development offers an exciting new 
          platform for businesses to engage with their 
          customers. Read on to learn about the advantages 
          of offering VRS"
        />
      </Head>
      <main>
        <VRBanner />
        <VRServices />
        <VRMidBanner />
        <VRwhyBF />
        <VRSlider />
        <VRForm />
      </main>
    </div>
  );
}
