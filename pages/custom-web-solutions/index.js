import React from "react";
import styles from "./CustomisedWebPage.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

import { CustomisedWebBanner } from "../../components/CustomisedWebPage/CustomisedWebBanner/CustomisedWebBanner";
import { CustomisedWebUnique } from "../../components/CustomisedWebPage/CustomisedWebUnique/CustomisedWebUnique";
import { CustomisedWebServices } from "../../components/CustomisedWebPage/CustomisedWebServices/CustomisedWebServices";
import { CustomWebSolutions } from "../../components/CustomisedWebPage/CustomWebSolutions/CustomWebSolutions";
import { CustomWebMidBanner } from "../../components/CustomisedWebPage/CustomWebMidBanner/CustomWebMidBanner";
import { CustomWebWhyBF } from "../../components/CustomisedWebPage/CustomWebWhyBF/CustomWebWhyBF";
import { CustomWebSlider } from "../../components/CustomisedWebPage/CustomWebSlider/CustomWebSlider";
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
);

export default function CustomisedWebDevelopment() {
  return (
    <div className={styles.CustomisedWebPageContainer}>
      <Head>
        <title>Custom Web Solutions Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a unique web solution to meet 
          your business needs? Custom Web Solutions 
          provides various web development services. Read 
          on to know more about our services."
        />
      </Head>
      <main>
        <CustomisedWebBanner />
        <CustomisedWebUnique />
        <CustomisedWebServices />
        <CustomWebSolutions />
        <CustomWebMidBanner />
        <CustomWebWhyBF />
        <CustomWebSlider />
        <CustomWebForm />
      </main>
    </div>
  );
}
