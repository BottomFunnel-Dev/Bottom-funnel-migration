import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import { MLBanner } from "../../components/MLPages/MLBanner/MLBanner";
import { MLPopular } from "../../components/MLPages/MLPopular/MLPopular";
import { MLMidBanner } from "../../components/MLPages/MLMidBanner/MLMidBanner";
import { MLApproach } from "../../components/MLPages/MLApproach/MLApproach";
import { MLwhyBF } from "../../components/MLPages/MLwhyBF/MLwhyBF";
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." }
);

export default function MachineLearning() {
  return (
    <div>
      <Head>
        <title>Machine Learning Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Have you been looking to up your intelligence with the help of machines? Well, read on to find out everything you
            need to know about machine learning, and how it can help you in your business or personal life."
        />
      </Head>

      <main>
        <MLBanner />
        <MLPopular />
        <MLMidBanner />
        <MLApproach />
        <MLwhyBF />
        <CustomWebForm />
      </main>
    </div>
  );
}
