import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { MetaverseBanner } from "../../components/MetaversePage/MetaverseBanner/MetaverseBanner";
import { MetaverseServices } from "../../components/MetaversePage/MetaverseServices/MetaverseServices";
import { MetaverseOffers } from "../../components/MetaversePage/MetaverseOffers/MetaverseOffers";
import { MetaverseMidBanner } from "../../components/MetaversePage/MetaverseMidBanner/MetaverseMidBanner";
import { MetaverseWhyBF } from "../../components/MetaversePage/MetaverseWhyBF/MetaverseWhyBF";
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." }
);

export default function MetaverseWebPage() {
  return (
    <div>
      <Head>
        <title> Metaverse Development services | Bottom Funnel </title>
        <meta
          name="description"
          content="Our Metaverse solutions help companies innovate 
          and stay competitive. Our Metaverse services 
          development includes consulting, design, and 
          development. Read on to know more."
        />
      </Head>

      <main>
        <MetaverseBanner />
        <MetaverseServices />
        <MetaverseOffers />
        <MetaverseMidBanner />
        <MetaverseWhyBF />
        <CustomWebForm />
      </main>
    </div>
  );
}
