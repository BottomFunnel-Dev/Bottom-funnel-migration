import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// ---------------importing components with lazy loading-----------------------
const CareerBanner = dynamic(
  () => import("../../components/CareerPage/CareerBanner/CareerBanner"),
  { loading: () => "loading..." },
);
const CareerMain = dynamic(
  () => import("../../components/CareerPage/CareerMain/CareerMain"),
  { loading: () => "loading..." },
);
const CareerReferral = dynamic(
  () => import("../../components/CareerPage/CareerReferral/CareerReferral"),
  { loading: () => "loading..." },
);
const CarrerMidBanner = dynamic(
  () => import("../../components/CareerPage/CarrerMidBanner/CarrerMidBanner"),
  { loading: () => "loading.." },
);

// ------------------Main page function-----------------
const index = () => {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Career | Bottom Funnel </title>
        <meta
          name="description"
          content="We are working on some of the biggest names in the industry, so you can trust us when we say that our product will be in sync with changing market demands. Our team members are intelligent and fun humans who love what they do, and they will help you build better mobile apps!"
        />
      </Head>
      <main>
        <CareerBanner />
        <CareerMain />
        <CareerReferral />
        <CarrerMidBanner />
      </main>
    </div>
  );
};

export default index;
