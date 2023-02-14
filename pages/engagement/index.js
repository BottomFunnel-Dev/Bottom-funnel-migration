import React from "react";

import { EngagementBanner } from "../../components/EngagementPage/EngagementBanner/EngagementBanner";
import { EngagementProcess } from "../../components/EngagementPage/EngagementProcess/EngagementProcess";
import { EngagementRanges } from "../../components/EngagementPage/EngagementRanges/EngagementRanges";
import { EngagementQuery } from "../../components/EngagementPage/EngagementQuery/EngagementQuery";
import Head from "next/head";

export default function EngagementModel() {
  return (
    <div>
      <Head>
        <title>
          {" "}
          Engagement Models - Fixed Price, Time Material, Dedicated Resource |
          Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel is a modern, efficient way to meet customer's needs. We offer multiple engagement models and pricing options to meet client needs. Bottom Funnel's experienced staff understand how to design engaging websites that will keep visitors interested. Our team can also assist with marketing strategies so your business can reach the maximum number of visitors possible!"
        />
      </Head>
      <main>
        <EngagementBanner />
        <EngagementProcess />
        <EngagementRanges />
        <EngagementQuery />
      </main>
    </div>
  );
}
