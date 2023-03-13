import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const AwardsBanner = dynamic(
  () => import("../../components/AwardsPage/AwardsBanner/AwardsBanner"),
  { loading: "Loading..." },
);

const AwardsSection = dynamic(
  () => import("../../components/AwardsPage/AwardsSection/AwardsSection"),
  { loading: "Loading..." },
);

export default function Awards() {
  return (
    <div>
      <Head>
        <title>Awards | Bottom Funnel</title>
        <meta
          name="description"
          content="Get the latest information on awards for companies and 
          individuals by visiting our website. We cover a wide range 
          of categories, from small businesses to multinationals."
        />
      </Head>
      <main>
        <AwardsBanner />
        <AwardsSection />
      </main>
    </div>
  );
}
