import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const DataScienceBanner = dynamic(
  () =>
    import(
      "../../components/DataSciencePage/DataScienceBanner/DataScienceBanner"
    ),
  { loading: () => "loading..." },
);
const DataScienceUnique = dynamic(
  () =>
    import(
      "../../components/DataSciencePage/DataScienceUnique/DataScienceUnique"
    ),
  { loading: () => "loading..." },
);
const DataScienceServices = dynamic(
  () =>
    import(
      "../../components/DataSciencePage/DataScienceServices/DataScienceServices"
    ),
  { loading: () => "loading..." },
);
const DataScienceMidBanner = dynamic(
  () =>
    import(
      "../../components/DataSciencePage/DataScienceMidBanner/DataScienceMidBanner"
    ),
  { loading: () => "loading..." },
);
const DataScienceBF = dynamic(
  () => import("../../components/DataSciencePage/DataScienceBF/DataScienceBF"),
  { loading: () => "loading..." },
);
const DataScienceMethods = dynamic(
  () =>
    import(
      "../../components/DataSciencePage/DataScienceMethods/DataScienceMethods"
    ),
  { loading: () => "loading..." },
);
const DataScienceSlider = dynamic(
  () =>
    import(
      "../../components/DataSciencePage/DataScienceSlider/DataScienceSlider"
    ),
  { loading: () => "loading..." },
);
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
