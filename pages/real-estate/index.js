import React from "react";
import { RealEstateBanner } from "../../components/RealEstate/RealEstateBanner";
import { RealEstateNextBanner } from "../../components/RealEstate/RealEstateNextBanner";
import { RealEstateSolution } from "../../components/RealEstate/RealEstateSolution";
import { RealEstateCustomer } from "../../components/RealEstate/RealEstateCustomer";
import { RealEstateAdminPannel } from "../../components/RealEstate/RealEstateAdminPannel";
import { RealEstateDriver } from "../../components/RealEstate/RealEstateDriver";
import { Realestatelowerbanner } from "../../components/RealEstate/Realestatelowerbanner";
import { Realestatewhychoose } from "../../components/RealEstate/Realestatewhychoose";

import Head from "next/head";

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
