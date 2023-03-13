import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const RealEstateBanner = dynamic(
  () => import("../../components/RealEstate/RealEstateBanner"),
  { loading: () => "loading..." },
);
const RealEstateNextBanner = dynamic(
  () => import("../../components/RealEstate/RealEstateNextBanner"),
  { loading: () => "loading..." },
);
const RealEstateSolution = dynamic(
  () => import("../../components/RealEstate/RealEstateSolution"),
  { loading: () => "loading..." },
);
const RealEstateCustomer = dynamic(
  () => import("../../components/RealEstate/RealEstateCustomer"),
  { loading: () => "loading..." },
);
const RealEstateAdminPannel = dynamic(
  () => import("../../components/RealEstate/RealEstateAdminPannel"),
  { loading: () => "loading..." },
);
const RealEstateDriver = dynamic(
  () => import("../../components/RealEstate/RealEstateDriver"),
  { loading: () => "loading..." },
);
const Realestatelowerbanner = dynamic(
  () => import("../../components/RealEstate/Realestatelowerbanner"),
  { loading: () => "loading..." },
);
const Realestatewhychoose = dynamic(
  () => import("../../components/RealEstate/Realestatewhychoose"),
  { loading: () => "loading..." },
);

export default function RealEstate() {
  return (
    <div>
      <Head>
        <title>
          Real Estate Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Wondering if it's time that you started thinking about developing a Real Estate Web App? Read on to know more 
          about the benefits of doing so, and find out who the best Real Estate Web App Development company is for you."
        />
      </Head>

      <main>
        <RealEstateBanner />
        {/* <RealEstateNextBanner /> */}
        <RealEstateSolution />
        <RealEstateCustomer />
        <RealEstateAdminPannel />
        <RealEstateDriver />
        <Realestatelowerbanner />
        <Realestatewhychoose />
      </main>
    </div>
  );
}
