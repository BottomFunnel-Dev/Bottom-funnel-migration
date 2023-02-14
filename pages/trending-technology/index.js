import React from "react";
import { TrendingTechnologyBanner } from "../../components/TrendingTechnology/TrendingTechnologyBanner";
import { TrendingTechnologyService } from "../../components/TrendingTechnology/TrendingTechnologyService";
import { TrendingTechnologyLowerBanner } from "../../components/TrendingTechnology/TrendingTechnologyLowerBanner";
import { TrendingWhyChoose } from "../../components/TrendingTechnology/TrendingWhyChoose";

import Head from "next/head";

export default function TrendingTech() {
  return (
    <div>
      <Head>
        <title>Trending Technology Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Get the latest on trending technology development 
          services with our comprehensive guide. Read on to
          know about the top trends in tech"
        />
      </Head>
      <main>
        <TrendingTechnologyBanner />
        <TrendingTechnologyService />
        <TrendingTechnologyLowerBanner />
        <TrendingWhyChoose />
      </main>
    </div>
  );
}
