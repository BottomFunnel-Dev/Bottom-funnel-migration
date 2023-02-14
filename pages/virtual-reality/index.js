import React from "react";

import { VRBanner } from "../../components/VRPage/VRBanner/VRBanner";
import { VRMidBanner } from "../../components/VRPage/VRMidBanner/VRMidBanner";
import { VRServices } from "../../components/VRPage/VRServices/VRServices";
import { VRwhyBF } from "../../components/VRPage/VRwhyBF/VRwhyBF";
import { VRSlider } from "../../components/VRPage/VRSlider/VRSlider";
import { VRForm } from "../../components/VRPage/VRForm/VRForm";

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
