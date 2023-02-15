import React from "react";
import styles from "./OurDevPage.module.css";
import { OurDevBanner } from "../../components/OurDevPage/OurDevBanner/OurDevBanner";
import { OurDevProcess } from "../../components/OurDevPage/OurDevProcess/OurDevProcess";
import { OurWholeDev } from "../../components/OurDevPage/OurWholeDev/OurWholeDev";
import { OurDevQuery } from "../../components/OurDevPage/OurDevQuery/OurDevQuery";

import Head from "next/head";

export default function OurDevelopment() {
  return (
    <div className={styles.ourDevPageContainer}>
      <Head>
        <title>
          Our Development Process and Working Methodology | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel has evolved from a humble beginning as an IT service provider to a leading global software company with widespread presence across the globe."
        />
      </Head>

      <main>
        <OurDevBanner />
        <OurDevProcess />
        <OurWholeDev />
        <OurDevQuery />
      </main>
    </div>
  );
}
