import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import { DataScienceBanner } from "../../components/DataSciencePage/DataScienceBanner/DataScienceBanner";
import { DataScienceUnique } from "../../components/DataSciencePage/DataScienceUnique/DataScienceUnique";
import { DataScienceServices } from "../../components/DataSciencePage/DataScienceServices/DataScienceServices";
import { DataScienceMidBanner } from "../../components/DataSciencePage/DataScienceMidBanner/DataScienceMidBanner";
import { DataScienceBF } from "../../components/DataSciencePage/DataScienceBF/DataScienceBF";
import { DataScienceMethods } from "../../components/DataSciencePage/DataScienceMethods/DataScienceMethods";
import { DataScienceSlider } from "../../components/DataSciencePage/DataScienceSlider/DataScienceSlider";
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
);

export default function DataScience() {
  return (
    <div>
      <Head>
        <title>Data Science Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for data science services? We've got you 
          covered. From data analysis to data visualization, 
          we have it all. Read on to know about our offerings 
          and how to register for them."
        />
      </Head>
      <main>
        <DataScienceBanner />
        <DataScienceUnique />
        <DataScienceServices />
        <DataScienceMidBanner />
        <DataScienceBF />
        <DataScienceMethods />
        <DataScienceSlider />
        <CustomWebForm />
      </main>
    </div>
  );
}
