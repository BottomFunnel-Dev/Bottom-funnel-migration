import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const AndriodBanner = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodBanner/AndriodBanner"
    ),
  { loading: () => "loading..." },
);
const AndriodBottomFunnel = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodBottomFunnel/AndriodBottomFunnel"
    ),
  { loading: () => "loading..." },
);
const AndriodCustomDevelopment = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodCustomDevelopment/AndriodCustomDevelopment"
    ),
  { loading: () => "loading..." },
);
const AndriodServices = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodServices/AndriodServices"
    ),
  { loading: () => "loading..." },
);
const AndriodUserCentric = dynamic(
  () =>
    import(
      "../../components/AndriodAppDevelopment/AndriodUserCentric/AndriodUserCentric"
    ),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
export default function AndroidAppDevelopment() {
  return (
    <>
      <Head>
        <title>
          Best android app development services company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Get started with Android app development and create innovative, top-quality apps for mobile devices. Our comprehensive guide covers every aspect of developing for Android"
        />
      </Head>
      <main>
        <AndriodBanner />
        <AndriodServices />
        <AndriodCustomDevelopment />
        <AndriodUserCentric />
        <AndriodBottomFunnel />
      </main>
    </>
  );
}
