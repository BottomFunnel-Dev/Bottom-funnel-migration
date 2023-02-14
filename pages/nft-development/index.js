import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const NFTDevBanner = dynamic(
  () => import("../../components/NFTpage/NFTDevBanner/NFTDevBanner"),
  { loading: () => "loading..." }
);
const NFTAboutIt = dynamic(
  () => import("../../components/NFTpage/NFTAboutIt/NFTAboutIt"),
  { loading: () => "loading..." }
);
const NFTOffers = dynamic(
  () => import("../../components/NFTpage/NFTOffers/NFTOffers"),
  { loading: () => "loading..." }
);
const NFTSolutions = dynamic(
  () => import("../../components/NFTpage/NFTSolutions/NFTSolutions"),
  { loading: () => "loading..." }
);
const NFTMidBanner = dynamic(
  () => import("../../components/NFTpage/NFTMidBanner/NFTMidBanner"),
  { loading: () => "loading..." }
);
const NFTWhyBF = dynamic(
  () => import("../../components/NFTpage/NFTWhyBF/NFTWhyBF"),
  { loading: () => "loading..." }
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." }
);

export default function NFTDevelopment() {
  return (
    <div>
      <Head>
        <title>NFT Development Service Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for reliable NFT development services? Our team has extensive experience in this area 
          and offers cutting-edge solutions. Read on to know about our services"
        />
      </Head>

      <main>
        <NFTDevBanner />
        <NFTAboutIt />
        <NFTOffers />
        <NFTSolutions />
        <NFTMidBanner />
        <NFTWhyBF />
        <CustomWebForm />
      </main>
    </div>
  );
}
