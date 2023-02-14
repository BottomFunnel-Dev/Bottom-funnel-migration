import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const BigDataServiceBanner = dynamic(
  () =>
    import(
      "../../components/BigDataServiceCom/BigDataServiceBanner/BigDataServiceBanner"
    ),
  { loading: "loading..." },
);

const BigDataServicePopular = dynamic(
  () =>
    import(
      "../../components/BigDataServiceCom/BigDataServicePopular/BigDataServicePopular"
    ),
  { loading: "loading..." },
);
const BigDataServiceHandling = dynamic(
  () =>
    import(
      "../../components/BigDataServiceCom/BigDataServiceHandling/BigDataServiceHandling"
    ),
  { loading: "loading..." },
);
const BigDataServiceBF = dynamic(
  () =>
    import(
      "../../components/BigDataServiceCom/BigDataServiceBF/BigDataServiceBF"
    ),
  { loading: "loading..." },
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: "loading..." },
);

export default function BigDataService() {
  return (
    <div>
      <Head>
        <title>Big Data Development Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a Big Data Company that can 
      provide you with reliable and effective Big Data 
      services? Look no further! Our Big Data Services 
      include Big Data analysis, data preparation, and 
      more!"
        />
      </Head>

      <main>
        <BigDataServiceBanner />
        <BigDataServicePopular />
        <BigDataServiceHandling />
        <BigDataServiceBF />
        <CustomWebForm />
      </main>
    </div>
  );
}
