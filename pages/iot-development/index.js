import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import { IOTBanner } from "../../components/IOTPage/IOTBanner/IOTBanner";
import { IOTServices } from "../../components/IOTPage/IOTServices/IOTServices";
import { IOTMidBanner } from "../../components/IOTPage/IOTMidBanner/IOTMidBanner";
import { IOTwhyBF } from "../../components/IOTPage/IOTwhyBF/IOTwhyBF";
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
);

export default function IOTDevelopment() {
  return (
    <div>
      <Head>
        <title>IOT App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Building an IOT web app can be a challenging task, but our team 
          of experts is here to help you get started and achieve success.
          Learn about our top IOT Web App Development services that 
          will make your life easier!"
        />
      </Head>
      <main>
        <IOTBanner />
        <IOTServices />
        <IOTMidBanner />
        <IOTwhyBF />
        <CustomWebForm />
      </main>
    </div>
  );
}
