import React from "react";

import { WearableBanner } from "../../components/WearableAppDevelopment/WearableBanner/WearableBanner";
import { WearableContainer } from "../../components/WearableAppDevelopment/WearableContainer/WearableContainer";
import { Scroller } from "../../components/WearableAppDevelopment/Scroller/Scroller";
import { Usercentric } from "../../components/WearableAppDevelopment/Usercentric/Usercentric";
import { WearablePartner } from "../../components/WearableAppDevelopment/WearablePartner/WearablePartner";

import Head from "next/head";

export default function WearableAppDevelopment() {
  return (
    <>
      <Head>
        <title>Wearable App Development Services | Bottom Funnel</title>
        <meta
          name="description"
          content="BottomFunnel IT Solution offers Wearable Device App Development Services for iOS and Android. We have expertise in developing apps for smart watches, Smart Glasses and fitness bands."
        />
      </Head>
      <main>
        <WearableBanner />
        <WearableContainer />
        <Scroller />
        <Usercentric />
        <WearablePartner />
      </main>
    </>
  );
}
